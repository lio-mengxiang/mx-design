## 语言

[English](./README.md) | [中文](./README.zh.md)

[源码分析](#源码分析)

## 简介

- [x] 方便开发：一行命令启动 react + less 业务项目
- [x] 方便打包业务代码： 一行命令打包 react 业务项目，webpack5 打包，无需关注 webpack 配置和优化，我们帮你做了
- [x] 方便打包 react 组件库： 一行命令打包 react 组件库，打包方式等同 ant design（打包组件库要按需加载，跟业务代码打包的配置是不一样的）

## 项目简介

- 通过 @mx-deisgn/cli 可以快速启动开发环境，打包项目（案例在 example 文件夹下）

## Install

use `npm`

```node
npm install @mx-design/cli --save-dev
```

or use `yarn`

```node
yarn add @mx-design/cli --dev
```

## Usage

```node
mx buildLib [options]    打包编译react组件库

mx dev [options]         运行开发环境

mx buildSite [options]   打包编译web项目(平时的业务代码)

mx --help                查看帮助信息

mx --version             查看版本信息
```

## 详细命令如下

在 package.json 的 devDependencies 中加入

```javascript
  "devDependencies": {
    + "@mx-design/cli": "xxx"
  }
```

开发环境配置

```javascript
  "scripts": {
    "start": "mx dev",
  },
```

## 注意在项目根目录添加 mx.config.js 配置文件
为了实现 dev 环境自定义配置，我们还会读取你在根目录的 mx.config.js 文件，案例如下：

```javascript
// mx.config.js
const path = require('path');

module.exports = {
  // 自定义入口文件，必填
  entries: {
    index: {
      entry: ['./src/index.js'],
      template: './public/index.html',
      favicon: './favicon.ico',
    },
  // 别名配置，可省略
  resolve: {
    alias: {
      '@': path.join(process.cwd(), '/'),
    },
  },
  // 加入自定义Babel插件
  setBabelOptions: (options) => {
    options.plugins.push([
      'prismjs',
      {
        languages: ['javascript', 'typescript', 'jsx', 'tsx', 'css', 'scss', 'markup', 'bash'],
        theme: 'default',
        css: true,
      },
    ]);
  },
  // 加入自定义loader
  setRules: (rules) => {
    rules.push({
      test: /\.md$/,
      use: ['raw-loader'],
    });
  },
  // 拿到webpack所有配置的config
  setConfig: (config) => {
    if (config.mode === 'production') config.output.publicPath = '/mx-design/';
  },
};

```

好了，这就配置好开发环境了，是不是很简单，目前我们用的 webpack5 启动开发环境，解放你的 webpack 配置问题。

## 开发环境配置vite

vite的开发环境非常好配置，所以我们的库原生就没有支持。我的react ui组件库的官网，开发环境既支持webpack5（@mx-design/cli），也支持vite，以下是转换时遇到的问题，我总结成了一篇文章：[webpack react项目 完美迁移vite --- 坑点记录！](https://juejin.cn/post/7173880104362524702?searchId=20230729120108D161C32971AE1047253D)

build 业务代码更简单

```javascript
 "scripts": {
    "start": "mx buildSite",
  }
```

我们也会读取你根目录下 mx.config.js 文件配置，当然还有一些遍历的命令行选项，比如

```javascript
 "scripts": {
    "start": "mx buildSite --analyzer", // 启用包分析工具
  }

   "scripts": {
    "start": "mx buildSite --out-dir lib", // 打包后的地址目录默认是dist，这里改成了lib
  }
```

打包组件库命令行如下（以下是建议的配置，命令行输入 npm/yarn run build 即可）：

```javascript
 "scripts": {
   "build:types": "rimraf types && tsc --outDir types -d --emitDeclarationOnly",

    "build:es": "rimraf esm && mx buildLib --mode esm --entry-dir ./components --less-2-css --copy-less",

    "build:cjs": "rimraf lib && mx buildLib --mode cjs --entry-dir ./components --less-2-css --copy-less",

    "build": "yarn build:types && yarn build:cjs && yarn build:es && yarn build:umd",
  }
```

上面命令解释如下：

- `--mode cjs`
  - 表示打包 cjs 模式
- `--mode esm`
  - 表示打包 esm 模式
- `--mode umd`
  - 表示打包 umd 模式
- `--mode cjs`
  - 表示打包 cjs 模式
- `--less-2-css`
  - 表示将 less 转为 css
- `--entry-dir`
  - mode 是 esm 和 cjs 生效
  - 传入打包时入口目录 默认是 src
- `--entry`
  - umd 模式生效
  - umd 入口文件 默认是 src/index
- `--copy-less`
  - 复制 less 文件到
- `-out-dir-umd`
  - 在 mode 是 umd 模式生效
  - 输出 umd 格式的目录，默认是`./dist`
- `--out-dir-esm`
  - 输出 esm 格式的目录, 默认是`./esm`
- `--out-dir-cjs`
  - 输出 cjs 格式的目录，默认`./lib"`
- `--analyzerUmd`
  - 是否 webpack 打包启用分析器

以上的命令所有详细参数可以这样查看：

```javascript
 "scripts": {
    "buildLibHelp": "mx help buildLib", // 查看所有打包组件库的命令行参数

    "buildSiteHelp": "mx help buildSite", // 查看所有webpack打包业务代码的命令行参数

    "testHelp": "mx help test", // 查看单元测试所有命令行参数

    "devHelp": "mx help dev", // 查看所有dev环境配置参数
  }
```

## 案例

在 example 文件夹下有一个案例，安装好包的依赖就可以 npm run dev 启动了

## 源码分析

### 开始，使用 commander 来读取命令行参数

如何创建自己的 mx 命令呢？

需要在 package.json 的 bin 字段，加上

```json
  "bin": {
    "mx": "./bin/index.js"
  },
```

这样，当别人下载你的 npm 包的时候，使用 mx 命令就对应的是调用你 npm 包里 bin 目录下的 index.js，也就是说别人在 package.json 的 script 输入 mx 命令，就相当于调用了 mx-design 包里，bin 目录下的 index.js 了

我们看看 index.js 是长什么样子

```bash
#!/usr/bin/env node

require('../lib/index');
```

很简单就是调用的 lib 下的 index.ts 文件

lib 目录使我们最终生成的组件库（比如需要 ts 转译成 js，babel 转译语法什么的），里面的 index.js 就是入口文件。我们看项目里实际开发的 index.ts 入口文件吧。

讲解 index.ts 文件之前，我需要介绍一下 commander 这个库的简单用法

```javascript
// index.js
const program = require('commander');
program.version('1.0.0').parse(process.argv);
```

上面的代码执行`node index.js -V`  或者  `node index.js --version`会得到版本号 1.0.0
program.version('1.0.0')是注册命令的意思，parse 是解析命令行的参数，这里传入 process.argv，意思是解析 process.argv 里的参数，所以我们输入`node index.js --version`，其实就是把参数 version 传给了 commander

我们只要取得 package.json 中的 version 字段，所以会得 cli 工具的版本号

src 目录下的 index.ts（代码解释会写在注释里）

```typescript
import commander from 'commander';

import { buildLib } from './buildLib/index';
import { buildSite } from './buildSite/index';
import { runDev } from './dev/index';
import { version } from '../package.json';

commander.version(version, '-v, --version');

buildLib(commander);
buildSite(commander);
runDev(commander);

commander.parse(process.argv);

if (!commander.args[0]) {
  commander.help();
}
```

## 开发环境配置

我们先来看看执行 mx dev 时，执行了函数`runDev(commander)`，这个函数的运行流程是什么，runDev 函数如下

```javascript
// 当你mx dev时，真正执行的文件是development
import development from './development';
// DEV就是字符串'dev'
import { DEV } from '../constants';

export const runDev = (commander) => {
  // commander注册'dev'这个参数的命令
  commander
    .command(DEV)
    .description('运行开发环境')
    .option('-h, --host <host>', '站点主机地址', 'localhost')
    // 默认端口号3000
    .option('-p, --port <port>', '站点端口号', '3000')
    // 命令最终运行的文件
    .action(development);
};
```

dev 环境的重点来了，development 文件里面是什么

这个 development 有 3 个重点问题：

- 如何写一个 compose 函数，提高你的代码质量，不知道 compose 函数的同学请看这篇文章[终极 compose 函数封装方案](https://juejin.cn/post/6989815456416661534)，或者你直接看我下面的代码就明白了

- 如何启动 WebpackDevServer
- 启动的时候我们会启动默认端口 3000，那如果 3000 端口已经被占用了，我们提前直到 3000 端口占用，并找到一个没有被占用的端口让 webpackDevServer 启动呢？

### 第一个问题： 如何写一个优雅的函数迭代器，将配置合并

我们这里的 compose 代码如下：

```javascript
// 同步函数链
export const syncChainFns = (...fns) => {
  const [firstFn, ...otherFns] = fns;
  return (...args) => {
    if (!otherFns) return firstFn(...args);
    return otherFns.reduce((ret, task) => task(ret), firstFn(...args));
  };
};
```

我们写个简单的案例调用一下：

```javascript
function add(a, b) {
  return a + b;
}
function addVersion(sum) {
  return `version: ${sum}.0.0`;
}

syncChainFns(add, addVersion)(1, 2); // 'version: 3'
```

也就是我们函数链条就像一个工厂加工货物一样，1 号人员加工后，给后面一个人继续加工，最后得到结果，可以类比 redux 的 compose 函数实现。这样的写法就是函数编程的初步思想，组合思想。

我们后续会用这个函数来处理 webpack 配置，因为 webpack 配置可以分为 4 个函数处理

- 首先有初始化的 webpack dev 配置
- 然后有用户自定义的配置，比如自己建立一个 mx.config.js 文件，作为配置文件
- 是否是 ts 环境，name 就要把 ForkTsCheckerWebpackPlugin 加入到 webpack 的 plugin 里，加快 ts 的编译速度
- 最后交给 webpack 函数编译，这样就生成了最终交给 webpackDevServer 启动的值了

### 第二个问题：如何启动 WebpackDevServer

我刚才说到生成的最终要启动的文件，webpackDevServer 这样启动,注意，这是 webpack5 的启动方法，跟之前 4 的参数位置不一样

```javascript
const serverConfig = {
  publicPath: '/',
  compress: true,
  noInfo: true,
  hot: true,
};
const devServer = new WebpackDevServer(compiler, serverConfig);
```

### 第三个问题：启动 dev 的端口号被占用了咋办

我们使用一个库，用来检测端口是否被占用的库叫 detect，这个库如果发现端口是被占用了，会返回一个没有被占用的端口号

```javascript
const resPort = await detect(port, host);
```

好了，解决了这三个问题，我们简单看下 development 文件，不懂的函数不要紧，大致思路上面已经介绍了，我们后面将里面比较重要的函数。

```javascript
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import getWebpackConfig from '../config/webpackConfig';
import { isAddForkTsPlugin, syncChainFns, getProjectConfig } from '../utils';
import { DEV } from '../constants';
import { IDevelopmentConfig } from '../interface';
import detect from 'detect-port-alt';

const isInteractive = process.stdout.isTTY;

async function choosePort(port, host) {
  const resPort = await detect(port, host);
  if (resPort === Number(port)) {
    return resPort;
  }
  const message = `Something is already running on port ${port}.`;

  if (isInteractive) {
    console.log(message);
    return resPort;
  }
  console.log(message);
  return null;
}

export default ({ host, port }: IDevelopmentConfig) => {
  const compiler = syncChainFns(
    getWebpackConfig,
    getProjectConfig,
    isAddForkTsPlugin,
    webpack
  )(DEV);

  const serverConfig = {
    publicPath: '/',
    compress: true,
    noInfo: true,
    hot: true,
  };
  const runDevServer = async (port) => {
    const devServer = new WebpackDevServer(compiler, serverConfig);
    const resPort = await choosePort(port, host);
    if (resPort !== null) {
      devServer.listen(resPort, host, (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.warn(`http://${host}:${resPort}\n`);
      });
    }
  };
  runDevServer(port);
};
```

### 打包业务代码脚本解析

首先打包业务代码和打包组件库，你知道有什么区别吗？

业务组件库，目前来说，还是用 webpack 是最合适的选择之一，因为我们业务上线的代码需要的是稳定性，webpack 生态和生态的稳定性是很多打包工具所不具备的，不需要开发环境的效率问题（webpack5 比 4 快很多了），比如有人选择开发环境用 vite。

业务代码一般使用 umd 格式打包就行了。

而组件库代码，比如 ant design，element ui，这些库不仅仅需要 umd 格式，最需要的是 esm module，导出的是 import 语法，这个 webpack 是做不了的。为啥做不了，是因为 webpack 有自己的一套 require 规则，你用的 import 最终还是要被 webpack 这套加载模块语法转译了。

所以 esm module 你可以用 roll up，但是但是，我仔细调研了一番，多入口打包 rollup 是不支持的，而且我们需要在 css 打包上苦费心思一番，后面讲，打包 css 是非常非常讲究的，rollup 不好满足，所以我们后续直接使用 gulp 来分别打包 css 和 js 了。

就是因为定制化要求很高，不得不用 glup 去定制化打包流程。

我们先看看更简单的打包业务代码脚本的入口

```javascript
import build from './buildSite';
import { BUILD_SITE } from '../constants';

