## Preface

This article aims to introduce a packaging tool whose main features include:

- Export files of type declaration about typescript
- Export CommonJS modules, ES modules files
- Support the introduction of style file CSS instead of LESS, thereby reducing the access cost of the business side
- Support load-on-demand to improve performance.


## Export type declaration

Mainly use tsc (typescript built-in command) to export ts file definition separately

First, we need to define the entry in `package.json`, that is, after someone installs your npm package, if you want to have a type hint, you have defined the entry definition in `package.json`, for example:


```javascript
// package.json
{
   "typings": "types/index.d.ts", // define type entry file
   "scripts": {
     "build:types": "rimraf types && tsc --outDir types -d --emitDeclarationOnly",
   }
}
```

- --outDir types: Specify the output directory of type declaration files.
- -d or --declaration: generate .d.ts declaration files. This option tells the TypeScript compiler to generate a `.d.ts` file corresponding to each compiled JavaScript file.
- --emitDeclarationOnly: Tells the TypeScript compiler to only generate .d.ts files, not JavaScript files. This option is typically used with the -d or --declaration options.

## Export Commonjs modules

Why gulp instead of webpack or rollup? Because what we have to do is code compilation rather than code packaging, and we need to consider style processing and its load-on-demand.

### Babel configuration

First install babel and its dependencies


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
About @babel/plugin-transform-runtime and @babel/runtime-corejs3:

- If the helpers option is set to true, the helper functions (classCallCheck, extends, etc.) that are repeatedly generated during the code compilation process can be extracted to reduce the size of the generated code;

- If corejs is set to 3, on-demand polyfills that do not pollute the global environment can be introduced, which are often used in class library writing (I recommend: do not introduce polyfills, but instead inform users what polyfills need to be introduced, to avoid repeated imports or conflicts, later will be mentioned in detail).


### Configure the target environment

In order to avoid translating the syntax natively supported by the browser, create a new .browserslistrc file, and write the scope of supported browsers according to the adaptation requirements, and apply it to @babel/preset-env.

.browserslistrc
```javascript
>0.2%
not dead
not op_mini all
```

Unfortunately, @babel/runtime-corejs3 cannot reduce the introduction of polyfills again, while we set browser support configuration.

This means that @babel/runtime-corejs3 will inject all possible polyfills even when targeting modern engines: unnecessarily increasing the final bundle size.

For component libraries (the amount of code may be large), I personally recommend that the choice of polyfill be returned to the user, and polyfill should be performed in the host environment. If users have compatibility requirements, they will naturally use @babel/preset-env + core-js + .browserslistrc for global polyfill. This combination introduces all polyfills that the minimum target browser does not support API.

By the way, in business development, if you set the value of the useBuiltIns option of @babel/preset-env to usage and exclude node_modules from babel-loader, Babel will not be able to detect the polyfill required in nodes_modules.


