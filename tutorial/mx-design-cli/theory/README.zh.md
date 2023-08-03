
## 前言

本文旨在介绍一个打包工具的目标，该工具的主要功能包括：

- 导出类型声明文件
- 导出 CommonJS 模块、ES 模块等多种形式的产物
- 支持样式文件 CSS 引入，而非只有 LESS，从而降低业务方的接入成本
- 支持按需加载功能，以提高性能。


## 导出类型声明文件

主要是利用tsc（typescript自带命令）去单独导出ts文件定义

首先，我们需要在package.json中定义入口，也就是别人安装了你的npm包之后，如果想有类型提示，就要去你在package.json中定义入口定义的位置去找，例如说：


```javascript
// package.json
{
  "typings": "types/index.d.ts", // 定义类型入口文件
  "scripts": {
    "build:types": "rimraf types && tsc --outDir types -d --emitDeclarationOnly",
  }
}
```

- --outDir types：指定编译后的 JavaScript 文件输出的目录为 types。
- -d 或 --declaration：生成 .d.ts 声明文件。这个选项会告诉 TypeScript 编译器生成一个与每个编译后的 JavaScript 文件对应的 .d.ts 文件，该文件包含了该文件中定义的所有类型和接口的声明
- --emitDeclarationOnly：告诉 TypeScript 编译器只生成 .d.ts 文件，而不生成 JavaScript 文件。这个选项通常与 -d 或 --declaration 选项一起使用。

## 导出 Commonjs 模块

为什么是 gulp 而不是 webpack 或 rollup ？因为我们要做的是代码编译而非代码打包，同时需要考虑到样式处理及其按需加载。

### babel 配置

首先安装babel及其相关依赖


.babelrc.js
```
module.exports = {
  presets: ['@babel/env', '@babel/typescript', '@babel/react'],
  plugins: [
    '@babel/proposal-class-properties',
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
        helpers: true,
      },
    ],
  ],
};
```
关于@babel/plugin-transform-runtime与@babel/runtime-corejs3：

- 若helpers选项设置为true，可抽离代码编译过程重复生成的 helper 函数（classCallCheck,extends等），减小生成的代码体积；

- 若corejs设置为3，可引入不污染全局的按需polyfill，常用于类库编写（我更推荐：不引入polyfill，转而告知使用者需要引入何种polyfill，避免重复引入或产生冲突，后面会详细提到）。


### 配置目标环境

为了避免转译浏览器原生支持的语法，新建.browserslistrc文件，根据适配需求，写入支持浏览器范围，作用于@babel/preset-env。

.browserslistrc
```
>0.2%
not dead
not op_mini all
```
很遗憾的是，@babel/runtime-corejs3无法在按需引入的基础上根据目标浏览器支持程度再次减少polyfill的引入

这意味着@babel/runtime-corejs3 甚至会在针对现代引擎的情况下注入所有可能的 polyfill：不必要地增加了最终捆绑包的大小。

对于组件库（代码量可能很大），个人建议将polyfill的选择权交还给使用者，在宿主环境进行polyfill。若使用者具有兼容性要求，自然会使用@babel/preset-env + core-js + .browserslistrc进行全局polyfill，这套组合拳引入了最低目标浏览器不支持API的全部 polyfill。

顺带一提，业务开发中，若将@babel/preset-env的useBuiltIns选项值设置为 usage，同时把node_modules从babel-loader中exclude，会导致babel 无法检测到nodes_modules中所需要的polyfill。


