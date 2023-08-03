<h1 align="center">@mx-design/cli</h1>

[English](./README.md) | [中文](./README.zh.md)

[Source code analysis](#source_code_analysis)

## Introduction

- ✨ easy to develop: one line command to start react + less project
- ✨ easy to pack business code: one line of command to package react business projects, using webpack5, no need to pay attention to webpack configuration and optimization, we have done it for you
- ✨ easy to package react component library: one line of command to package react component library, the packaging method is the same as ant design (package component library should be loaded on demand, which is different from the configuration of business code packaging)

## Project Description

- Use @mx-design/cli to quickly start the development environment and package the project (the case is under the example folder)

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
mx buildLib [options] package and compile react component library

mx dev [options] run the development environment

mx buildSite [options] package and compile web projects

mx --help view help information

mx --version view version information
```

## Detailed commands are as follows

Add in devDependencies of package.json

```javascript
   "devDependencies": {
     + "@mx-design/cli": "xxx"
   }
```

Development environment configuration

```javascript
   "scripts": {
     "start": "mx dev",
   },
```

## The development environment is configured with vite

vite's development environment is very easy to configure, so there is no native support for it in our library. On the official website of my react ui component library, developed with both webpack5 (@mx-design/cli) and vite support, here are the issues I encountered while converting, and I've compiled them into an article：[webpack react项目 完美迁移vite --- 坑点记录！](https://juejin.cn/post/7173880104362524702?searchId=20230729120108D161C32971AE1047253D)


## Pay attention to adding the mx.config.js configuration file in the project root directory
In order to realize the custom configuration of the dev environment, we will also read your mx.config.js file in the root directory, as follows:

```javascript
//mx.config.js
const path = require('path');

module.exports = {
   // Custom entry file, required
   entries: {
     index: {
       entry: ['./src/index.js'],
       template: './public/index.html',
       favicon: './favicon.ico',
     },
   }
   // Alias configuration, can be omitted
   resolve: {
     alias: {
       '@': path. join(process. cwd(), '/'),
     },
   },
   // Add a custom Babel plugin
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
   // add custom loader
   setRules: (rules) => {
     rules. push({
       test: /\.md$/,
       use: ['raw-loader'],
     });
   },
  // Get the config of all configurations of webpack
  setConfig: (config) => {
    if (config.mode === 'production') config.output.publicPath = '/mx-design/';
  },
};

```

Well, this is how to configure the development environment. Isn’t it very simple? Currently, we use webpack5 to start the development environment.No need to configure webpack yourself.

Build business code is simpler

```javascript
  "scripts": {
     "start": "mx buildSite",
   }
```

We will also read the mx.config.js file configuration in your root directory, and of course some command line options for traversal, such as

```javascript
  "scripts": {
     "start": "mx buildSite --analyzer", // enable package analyzer
   }

    "scripts": {
     "start": "mx buildSite --out-dir lib", // The packaged address directory defaults to dist, here it is changed to lib
   }
```

The command line of the packaged component library is as follows (the following are the recommended configurations, just enter npm/yarn run build on the command line):

```javascript
  "scripts": {
    "build:types": "rimraf types && tsc --outDir types -d --emitDeclarationOnly",

    "build:es": "rimraf esm && mx buildLib --mode esm --entry-dir ./components --less-2-css --copy-less",

    "build:cjs": "rimraf lib && mx buildLib --mode cjs --entry-dir ./components --less-2-css --copy-less",

    "build:umd": "rimraf dist && mx buildLib --mode umd --entry ./components/index",

    "build": "yarn build:types && yarn build:cjs && yarn build:es && yarn build:umd",
   }
```

The above command is explained as follows:

- `--mode cjs`
  - pack commonjs
- `--mode esm`
  - pack es module
- `--mode umd`
  - pack umd
- `--less-2-css`
  - convert less to css
- `--entry-dir`
  - mode is valid for esm and cjs
  - The entry directory when passing in packaging, the default is src
- `--entry`
  - umd mode takes effect
  - umd entry file default is src/index
- `--copy-less`
  - copy the less file to
- `-out-dir-umd`
  - It takes effect when the mode is umd mode
  - output directory in umd format, the default is `./dist`
- `--out-dir-esm`
  - Output directory in esm format, the default is `./esm`
- `--out-dir-cjs`
  - Output directory in cjs format, default `./lib'`
- `--analyzerUmd`
  - Whether to enable analyzers for webpack packaging

All the detailed parameters of the above command can be viewed as follows:

```javascript
  "scripts": {
     "buildLibHelp": "mx help buildLib", // View command line parameters of all packaged component libraries

     "buildSiteHelp": "mx help buildSite", // View all command line parameters of

     "devHelp": "mx help dev", // View all dev environment configuration parameters
   }
```


## case

There is a case under the example folder, after installing the dependencies of the package, you can start it with `npm run dev`

## Source_code_analysis

### use commander to read command line parameters

How about creating your own mx command?

In the bin field of package.json, add

```json
   "bin": {
     "mx": "./bin/index.js"
   },
```

In this way, when someone downloads your npm package, and use the mx command, it will execute index.js in the bin directory of your npm package.

Let's see what index.js looks like

```bash
#!/usr/bin/env node

require('../lib/index');
```

It is very simple to execute the index.ts file under the lib

The lib directory is our final generated component library (for example, we need to compile ts into js, babel compile syntax, etc.), and the index.js inside is the entry file. Let's look at the index.ts.

Before explaining the index.ts file, I need to introduce the simple usage of the commander library

```javascript
// index.js
const program = require('commander');
program.version('1.0.0').parse(process.argv);
```

Executing the above code `node index.js -V` or `node index.js --version` will get the version number 1.0.0
program.version('1.0.0') means to register the command, and parse means to parse the parameters of the command line, here pass in process.argv, which means to parse the parameters in process.argv, so we enter `node index.js - -version`, in fact, is to pass the parameter version to the commander

We only need to get the version field in package.json, so we will get the version number of the cli tool

index.ts in the src directory

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

## Development environment configuration

Let's first take a look at the function `runDev(commander)` executed when mx dev is executed. What is the running process of this function? The runDev function is as follows

```javascript
// When you execute mx dev, development code will execute
import development from './development';
import { DEV } from '../constants';

export const runDev = (commander) => {
  // Commander registers the command with the parameter 'dev'
  commander
    .command(DEV)
    .description('Run development environment')
    .option('-h, --host <host>', 'site host address', 'localhost')
    // The default port number is 3000
    .option('-p, --port <port>', 'site port number', '3000')
    // The file that the command will eventually run on
    .action(development);
};
```

This development has 3 key issues:

- How to write a compose function to improve your code quality, students who do not know the compose function, please read this article [Ultimate Compose Function Encapsulation Solution](https://juejin.cn/post/6989815456416661534), or you can just look at me The following code will understand

- How to start WebpackDevServer
- When starting, we will start the default port 3000, so if port 3000 is already occupied, we will advance until port 3000 is occupied, and find an unoccupied port for webpackDevServer to start?

### The first question: How to write an elegant function iterator to merge configurations

Our compose code here is as follows:

```javascript
// synchronous function chain
export const syncChainFns = (...fns) => {
  const [firstFn, ...otherFns] = fns;
  return (...args) => {
    if (!otherFns) return firstFn(...args);
    return otherFns.reduce((ret, task) => task(ret), firstFn(...args));
  };
};
```

Let's write a simple case call:

```javascript
function add(a, b) {
  return a + b;
}
function addVersion(sum) {
  return `version: ${sum}.0.0`;
}

syncChainFns(add, addVersion)(1, 2); // 'version: 3'
```

That is to say, our function chain is like a factory processing goods. After No. 1 person processes it, he will continue to process it for the next person, and finally get the result, which can be realized by analogy with redux's compose function. This is the idea of functional programming.

We will use this function to process webpack configuration later, because webpack configuration can be divided into 4 functions for processing

- First there is an initial webpack dev configuration
- Then there are user-defined configurations, such as creating a mx.config.js file yourself as a configuration file
- Whether it is a ts environment, the name must add ForkTsCheckerWebpackPlugin to the webpack plugin to speed up the compilation of ts
- Finally, it is handed over to the webpack function for compilation, so that the value that is finally handed over to webpackDevServer to start is generated

### The second question: How to start WebpackDevServer

note that this is the starting method of webpack5, which is different from the parameter position of the previous 4

```javascript
const serverConfig = {
  publicPath: '/',
  compress: true,
  noInfo: true,
  hot: true,
};
const devServer = new WebpackDevServer(compiler, serverConfig);
```

### The third question: What should I do if the port number used to start dev is occupied?

We use a library called detect to detect whether the port is occupied. If the library finds that the port is occupied, it will return an unoccupied port number

```javascript
const resPort = await detect(port, host);
```

Well, these three problems have been solved. Let’s take a brief look at the development file.

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

### Packaging business code script analysis

packaging the business code and packaging the component library, do you know the difference?

For the business component library, at present, using webpack is one of the most suitable choices, because the code for our business launch needs stability. The ecology and ecological stability of webpack are not available in many packaging tools, and no development is required. The efficiency of the environment (webpack5 is much faster than 4), for example, some people choose to use vite for the development environment.

Business codes are generally packaged in umd format.

The component library code, such as ant design, element ui, these libraries not only need the umd format, but also the esm module, which exports the import syntax, which cannot be done by webpack. The reason why it can't be done is because webpack has its own set of require rules, and the import you use will eventually be translated by webpack's set of loading module syntax.

So you can use roll up for the esm module, but after careful research, I found that multi-entry packaging rollup is not supported, and we need to work hard on css packaging. Later, packaging css is very, very particular Yes, rollup is not enough, so we directly use gulp to package css and js separately.

It is because of the high customization requirements that we have to use glup to customize the packaging process.

Let's take a look at the entry of the simpler packaged business code script

```javascript
import build from './buildSite';
import { BUILD_SITE } from '../constants';

export const buildSite = (commander) => {
  // package business components
  // This command actually executes the buildSite file
  commander
    .command(BUILD_SITE)
    .description('Package business code')
    .option('-d, --out-dir <path>', 'Output directory', 'dist')
    .option('-a, --analyzer', 'whether to enable the analyzer')
    .action(build);
};
```

Next, let's look at the build file. The following mainly explains the code of the getWebpackConfig file and the getProjectConfig file

```javascript
import webpack from 'webpack';
// webpack code packaging analysis plugin
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
// Get webpack basic configuration
import getWebpackConfig from '../config/webpackConfig';
import { getProjectPath, getProjectConfig, syncChainFns } from '../utils';
// interface configuration
import { IDeployConfig } from '../interface';
// This constant is the string "buildSite"
import { BUILD_SITE } from '../constants';
export default ({ outDir, analyzer }: IDeployConfig) => {
  // This syncChainFns function has been introduced above, it is a combiner of function combinations
  const config = syncChainFns(
    // This function will be mentioned later, which is to obtain the configuration files of webpack in different environments
    getWebpackConfig,
    // This function will be mentioned later to obtain the user-defined webpck configuration file
    getProjectConfig,
    // Determine whether you need to add a plug-in to speed up the parsing of ts
    isAddForkTsPlugin
  )(BUILD_SITE);
  config.output.path = getProjectPath(outDir);

  // Whether to enable the code package size analysis plugin
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

The following is the getWebpackConfig function, which is relatively simple. It is to call different functions according to different parameters on the command line, such as mx dev, to call the getDevConfig function to obtain the configuration of webpack in the dev environment

```javascript
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

getProjectConfig is mainly a function for user-defined configuration. We mainly analyze how to get user-defined configuration.

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

As you can see, it is to read mx.config.js under the project. You can configure your own webpack loaders, webpack plugins, etc

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

### the configuration of the component library

The code for packaging the component library is much more complicated than before!

```javascript
import build from './build';
import { BUILD_LIB } from '../constants';

export const buildLib = (commander) => {
  // When you enter mx buildLib, this command is executed
  // This command actually executes the build file
  // We will package two packages of es and commonjs specifications
  commander
    .command(BUILD_LIB)
    .description('package and compile warehouse')
    .option(
      '-a, --analyzerUmd',
      'Whether to enable the webpack package analyzer'
    )
    .option('-e, --entry <path>', 'umd package path entry file', './src/index')
    .option(
      '--output-name <name>',
      'The name exposed to the outside world after packaging Umd format'
    )
    .option(
      '--entry-dir <path>',
      'cjs and esm packaging path entry directory',
      './src'
    )
    .option('--out-dir-umd <path>', 'Output directory in umd format', './dist')
    .option('--out-dir-esm <path>', 'Output directory in esm format', './esm')
    .option('--out-dir-cjs <path>', 'output directory in cjs format', './lib')
    .option('--copy-less', 'Copy files that do not participate in compilation')
    .option('--less-2-css', 'Whether to compile component styles')
    .option(
      '-m, --mode <esm|umd|cjs>',
      'package mode currently supports umd and esm'
    )
    .action(build);
};
```

Let's look at the build file, which is the file that is executed after you enter mx buildLib. Let's first look at the packaging of umd. This is simple.

```javascript
import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
// gulp task, will be discussed later
import { copyLess, less2css, buildCjs, buildEsm } from '../config/gulpConfig';
import getWebpackConfig from '../config/webpackConfig';
// Tool function, we will talk about it later
import { getProjectPath, logger, run, compose } from '../utils';
// Code package size analysis plugin
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
// environment constant
import {
  BUILD_LIB,
  CJS,
  ESM,
  UMD,
  COPY_LESS,
  LESS_2_LESS,
  CLEAN_DIR,
} from '../constants';

// The name attribute of package.json is used as the package name, of course, it can also be customized
const { name } = require(getProjectPath('package.json'));
// Check whether the name has a slash, which will affect the packaged result
const checkName = (outputName, name) => {
  if (!outputName && name?.includes('/')) {
    logger.warn(
      'The package name of package.json contains slashes, and webpack will create folders with slashes when packaging, so please pay attention to whether the file name after packaging meets your requirements'
    );
  }
};
/**
 * build for umd
 * @param analyzer Whether to enable the analysis package plugin
 * @param outDirUmd output directory
 * @param entry packaged entry file
 * @param outputName packaged name
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
        // The main purpose here is to set the libraryTarget to set the packaging format to umd
        // library is configured package name
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

Next, let’s talk about the most complicated gulp configuration, first look at the entry file:

- Before we write a compose function of a framework similar to koa, this function is a function executor that calls each asynchronous function in order, for example, there are asynchronous function 1, asynchronous function 2, asynchronous function 3, I need to follow the order Call 1, 2, 3, and these 1, 2, 3 are decoupled, joined in the form of middleware, and share some data

Let's look at the function first:

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

This function means:

- Get the middleware functions in array order
- Then when the function is called, the first parameter is passed to the next called function, and pass in the global shared data props: otherOptions.

The following is the file that uses the compose function to execute each function, that is, the file actually executed by mx buildLib. There are too many files, so I will use a build esm to explain

```javascript
import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
// gulp task
import { copyLess, less2css, buildCjs, buildEsm } from '../config/gulpConfig';
import getWebpackConfig from '../config/webpackConfig';
// Tool function
import { getProjectPath, logger, run, compose } from '../utils';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
// environment constant
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
  // Register middleware, and then use the compose function to combine
  const buildProcess = [bulidLibFns[CLEAN_DIR]];
  // Whether to pack the umd format, if yes, add the umd packaging function we talked about before
  if (mode === UMD) {
    buildProcess.push(bulidLibFns[UMD]);
  }
  // Whether to pack the esm format, if yes, add the corresponding packing function,
  if (mode === ESM) {
    buildProcess.push(bulidLibFns[ESM]);
  }
  // Omit some codes, just to add various processing functions, such as whether to add middleware that compiles less to css
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
```

Let's take a look at the gulp configuration file buildesm, which mainly executes the compileScripts function. Let's look at this function next.

```javascript
const buildEsm = ({ mode, outDirEsm, entryDir }) => {
  const newEntryDir = getNewEntryDir(entryDir);
  /**
   * compile esm
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
 * Compile the script file
 * @param {string} babelEnv babel environment variable
 * @param {string} destDir destination directory
 * @param {string} newEntryDir entry directory
 */
function compileScripts(mode, destDir, newEntryDir) {
  const { scripts } = paths;
  return gulp
    .src(scripts(newEntryDir)) // find the entry file
    .pipe(babel(mode === ESM ? babelEsConfig : babelCjsConfig)) // use gulp-babel processing
    .pipe(
      // use gulp to process css
      through2.obj(function z(file, encoding, next) {
        this.push(file.clone());
        // find target
        if (file.path.match(/(\/|\\)style(\/|\\)index\.js/)) {
          const content = file.contents.toString(encoding);
          file.contents = Buffer.from(cssInjection(content)); // process file content
          file.path = file.path.replace(/index\.js/, 'css.js'); // file rename
          this.push(file); // add this file
          next();
        } else {
          next();
        }
      })
    )
    .pipe(gulp.dest(destDir));
}
```

## webpack configuration details

### output

```
   output: {
     filename: 'js/[name].js',
     chunkFilename: 'js/[name].[chunkhash:8].js',
     assetModuleFilename: 'asset/[name].[contenthash:8].[ext]',
   }
```

- filename specifies the name of the main code file generated after packaging. [name] here means to use the name of the entry file (entry) as the file name and output it to the js folder.

- chunkFilename specifies the file name of the non-entry file generated by webpack packaging, such as the code block generated by code splitting. The placeholder [chunkhash:8] is used here to ensure the uniqueness of the file name and the caching effect.

- assetModuleFilename is used to specify the output path and name of resource files (images, fonts, etc.) processed by webpack when packaging. The placeholder [contenthash:8] is used to ensure the caching effect of resource files. [ext] is used to preserve the file extension.

The above configuration will package all JS files into the js directory, and package other types of resource files into the asset directory.

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
           // Asynchronously load public packages, components, etc.
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

- runtimeChunk: true The configuration item is used to package the Webpack runtime code into a separate file, so that each module does not contain duplicate runtime code. This improves cache utilization and speeds up builds.

What is runtime code? Webpack runtime code refers to some code snippets generated by Webpack when packaging to handle module loading and resolution, dependency management, code splitting, and some other internal functions of Webpack. For example:

```javascript
// Webpack runtime code snippet 1: module loading
(function(modules) {
   // module cache object
   var installedModules = {};

   // load module function
   function __webpack_require__(moduleId) {
     // check if the module is cached
     if(installedModules[moduleId]) {
       return installedModules[moduleId].exports;
     }

     // Create a new module object and cache it
     var module = installedModules[moduleId] = {
       i: moduleId,
       l: false,
       exports: {}
     };

     // load the module
     modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

     // mark module loaded
     module.l = true;

     // Return the exported object of the module
     return module. exports;
   }
   ...
```

- The splitChunks configuration item is used to split the code into smaller chunks to make better use of the browser's caching mechanism. Specifically, the following are configured here:

  - minChunks: 2 indicates the minimum number of code reuse, that is, when a module is referenced by at least two Chunks, it will be split into a separate Chunk.

  - chunks: 'all' means to optimize all types of Chunk, including synchronous and asynchronous Chunk.

  - cacheGroups represents a cache group, which can pack modules that meet certain conditions into a group for better splitting and caching. Two cache groups are defined here:

  - The reactBase cache group packs React-related modules into a Chunk named reactBase, and only includes React-related modules in the node_modules directory.

  - The async-commons cache group packs other common modules into an asynchronous Chunk named async-commons, which only contains modules under the node_modules directory and is referenced by at least two asynchronous Chunks. The cache group has a priority of 1 to ensure that it is split into a single chunk.

## loader

As mentioned above, you can expand the loader through mx.config.js. The loader that comes with mx-design-cli itself has

- babel-loader
  - test rule: /\.(js|jsx|ts|tsx)$/
  - Speed up compilation with thread-loader
- css related loader
  - css loader
  - postcss-loader
    -less-loader
- picture related loader
  - webpack5 built-in loader
  - test rules: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/]
  - less than 4 \* 1024 will be compiled into date URL format
- font related loader
  - webpack5 built-in loader
  - test rule: /\.(eot|ttf|woff|woff2?)$/
- svg related loader
  - @svgr/webpack loader

## resolve

```javascript
resolve: {
     extensions: [' ', '.ts', '.tsx', '.js', '.jsx', '.less', '.svg'],
   },
```

The resolve option tells Webpack what file extensions to look for when resolving modules. In this example, Webpack will look for the following file extensions in order: .ts, .tsx, .js, .jsx, .less, .svg. When we refer to these files in the import statement, Webpack will use this option to resolve the module path.

## plugins

```javascript
  plugins: [
     new WebpackBar({}),
     new webpack. DefinePlugin({
       'process.env': JSON.stringify(process.env),
     }),
   ],
```

we use the WebpackBar plugin and the DefinePlugin plugin.

The WebpackBar plugin can display a progress bar on the command line, allowing us to understand the progress of Webpack's construction more intuitively.

The DefinePlugin plugin can define global variables at compile time. Here we define process.env as the current environment variable, so that our code can execute different logic according to different environment variables.

The above is the basic webpack configuration, and the production and development environments will be handled differently, for example

### Development Environment

The development environment, such as plugins that need hot updates, sourceMap content will be more detailed, etc...

### Production environment (business code packaging, not component library)

Need to do a good split chunk to better use the cache to store the library under node_modules (because there are fewer changes), for example, you can use TerserPlugin to enable multi-threaded packaging, CssMinimizerPlugin to enable css compression, etc...