How do I do it, in [mx-design](https://github.com/lio-mengxiang/mx-design), I just added the .browserslistrc file in the root directory of the mx-deisgn project, configured as:

```
chrome 80
edge 79
firefox 78
safari 14
```

So the configuration was changed to let the user decide which polyfills the browser supported :

.babelrc.js
```javascript
module.exports = {
   presets: ['@babel/env', '@babel/typescript', '@babel/react'],
   plugins: ['@babel/plugin-transform-runtime', '@babel/proposal-class-properties'],
};
```
The helper option of @babel/transform-runtime defaults to true.



### gulp configuration
Then install gulp related dependencies
```
yarn add gulp gulp-babel --dev
```
Create a new gulpfile.js and write the following content:

gulpfile.js

```javascript
const gulp = require('gulp');
const babel = require('gulp-babel');

const paths = {
   dest: {
     lib: 'lib', // directory name where commonjs files are stored - this block focuses on
     esm: 'esm', // directory name where ES module files are stored - don't care for now
     dist: 'dist', // the name of the directory where the umd file is stored - don't care for now
   },
   styles: 'src/**/*.less', // style file path - don't care for now
   scripts: ['src/**/*.{ts,tsx}', '!src/**/demo/*.{ts,tsx}'], // script file path
};

function compileCJS() {
   const { dest, scripts } = paths;
   return gulp
     .src (scripts)
     .pipe(babel()) // handle with gulp-babel
     .pipe(gulp.dest(dest.lib));
}

// Parallel tasks can be processed in parallel after adding style processing
const build = gulp. parallel(compileCJS);

exports.build = build;

exports.default = build;
```
Modify package.json

package.json
```javascript
{
- "main": "index.js",
+ "main": "lib/index.js",
   "scripts": {
     ...
+ "clean": "rimraf lib esm dist",
+ "build": "npm run clean && npm run build:types && gulp",
     ...
   },
}
```
Execute yarn build


Observing the compiled source code, we can find that many helper methods have been extracted to @babel/runtime, and the import and export forms of modules are also commonjs specifications.

## export ES module


Generating the ES module can perform better tree shaking. Based on the babel configuration in the previous step, update the following content:

- Configure the modules option of @babel/preset-env to false to turn off module conversion;
- Configure the useESModules option of @babel/plugin-transform-runtime to true, and use the ES module form to import helper functions.

.babelrc.js
```javascript
module.exports = {
   presets: [
     [
       '@babel/env',
       {
         modules: false, // turn off module conversion
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
         useESModules: true, // use esm form helper
       },
     ],
   ],
};
```

The goal is achieved, we then use environment variables to distinguish between esm and cjs (just set the corresponding environment variables when executing tasks), and the final babel configuration is as follows:

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

in mx-design, I used two configuration files（esm and cjs） separately

Next, modify the gulp related configuration, extract the compileScripts task, and add the compileESM task.

gulpfile.js
```javascript
//...

/**
  * Compile the script file
  * @param {string} babelEnv babel environment variable
  * @param {string} destDir destination directory
  */
function compileScripts(babelEnv, destDir) {
   const { scripts } = paths;
   // set environment variable
   process.env.BABEL_ENV = babelEnv;
   return gulp
     .src (scripts)
     .pipe(babel()) // handle with gulp-babel
     .pipe(gulp.dest(destDir));
}

/**
  * compile cjs
  */
function compileCJS() {
   const { dest } = paths;
   return compileScripts('cjs', dest. lib);
}

/**
  * compile esm
  */
function compileESM() {
   const { dest } = paths;
   return compileScripts('esm', dest.esm);
}

// Serially execute the compilation script task (cjs, esm) to avoid the influence of environment variables
const buildScripts = gulp. series(compileCJS, compileESM);

// Execute tasks in parallel as a whole
const build = gulp. parallel(buildScripts);

//...
```
Execute yarn build, you can find that three folders types/lib/esm have been generated, observe the esm directory, the structure is consistent with lib/types, js files are imported and exported in the form of ES modules


## Process style files

### Copy the less file

We will include the less file in the npm package. Users can import the less file as needed through the form of happy-ui/lib/alert/style/index.js. Here, the less file can be directly copied to the target folder.

Create a new copyLess task in gulpfile.js.

gulpfile.js
```javascript
//...

/**
  * Copy the less file
  */
function copyLess() {
   return gulp
     .src(paths. styles)
     .pipe(gulp.dest(paths.dest.lib))
     .pipe(gulp.dest(paths.dest.esm));
}

const build = gulp. parallel(buildScripts, copyLess);

//...

```
Observe the lib directory, you can find that the less file has been copied to the style directory of the component


Someone may have discovered the problem: if the user does not use the less preprocessor, but uses the sass solution or even the native css solution, then the existing solution will not work. After analysis, there are the following three pre-selection options:

- Inform users to add less-loader;
- Package a complete css file and import it in full;
- Provide a separate style/css.js file, which introduces component css file dependencies instead of less dependencies, and smooths out differences at the bottom of the component library.

Option 1 will result in increased usage costs.

Solution 2 cannot import the style file on demand (we will also provide the style file when umd is packaged later).

The above two options are actually the worst policy.

Solution 3 is more in line with the current scenario, and the ant design4 version also uses this solution.

In the process of building the component library, there is a question that has bothered me for a long time: why do you need alert/style/index.js to import less files or alert/style/css.js to import css files?

The answer is to manage style dependencies.

Suppose there is the following scenario: `<Button />` is introduced, `<Button />` depends on `<Icon />`, and the user needs to manually introduce the style of the called component (`<Button />`) and its dependencies The component style (`<Icon />`), it is extremely troublesome to encounter complex components, so the component library developer can provide such a js file, and the user can manually import the js file to import the corresponding component and its dependent components style.

continue our journey.


### Generate css file

```
yarn add gulp-less gulp-autoprefixer gulp-cssnano --dev
```

Generate the corresponding css file from the less file, and add the less2css task in gulpfile.js

```javascript
//...

/**
  * Generate css file
  */
function less2css() {
   return gulp
     .src(paths. styles)
     .pipe(less()) // process less files
     .pipe(autoprefixer()) // Add prefix according to browserslistrc
     .pipe(cssnano({ zindex: false, reduceIdents: false })) // compression
     .pipe(gulp.dest(paths.dest.lib))
     .pipe(gulp.dest(paths.dest.esm));
}

const build = gulp. parallel(buildScripts, copyLess, less2css);

//...

```


Run yarn build, the css file already exists in the component style directory.

Next we need an alert/style/css.js to help users import css files.

### Generate css.js

Install related dependencies.
```
yarn add through2 --dev
```
gulpfile.js
```javascript
//...

/**
  * Compile the script file
  * @param {*} babelEnv babel environment variable
  * @param {*} destDir target directory
  */
function compileScripts(babelEnv, destDir) {
   const { scripts } = paths;
   process.env.BABEL_ENV = babelEnv;
   return gulp
     .src (scripts)
     .pipe(babel()) // handle with gulp-babel
     .pipe(
       through2.obj(function z(file, encoding, next) {
         this.push(file.clone());
         // find target
         if (file.path.match(/(\/|\\)style(\/|\\)index\.js/)) {
           const content = file.contents.toString(encoding);
           file.contents = Buffer.from(cssInjection(content)); // file content processing
           file.path = file.path.replace(/index\.js/, 'css.js'); // file rename
           this.push(file); // add this file
           next();
         } else {
           next();
         }
       }),
     )
     .pipe(gulp.dest(destDir));
}

//...

```

Implementation of cssInjection:

```javascript
/**
  * current component style import './index.less' => import './index.css'
  * Other dependent component styles import '../test-comp/style' => import '../test-comp/style/css.js'
  * Dependent on other component styles import '../test-comp/style/index.js' => import '../test-comp/style/css.js'
  * @param {string} content
  */
function cssInjection(content) {
   return content
     .replace(/\/style\/?'/g, "/style/css'")
     .replace(/\/style\/?"/g, '/style/css"')
     .replace(/\.less/g, '.css');
}

```
After packaging, you can see that the css.js file is generated in the component style directory, and the css file converted from the previous step of less is imported.


### Load on demand
Add the sideEffects attribute in package.json to achieve the tree shaking effect with the ES module (mark the style-dependent files as side effects to avoid being deleted by mistake).
```javascript
//...
"sideEffects": [
   "dist/*",
   "esm/**/style/*",
   "lib/**/style/*",
   "*.less"
],
//...

```

Use the following method to import, you can load the js part on demand (the less style will be automatically introduced, so your development environment such as webpack needs to configure less-loader):
```javascript
import { Alert } from '@mx-design/web';
```

Of course, if you can also import js files without css

```javascript
import { NcAlert } from '@mx-design/web';
```
### Global css configuration
@mx-design/web sets global and local css variables, allowing you to change the global css configuration.

```
import React from 'react';
import { MxConfigProvider, darkTheme, lightTheme } from '@mx-design/web';

function App() {
   return (
       <MxConfigProvide globalCssVariables={lightTheme}>
         <RouterProvider router={router} />
       </MxConfigProvider>
     </ConfigProvider>
   );
}

```

Among them, `lightTheme` is a light theme, and `darkTheme` is a dark theme, so you can write a file with the same css variable name as lightTheme and import it into MxConfigProvide to realize your own theme color switching.

### Partial css configuration

To configure through themeStyle, what css variables are supported by each component and the whole world. First, you can open the console of the chrome browser on the official website to view, or you can refer to the mx-design official website (to be added)

```javascript
import { Button } from '@mx-design/web';

function App() {
   return (
       <Button type="brand" themeStyle={{ '--btn-brand-color-bg': 'red' }}>Brand</Button>
   )
}`;

```

Of course, you can also import css separately in the package file
```javascript
import { NcAlert } from '@mx-design/web';
import '@mx-design/web/esm/Alert/style/index.css';
```