我是怎么做的呢，在[mx-design](https://github.com/lio-mengxiang/mx-design)中，我只是在mx-deisgn项目根目录添加了.browserslistrc文件，配置为：
```
chrome 80
edge 79
firefox 78
safari 14
```

所以配置修改为：

.babelrc.js
```javascript
module.exports = {
  presets: ['@babel/env', '@babel/typescript', '@babel/react'],
  plugins: ['@babel/plugin-transform-runtime', '@babel/proposal-class-properties'],
};
```
@babel/transform-runtime的helper选项默认为true。



### gulp 配置
再来安装gulp相关依赖
```
yarn add gulp gulp-babel --dev
```
新建gulpfile.js，写入以下内容：

gulpfile.js

```javascript
const gulp = require('gulp');
const babel = require('gulp-babel');

const paths = {
  dest: {
    lib: 'lib', // commonjs 文件存放的目录名 - 本块关注
    esm: 'esm', // ES module 文件存放的目录名 - 暂时不关心
    dist: 'dist', // umd文件存放的目录名 - 暂时不关心
  },
  styles: 'src/**/*.less', // 样式文件路径 - 暂时不关心
  scripts: ['src/**/*.{ts,tsx}', '!src/**/demo/*.{ts,tsx}'], // 脚本文件路径
};

function compileCJS() {
  const { dest, scripts } = paths;
  return gulp
    .src(scripts)
    .pipe(babel()) // 使用gulp-babel处理
    .pipe(gulp.dest(dest.lib));
}

// 并行任务 后续加入样式处理 可以并行处理
const build = gulp.parallel(compileCJS);

exports.build = build;

exports.default = build;
```
修改package.json

package.json
```javascript
{
- "main": "index.js",
+ "main": "lib/index.js",
  "scripts": {
    ...
+   "clean": "rimraf lib esm dist",
+   "build": "npm run clean && npm run build:types && gulp",
    ...
  },
}
```
执行yarn build


观察编译后的源码，可以发现：诸多helper方法已被抽离至@babel/runtime中，模块导入导出形式也是commonjs规范。

## 导出 ES module


生成ES module可以更好地进行tree shaking，基于上一步的babel配置，更新以下内容：

- 配置@babel/preset-env的modules选项为false，关闭模块转换；
- 配置@babel/plugin-transform-runtime的useESModules选项为true，使用ES module形式引入helper函数。

.babelrc.js
```javascript
module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: false, // 关闭模块转换
      },
    ],
    '@babel/typescript',
    '@babel/react',
  ],
  plugins: [
    '@babel/proposal-class-properties',
    [
      '@babel/plugin-transform-runtime',
      {
        useESModules: true, // 使用esm形式的helper
      },
    ],
  ],
};
```

目标达成，我们再使用环境变量区分esm和cjs（执行任务时设置对应的环境变量即可），最终babel配置如下：

.babelrc.js
```javascript
module.exports = {
  presets: ['@babel/env', '@babel/typescript', '@babel/react'],
  plugins: ['@babel/plugin-transform-runtime', '@babel/proposal-class-properties'],
  env: {
    esm: {
      presets: [
        [
          '@babel/env',
          {
            modules: false,
          },
        ],
      ],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            useESModules: true,
          },
        ],
      ],
    },
  },
};
```
接下来修改gulp相关配置，抽离compileScripts任务，增加compileESM任务。

gulpfile.js
```javascript
// ...

/**
 * 编译脚本文件
 * @param {string} babelEnv babel环境变量
 * @param {string} destDir 目标目录
 */
function compileScripts(babelEnv, destDir) {
  const { scripts } = paths;
  // 设置环境变量
  process.env.BABEL_ENV = babelEnv;
  return gulp
    .src(scripts)
    .pipe(babel()) // 使用gulp-babel处理
    .pipe(gulp.dest(destDir));
}

/**
 * 编译cjs
 */
function compileCJS() {
  const { dest } = paths;
  return compileScripts('cjs', dest.lib);
}

/**
 * 编译esm
 */
function compileESM() {
  const { dest } = paths;
  return compileScripts('esm', dest.esm);
}

// 串行执行编译脚本任务（cjs,esm） 避免环境变量影响
const buildScripts = gulp.series(compileCJS, compileESM);

// 整体并行执行任务
const build = gulp.parallel(buildScripts);

// ...
```
执行yarn build，可以发现生成了types/lib/esm三个文件夹，观察esm目录，结构同lib/types一致，js 文件都是以ES module模块形式导入导出


## 处理样式文件

### 拷贝 less 文件

我们会将less文件包含在npm包中，用户可以通过happy-ui/lib/alert/style/index.js的形式按需引入less文件，此处可以直接将 less 文件拷贝至目标文件夹。

在gulpfile.js中新建copyLess任务。

gulpfile.js
```javascript
// ...

/**
 * 拷贝less文件
 */
function copyLess() {
  return gulp
    .src(paths.styles)
    .pipe(gulp.dest(paths.dest.lib))
    .pipe(gulp.dest(paths.dest.esm));
}

const build = gulp.parallel(buildScripts, copyLess);

// ...

```
观察lib目录，可以发现 less 文件已被拷贝至组件的style目录下


可能有些同学已经发现问题：若使用者没有使用less预处理器，使用的是sass方案甚至原生css方案，那现有方案就搞不定了。经分析，有以下 3 种预选方案：

- 告知用户增加less-loader；
- 打包出一份完整的 css 文件，进行全量引入；
- 单独提供一份style/css.js文件，引入的是组件 css文件依赖，而非 less 依赖，组件库底层抹平差异。

方案 1 会导致使用成本增加。

方案 2 无法对样式文件进行按需引入（后续在 umd 打包时我们也会提供该样式文件）。

以上两种方案实为下策。

方案 3 比较符合此时的的场景，ant design4版本使用的也是这种方案。

在搭建组件库的过程中，有一个问题困扰了我很久：为什么需要alert/style/index.js引入less文件或alert/style/css.js引入css文件？

答案是管理样式依赖。

假设存在以下场景：引入`<Button />`，`<Button />`依赖了`<Icon />`，使用者需要手动去引入调用的组件的样式（`<Button />`）及其依赖的组件样式（`<Icon />`），遇到复杂组件极其麻烦，所以组件库开发者可以提供一份这样的js文件，使用者手动引入这个js文件，就能引入对应组件及其依赖组件的样式。

继续我们的旅程。


### 生成 css 文件

```
yarn add gulp-less gulp-autoprefixer gulp-cssnano --dev
```

将less文件生成对应的css文件，在gulpfile.js中增加less2css任务

```javascript
// ...

/**
 * 生成css文件
 */
function less2css() {
  return gulp
    .src(paths.styles)
    .pipe(less()) // 处理less文件
    .pipe(autoprefixer()) // 根据browserslistrc增加前缀
    .pipe(cssnano({ zindex: false, reduceIdents: false })) // 压缩
    .pipe(gulp.dest(paths.dest.lib))
    .pipe(gulp.dest(paths.dest.esm));
}

const build = gulp.parallel(buildScripts, copyLess, less2css);

// ...

```


行yarn build，组件style目录下已经存在css文件了。

接下来我们需要一个alert/style/css.js来帮用户引入css文件。

### 生成 css.js

安装相关依赖。
```
yarn add through2 --dev
```
gulpfile.js
```javascript
// ...

/**
 * 编译脚本文件
 * @param {*} babelEnv babel环境变量
 * @param {*} destDir 目标目录
 */
function compileScripts(babelEnv, destDir) {
  const { scripts } = paths;
  process.env.BABEL_ENV = babelEnv;
  return gulp
    .src(scripts)
    .pipe(babel()) // 使用gulp-babel处理
    .pipe(
      through2.obj(function z(file, encoding, next) {
        this.push(file.clone());
        // 找到目标
        if (file.path.match(/(\/|\\)style(\/|\\)index\.js/)) {
          const content = file.contents.toString(encoding);
          file.contents = Buffer.from(cssInjection(content)); // 文件内容处理
          file.path = file.path.replace(/index\.js/, 'css.js'); // 文件重命名
          this.push(file); // 新增该文件
          next();
        } else {
          next();
        }
      }),
    )
    .pipe(gulp.dest(destDir));
}

// ...

```

cssInjection的实现：

```javascript
/**
 * 当前组件样式 import './index.less' => import './index.css'
 * 依赖的其他组件样式 import '../test-comp/style' => import '../test-comp/style/css.js'
 * 依赖的其他组件样式 import '../test-comp/style/index.js' => import '../test-comp/style/css.js'
 * @param {string} content
 */
function cssInjection(content) {
  return content
    .replace(/\/style\/?'/g, "/style/css'")
    .replace(/\/style\/?"/g, '/style/css"')
    .replace(/\.less/g, '.css');
}

```
再进行打包，可以看见组件style目录下生成了css.js文件，引入的也是上一步less转换而来的css文件。


### 按需加载
在 package.json 中增加sideEffects属性，配合ES module达到tree shaking效果（将样式依赖文件标注为side effects，避免被误删除）。
```javascript
// ...
"sideEffects": [
  "dist/*",
  "esm/**/style/*",
  "lib/**/style/*",
  "*.less"
],
// ...

```

使用以下方式引入，可以做到js部分的按需加载(会自动引入less样式，所以你的开发环境例如webpack需要配置less-loader)：
```javascript
import { Alert } from '@mx-design/web';
```

当然，如果你也可以引入没有css的js文件

```javascript
import { NcAlert } from '@mx-design/web';
```
### 全局css配置
@mx-design/web设置了全局和局部的css变量，可以让你去改变，全局css配置。

```
import React from 'react';
import { MxConfigProvider, darkTheme, lightTheme  } from '@mx-design/web';

function App() {
  return (
      <MxConfigProvide globalCssVariables={lightTheme}>
        <RouterProvider router={router} />
      </MxConfigProvider>
    </ConfigProvider>
  );
}

```

其中`lightTheme`是亮色主题，`darkTheme`是暗色主题，所以，你可以自己写一份css变量名跟lightTheme一致的文件导入到MxConfigProvide中，实现自己的主题色切换。

### 局部css配置

通过themeStyle来配置，具体每个组件和全局有哪些css变量支持，首先你可以在官网打开chrome浏览器的控制台查看，也可以查阅mx-design官网（待补充）

```javascript
import { Button } from '@mx-design/web';

function App() {
  return (
      <Button type="brand" themeStyle={{ '--btn-brand-color-bg': 'red' }}>Brand</Button>
  )
}`;

```

当然，你也可以在打包文件里单独引入css
```javascript
import { NcAlert } from '@mx-design/web';
import '@mx-design/web/esm/Alert/style/index.css';
```



引用(获得作者允许)：
[React 组件库搭建指南-打包输出](https://juejin.cn/post/6844904031278596104)
