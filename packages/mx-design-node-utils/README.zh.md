## 语言
[English](./README.md) | [中文](./README.zh.md)

## 简介
mx-design-node-utils库的主要服务于mx-design的工程化的工具函数，例如cli打包工具，自动化生成changelog等等，主要技术栈是Node.js。

## 文档


### [withOra](./src/spinner.ts)

利用 ora 包封装一个包含 loading 效果的异步操作，支持设置开始提示语、成功提示语和失败提示语。

参数：

- promiseFn: 一个返回 Promise 的函数
- text: 传递给 ora 的加载中提示语
- successText: 操作成功后的提示语
- failText: 操作失败后的提示语
- startText: 可选参数，开始操作前的提示语，默认为空字符串

返回值：

一个 Promise 对象，如果异步操作成功，Promise 的状态变为 resolved 并且返回异步操作的结果，否则状态变为 rejected 并返回错误信息。

注意事项：
由于 ora 包当前只支持 ES 模块，该函数不能在 commonjs 模块中使用。

#### 案例

```javascript
import { withOra } from './withOra';
import { fetchData } from './api';

async function getData() {
  return withOra(
    async () => {
      return await fetchData();
    },
    {
      text: 'Fetching data from server...',
      successText: 'Data fetched successfully!',
      failText: 'Failed to fetch data.',
      startText: 'Start to fetch data',
    }
  );
}

getData().then((result) => {
  console.log('Data:', result);
}).catch((err) => {
  console.error('Error:', err);
});
```

#### 源码讲解

主要是在传入的promise函数上增加了
- 函数运行前，ora的spin动画开始
- 函数运行后，根据成功和失败从而打印对应的log信息

核心代码如下：

```javascript
 return new Promise((resolve, reject) => {
    // ora spin animation
    promiseFn()
      .then((result) => {
        // success log
      })
      .catch((err) => {
        // fail log
      });
  });
```

### execQuick

执行 shell 命令并返回结果

参数：

- command：要执行的 shell 命令字符串

- options：配置项对象，可选

  - cwd：设置执行命令的目录路径，默认为当前进程的工作目录
  - time：布尔值，是否显示命令执行的时间
  - silent：布尔值，是否在终端上显示命令执行的输出信息，默认为 true

函数返回值：

一个 Promise 对象，包含以下属性：

- pid：进程的 id 号
- code：shell 命令的退出码
- stdout：标准输出的结果字符串
- stderr：错误输出的结果字符串

#### 案例
```javascript
import { execQuick } from './execQuick';

async function installDependencies() {
  try {
    const { code, stdout, stderr } = await execQuick('npm install');
    if (code === 0) {
      console.log(stdout);
      console.log('Dependencies installed successfully!');
    } else {
      console.error(stderr);
      console.error('Failed to install dependencies.');
    }
  } catch (err) {
    console.error(err);
  }
}

installDependencies();

```
#### 源码解析

该函数通过 spawn 方法创建一个子进程来执行 shell 命令。在执行命令的过程中，函数会监听 stdout 和 stderr 事件，将输出的结果字符串拼接到 result.stdout 和 result.stderr 字段中，并在 options.silent 为 false 时输出到终端上。

执行命令结束时，函数会调用 resolve 将包含子进程 id、退出码、标准输出和错误输出的结果对象返回。同时，如果 options.time 为 true，函数会计算执行命令的时间并输出到终端上。如果命令执行失败且 options.silent 为 false，函数也会在终端上输出错误信息。

### getProjectPath

getProjectPath 是一个用于获取项目根路径的函数。

参数:
- dir: string (默认值: './') - 相对于命令输入的目录的路径，作为项目根路径的基础路径。如果未指定该参数，则默认为当前目录。

返回值
- string - 项目根路径的绝对路径。

#### 案例
```javascript
import { getProjectPath } from './getProjectPath';

const projectPath = getProjectPath();
console.log(projectPath); // '/Users/myuser/projects/myproject'
```

#### 源码解析
该函数使用了 Node.js 内置模块 path，通过将当前工作目录 (process.cwd()) 与相对路径进行拼接，来获取项目根路径的绝对路径。