export const buildSite = (commander) => {
  // 打包业务组件
  // 这个命令实际上执行的是buildSite这个文件
  commander
    .command(BUILD_SITE)
    .description('打包业务代码')
    .option('-d, --out-dir <path>', '输出目录', 'dist')
    .option('-a, --analyzer', '是否启用分析器')
    .action(build);
};
```

接着，我们看看 build 文件，以下主要解释的是 getWebpackConfig 文件，和 getProjectConfig 文件的代码

```javascript
import webpack from 'webpack';
// webpack代码打包分析插件
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
// 获取webpack基础配置
import getWebpackConfig from '../config/webpackConfig';
//  获取webpack定制化的配置
import { getProjectPath, getProjectConfig, syncChainFns } from '../utils';
// 接口配置
import { IDeployConfig } from '../interface';
// 这个常量是字符串“buildSite”
import { BUILD_SITE } from '../constants';
export default ({ outDir, analyzer }: IDeployConfig) => {
  // 这个syncChainFns函数上面已经介绍过了，就是一个函数组合的组合器
  const config = syncChainFns(
    // 这个函数后面会讲到，就是获取不同环境下webpack的配置文件
    getWebpackConfig,
    // 这个函数后面会讲到，用来获取用户自定义的webpck配置文件
    getProjectConfig,
    // 判断是否需要加入 加快ts的解析的插件
    isAddForkTsPlugin
  )(BUILD_SITE);
  config.output.path = getProjectPath(outDir);

  // 是否启用代码包体积分析插件
  if (analyzer) {
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        generateStatsFile: true,
      })
    );
  }

  webpack(config).run((err) => {
    if (err) {
      logger.error('webpackError: ', JSON.stringify(err));
    }
  });
};
```

以下是 getWebpackConfig 代码，比较简单，工厂模式的运用,很简单，就是根据命令行不同的参数调用不同的函数，比如 mx dev，就调用的 getDevConfig 函数，获取 webpack 在 dev 环境的配置

```typescirpt
const getWebpackConfig = (type?: IWebpackConfigType): Configuration => {
  switch (type) {
    case DEV:
      return getDevConfig();

    case BUILD_SITE:
      return getBuildConfig();

    case BUILD_LIB:
      return getBuildConfig();

    default:
      return getDevConfig();
  }
};
```

getProjectConfig 主要是提供给用户自定配置的函数，我们主要分析一下如何拿到用户的自定义配置.

```javascript
export const getCustomConfig = (
  configFileName = 'mx.config.js'
): Partial<CustomConfig> => {
  const configPath = path.join(process.cwd(), configFileName);
  if (fs.existsSync(configPath)) {
    // eslint-disable-next-line import/no-dynamic-require
    return require(configPath);
  }
  return {};
};
```

可以看到，就是读取项目下的 mx.config.js，我们看看 mx.config.js 的写法，很简单就是假如自己想要插件和 plugin，以及入口配置。

```javascript
const path = require('path');

