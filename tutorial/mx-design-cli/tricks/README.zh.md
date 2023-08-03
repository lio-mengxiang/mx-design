## 前言

mx-design-cli这次重构，有两个非常实用的javascript函数技巧分享给大家！（如果你需要或者想学习打包react组件库或者业务代码的webpack和glup配置如何沉淀为一个基础命令行库，可以一起交流，微信：a2298613245，github地址：[mx-design-cli](https://github.com/lio-mengxiang/mx-design-cli)，readme有中英文的源码解读，）

顺便自吹一下，这种工具类似阿里的ant有，字节的arco也有，但是整体代码质量，我的会更好一些。如果你想学习类似工具的写法，真的值得一看。

## 高级技巧1：插件式，可插拔的函数组合器

这个技巧参考了`gulp`库的series源码，`release-it`库的core的实现，`popper-core`库的中间件实现原理，`koa`库compose源码实现，所以算是一个比较普及的开源库的写法，掌握思想更重要，代码是其次。

大家平时如果想要一个插件式，可插拔的函数组合器，可以拿来用。

写函数之前，我们想想如何实现一个可插拔的函数组合器。

### 第一版

最简单的就是koa的compose源码实现，我们会在它的基础上做改造，如下是第一版实现 + 案例

```javascript
// koa有个特点，调用next参数表示调用下一个函数
function fn1(next) {
    console.log(1);
    next();
}

function fn2(next) {
    console.log(2);
    next();
}

function fn3(next) {
    console.log(3);
    next();
}

middleware = [fn1, fn2, fn3]

function compose(middleware){
   function dispatch (index){
        if(index == middleware.length) return ;
        const curr = middleware[index];
        // 这里使用箭头函数，让函数延迟执行
        return curr(() => dispatch(++index))
  }
  dispatch(0)
};

compose(middleware);
```

### 第二版

上面的compose有什么问题呢？

我们需要不同的函数之间共享数据，有的同学说，那简单啊，在windows下，或者global下挂一个对象，把全部数据挂上去不就完事了？

这可不行哦，首先全局变量污染了，其次compose执行结束，或者执行出错是不是还需要把这个对象上的数据清空，这写起来就有点麻烦了，我们照着koa的做法，把全局变量挂载到中间件里，实现如下：

```javascript
function compose(middleware, initOptions) {
  const otherOptions = initOptions || {};
  function dispatch(index) {
    if (index === middleware.length) return;
    const currMiddleware = middleware[index];
    return currMiddleware(() => dispatch(++index), otherOptions);
  }
  dispatch(0);
}

```

看到了不，上面有一个otherOptions，就是用来传递数据的

### 第三版

其实koa的实现非常有问题，就是全局的这个otherOptions（在koa中叫ctx）就像一个垃圾桶，啥都往里面装，万一几个中间件的要改的属性一样，那不还产生覆盖了啊。所以我们要加一个命名空间就好了。

```javascript
/**
 * 异步函数组合，是否调用下一个函数，完全由中间件自己决定
 * @param middleware 中间件
 */

type IMiddleware = {
  name: string;
  fn: ({ middlewareData, next }: { middlewareData: Record<string, any>; next: () => void }) => Promise<{ data: Record<string, any> }>;
};

export default function compose(middleware: IMiddleware[]) {
  let middlewareData: Record<string, any> = {};
  async function dispatch(index: number) {
    if (index === middleware.length) return;
    const { name, fn } = middleware[index];
    const { data } = await fn({
      middlewareData,
      next: () => {
        dispatch(++index);
      },
    });
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data,
      },
    };
  }
  dispatch(0);
}

```

上面这种写法就是`floating-ui`的实现方式，我们再进一步，上面的这种写法有什么问题吗？问题就是比如我官方提供了A中间件（其实就是一个函数），用户想去在A中间件之前或者之后执行一些行为，这个需求很常见。

所以，我们需要加生命周期钩子，就是在某个中间件执行前，执行后留一个生命周期函数。

### 第四版

```javascript
type IMiddleware = {
  name: string;
  before?: (...args: any[]) => void;
  after?: (...args: any[]) => void;
  fn: ({
    middlewareData,
    next,
  }: {
    middlewareData: Record<string, any>;
    next: () => void;
  }) => Promise<{ data: Record<string, any> }>;
};

export default function compose(middleware: IMiddleware[]) {
  let middlewareData: Record<string, any> = {};
  async function dispatch(index: number) {
    if (index === middleware.length) return;
    const { name, fn, before, after } = middleware[index];
    before?.(middlewareData);
    const { data } = await fn({
      middlewareData,
      next: () => {
        dispatch(++index);
      },
    });
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data,
      },
    };
    after?.(middlewareData);
  }
  dispatch(0);
}
```

上面的就是`release-it`的核心实现思路，但是还有一丢丢问题，就是如何处理中间件的依赖关系，比如 说B中间件必须要在A中间件之后调用，这个咋办？

### 第五版

增加reuqire属性，需要的中间件名字写入reuqire数组中，所以执行中间件前，需要遍历中间件数组，把依赖关系不满足的的中间件（也就是函数）删掉，或者log警告用户。这里我就不写了，一般情况用不到，这个是`popper-core`源码的实现。

## 高级技巧2：如何把stream（流）转化为promise函数

简要的说就是，一个常见的面试题就是如何实现一个promisify函数，但我的业务需求是，如何把一个流，也就是stream，promisify一下。

业务背景：

比如我要把react组件库的ts文件通过babel命令编译为js，然后通过gulp将less编译为css。

这里先要解释一下为什么不用webpack或者rollup去打包组件库，因为webpack和rollup一般都是单入口，也就是最终打包成一个文件，一般称之为umd格式。

这样肯定是不满足按需加载的，也就是说我引入了button组件，你就只把跟button组件相关的代码加载进来。

还有一些自定义处理css，gulp要比webpack简单，灵活非常多。其实这是ant design、arco design的打包方式，打包速度非常快。

所以这里我写了一个将less文件编译为css的函数，但是呢，我需要它返回promise，这样所有的任务都可以用promise.all来并行了，并且全部完成后也能知晓，出现错误也可以统一catch住。函数如下：

```javascript
export const copyLessMid = async ({ entryDir, outDirCjs, outDirEsm, mode }) => {
    const newEntryDir = getNewEntryDir(entryDir);
    const source = gulp.src(paths.styles(newEntryDir));
    if (mode === CJS) {
      source.pipe(gulp.dest(outDirCjs));
    }
    if (mode === ESM) {
      source.pipe(gulp.dest(outDirEsm));
    }

  return source
};

```

我们可以借助流的end事件，才把promise给resolve，如果触发error事件，就把promise给reject出去，代码如下：

```javascript
export const copyLessMid = async ({ entryDir, outDirCjs, outDirEsm, mode }) => {
  return new Promise((resolve, reject) => {
    const newEntryDir = getNewEntryDir(entryDir);
    const source = gulp.src(paths.styles(newEntryDir));
    if (mode === CJS) {
      source.pipe(gulp.dest(outDirCjs));
    }
    if (mode === ESM) {
      source.pipe(gulp.dest(outDirEsm));
    }
    source.on('end', resolve);
    source.on('error', reject);
  });
};

```

本文结束。。。比较短哈，react组件架子已经搭好了，全部有注释，并且所有工具函数和组件都有中英文教程，应该会在下个月先上到github上，然后慢慢补组件了，也是有不少特色的，也欢迎加微信一起讨论。