module.exports = {
  entries: {
    index: {
      entry: ['./web/index.js'],
      template: './web/index.html',
      favicon: './favicon.ico',
    },
  },
  resolve: {
    alias: {
      '@': path.join(process.cwd(), '/'),
    },
  },
  setBabelOptions: (options) => {
    options.plugins.push(['import', { libraryName: 'antd', style: 'css' }]);
  },
  setRules: (rules) => {
    rules.push({
      test: /\.md$/,
      use: ['raw-loader'],
    });
  },
};
```

### 打包组件库的核心配置文件

打包组件库的代码要比之前的复杂很多！
老规矩，看下入口文件

```javascript
import build from './build';
import { BUILD_LIB } from '../constants';

export const buildLib = (commander) => {
  // 当你输入mx buildLib的时候，就是执行这个命令
  // 这个命令实际上执行的是build文件
  // 我们会打包es和commonjs规范的两个包
  commander
    .command(BUILD_LIB)
    .description('打包编译仓库')
    .option('-a, --analyzerUmd', '是否启用webpack打包分析器')
    .option('-e, --entry <path>', 'umd打包路径入口文件', './src/index')
    .option('--output-name <name>', '打包Umd格式后对外暴露的名称')
    .option('--entry-dir <path>', 'cjs和esm打包路径入口目录', './src')
    .option('--out-dir-umd <path>', '输出umd格式的目录', './dist')
    .option('--out-dir-esm <path>', '输出esm格式的目录', './esm')
    .option('--out-dir-cjs <path>', '输出cjs格式的目录', './lib')
    .option('--copy-less', '拷贝不参与编译的文件')
    .option('--less-2-css', '是否编译组件样式')
    .option('-m, --mode <esm|umd|cjs>', '打包模式 目前支持umd和esm两种')
    .action(build);
};
```

我们看下 build 文件，也就是你输入 mx buildLib 后，执行的文件，我们先看看 umd 的打包，这个简单，稍微复杂一些的是 glup 配置。

```javascript
import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
// gulp任务，后面会讲
import { copyLess, less2css, buildCjs, buildEsm } from '../config/gulpConfig';
import getWebpackConfig from '../config/webpackConfig';
// 工具函数，后面用到就讲
import { getProjectPath, logger, run, compose } from '../utils';
// 代码包体积分析插件
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
// 环境常量
import {
  BUILD_LIB,
  CJS,
  ESM,
  UMD,
  COPY_LESS,
  LESS_2_LESS,
  CLEAN_DIR,
} from '../constants';

// package.json的name属性作为打包出来的包名，当然也可以自定义
const { name } = require(getProjectPath('package.json'));
// 校验name是否有斜杠，这会影响打包出来的结果
const checkName = (outputName, name) => {
  if (!outputName && name?.includes('/')) {
    logger.warn(
      'package.json的包名包含斜杠，webpack打包时会以斜杠来建立文件夹，所以请注意打包后文件名是否符合你的要求'
    );
  }
};
/**
 * build for umd
 * @param analyzer 是否启用分析包插件
 * @param outDirUmd 输出目录
 * @param entry 打包的入口文件
 * @param outputName 打包出来的名字
 */
const buildUmd = async ({ analyzerUmd, outDirUmd, entry, outputName }) => {
  const customizePlugins = [];
  const realName = outputName || name;
  checkName(outputName, name);
  const umdTask = (type) => {
    return new Promise((resolve, reject) => {
      const config = webpackMerge(getWebpackConfig(type), {
        entry: {
          [realName]: getProjectPath(entry),
        },
        // 这里主要是设置libraryTarget是设置打包格式是umd
        // library是配置打包出来的包名的
        output: {
          path: getProjectPath(outDirUmd),
          library: realName,
          libraryTarget: 'umd',
          libraryExport: 'default',
        },
        plugins: customizePlugins,
      });

      if (analyzerUmd) {
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            generateStatsFile: true,
          })
        );
      }
      return webpack(config).run((err, stats) => {
        if (stats.compilation.errors?.length) {
          console.log('webpackError: ', stats.compilation.errors);
        }
        if (err) {
          logger.error('webpackError: ', JSON.stringify(err));
          reject(err);
        } else {
          resolve(stats);
        }
      });
    });
  };
  logger.info('building umd');
  await umdTask(BUILD_LIB);
  logger.success('umd computed');
};
```

接下来讲最复杂的 gulp 配置，先看入口文件：

- 之前我们先解决写一个类似 koa 的框架的 compose 函数，这个函数是一个函数执行器，把各个异步函数按顺序调用，比如说有异步函数 1，异步函数 2，异步函数 3，我需要按照顺序调用 1，2，3，并且这 1，2，3 是解耦的，类似中间件的形式加入，并共享一些数据

我们先看看函数：

```javascript
export function compose(middleware, initOptions) {
  const otherOptions = initOptions || {};
  function dispatch(index) {
    if (index == middleware.length) return;
    const currMiddleware = middleware[index];
    return currMiddleware(() => dispatch(++index), otherOptions);
  }
  dispatch(0);
}
```

这个函数的意思是：

- 按数组顺序拿到 middleware 函数
- 然后函数调用时，第一个参数传入下一个调用的函数，主动调用才会执行 middleware 下一个函数，并且把一个去去全局共享数据 otherOptions 传入下去。

下面是利用 compose 函数执行各个函数的文件，也就是 mx buildLib 真正执行的文件，文件内容太多，我就拿一个 build esm 来解释

```javascript
import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
// gulp任务，后面会讲
import { copyLess, less2css, buildCjs, buildEsm } from '../config/gulpConfig';
import getWebpackConfig from '../config/webpackConfig';
// 工具函数，后面用到就讲
import { getProjectPath, logger, run, compose } from '../utils';
// 代码包体积分析插件
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
// 环境常量
import {
  BUILD_LIB,
  CJS,
  ESM,
  UMD,
  COPY_LESS,
  LESS_2_LESS,
  CLEAN_DIR,
} from '../constants';

const buildLib = async ({
  analyzerUmd,
  mode,
  entry,
  outDirEsm,
  outDirCjs,
  outDirUmd,
  copyLess,
  entryDir,
  less2Css,
  cleanDir,
  outputName,
}) => {
  // 注册中间件，然后用compose函数去组合
  const buildProcess = [bulidLibFns[CLEAN_DIR]];
  // 是否打包umd格式，是的话加入我们之前讲的umd打包函数
  if (mode === UMD) {
    buildProcess.push(bulidLibFns[UMD]);
  }
  // 是否打包esm格式，是的话加入相应打包函数，
  if (mode === ESM) {
    buildProcess.push(bulidLibFns[ESM]);
  }
  // 省略一些代码，就是来加入各种处理函数，比如有编译less到css的中间件是否加入
  compose(buildProcess, {
    analyzerUmd,
    mode,
    entry,
    outDirEsm,
    outDirCjs,
    outDirUmd,
    copyLess,
    entryDir,
    less2Css,
    cleanDir,
    outputName,
  });
};

export default buildLib;
```

我们看看 gulp 配置文件 buildesm,主要执行的是 compileScripts 函数，这个函数我们接着看

```javascript
const buildEsm = ({ mode, outDirEsm, entryDir }) => {
  const newEntryDir = getNewEntryDir(entryDir);
  /**
   * 编译esm
   */
  gulp.task('compileESM', () => {
    return compileScripts(mode, outDirEsm, newEntryDir);
  });

  return new Promise((res) => {
    return gulp.series('compileESM', () => {
      res(true);
    })();
  });
};
```

```javascript
/**
 * 编译脚本文件
 * @param {string} babelEnv babel环境变量
 * @param {string} destDir 目标目录
 * @param {string} newEntryDir 入口目录
 */
function compileScripts(mode, destDir, newEntryDir) {
  const { scripts } = paths;
  return gulp
    .src(scripts(newEntryDir)) // 找到入口文件
    .pipe(babel(mode === ESM ? babelEsConfig : babelCjsConfig)) // 使用gulp-babel处理
    .pipe(
      // 使用gulp处理css
      through2.obj(function z(file, encoding, next) {
        this.push(file.clone());
        // 找到目标
        if (file.path.match(/(\/|\\)style(\/|\\)index\.js/)) {
          const content = file.contents.toString(encoding);
          file.contents = Buffer.from(cssInjection(content)); // 处理文件内容
          file.path = file.path.replace(/index\.js/, 'css.js'); // 文件重命名
          this.push(file); // 新增该文件
          next();
        } else {
          next();
        }
      })
    )
    .pipe(gulp.dest(destDir));
}
```

## webpack 配置详解

### output

```
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].[chunkhash:8].js',
    assetModuleFilename: 'asset/[name].[contenthash:8].[ext]',
  }
```

- filename 指定了打包后生成的主代码文件的名称。这里的[name]表示使用入口文件（entry）的名称作为文件名，输出到 js 文件夹下。

- chunkFilename 则指定了 webpack 打包生成的非入口文件的文件名，例如按需加载（code splitting）生成的代码块。这里使用了占位符[chunkhash:8]来确保文件名的唯一性和缓存效果。

- assetModuleFilename 用于指定 webpack 打包时处理资源文件（图片、字体等）的输出路径和名称。占位符[contenthash:8]用于确保资源文件的缓存效果。[ext]用于保留文件扩展名。

以上配置将会把所有的 JS 文件打包到 js 目录下，其他类型的资源文件打包到 asset 目录下。

### optimization

```javascript
optimization: {
    runtimeChunk: true,
    splitChunks: {
      minChunks: 2,
      chunks: 'all',
      cacheGroups: {
        reactBase: {
          name: 'reactBase',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](react|react-dom|@hot-loader|react-router|react-redux|react-router-dom)[\\/]/,
        },
        'async-commons': {
          // 异步加载公共包、组件等
          name: 'async-commons',
          chunks: 'async',
          test: /[\\/]node_modules[\\/]/,
          minChunks: 2,
          priority: 1,
        },
      },
    },
  },
```

- runtimeChunk: true 配置项用于将 Webpack 运行时代码打包成单独的文件，避免每个模块都包含重复的运行时代码。这可以提高缓存利用率并加快构建速度。

什么是运行时代码？Webpack 运行时代码是指 Webpack 在打包时生成的一些代码片段，用于处理模块加载和解析、依赖关系管理、代码分割、以及其他一些 Webpack 内部的功能。例如：

```javascript
// Webpack运行时代码片段1：模块加载
(function(modules) {
  // 模块缓存对象
  var installedModules = {};

  // 加载模块函数
  function __webpack_require__(moduleId) {
    // 检查模块是否被缓存
    if(installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }

    // 创建一个新的模块对象，并将其缓存
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };

    // 加载模块
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

    // 标记模块已经加载完毕
    module.l = true;

    // 返回模块的导出对象
    return module.exports;
  }
  ...
})
```

- splitChunks 配置项用于将代码拆分成更小的块，以便更好地利用浏览器的缓存机制。具体来说，这里配置了以下内容：

  - minChunks: 2 表示最小的代码复用次数，即当一个模块至少被两个 Chunk 引用时，才会被拆分出来成为一个单独的 Chunk。

  - chunks: 'all' 表示优化所有类型的 Chunk，包括同步和异步的 Chunk。

  - cacheGroups 表示缓存组，可以将满足特定条件的模块打包到一个组里，以便更好地进行拆分和缓存。这里定义了两个缓存组：

  - reactBase 缓存组将 React 相关的模块打包到一个名为 reactBase 的 Chunk 中，并且仅包含在 node_modules 目录下的 React 相关模块。

  - async-commons 缓存组将其他的公共模块打包到一个名为 async-commons 的异步 Chunk 中，它仅包含在 node_modules 目录下的模块，并且至少被两个异步 Chunk 所引用。该缓存组的优先级为 1，以确保它被拆分到一个单独的 Chunk 中。

## loader

上面提到大家可以通过 mx.config.js 来拓展 loader，mx-design-cli 本身自带的 loader 有

- babel-loader
  - test 规则： /\.(js|jsx|ts|tsx)$/
  - 通过 thread-loader 来加快编译速度
- css 相关 loader
  - css loader
  - postcss-loader
  - less-loader
- 图片
  - webpack5 内置了 loader
  - test 规则： [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/]
  - 小于 4 \* 1024 会编译为 date URL 格式
- 字体
  - webpack5 内置了 loader
  - test 规则: /\.(eot|ttf|woff|woff2?)$/
- svg
  - @svgr/webpack loader

## resolve

```javascript
resolve: {
    extensions: [' ', '.ts', '.tsx', '.js', '.jsx', '.less', '.svg'],
  },
```

r 这个选项告诉 Webpack 解析模块时需要查找的文件扩展名。在这个例子中，Webpack 会依次查找以下文件扩展名：.ts、.tsx、.js、.jsx、.less、.svg。当我们在 import 语句中引用这些文件时，Webpack 就会根据这个选项来解析模块路径。

## plugins

```javascript
 plugins: [
    new WebpackBar({}),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
```

，我们使用了 WebpackBar 插件和 DefinePlugin 插件。WebpackBar 插件可以在命令行中显示进度条，让我们更加直观地了解 Webpack 的构建进度。DefinePlugin 插件可以在编译时定义全局变量，这里我们将 process.env 定义为当前环境变量，使得我们的代码能够根据不同的环境变量执行不同的逻辑。

以上是基础的 webpack 配置，生产和开发环境会有不同的处理，例如

### 开发环境

开发环境比如需要热更新的 plugin,sourceMap 内容会更详细等等...

### 生产环境（业务代码打包，非组件库）

需要做好 split chunk 更好的利用缓存去存储 node_modules 下的库（因为变化较少），还比如，可以用 TerserPlugin 开启多线程打包，CssMinimizerPlugin 开启 css 压缩等等...
