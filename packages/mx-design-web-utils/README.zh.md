## 语言
[English](./README.md) | [中文](./README.zh.md)

## 简介
此库包括mx-design需要的公共方法,主要目的是减少第三方依赖，目的是：

- 减少依赖体积：从而加快应用程序或库的加载速度。

- 提高应用程序或库的性能：自行实现的工具函数通常会比第三方库中的函数更加轻量级和高效。


例如classnames这个库，用于动态地设置CSS类名。它可以帮助开发者轻松地在React应用程序中管理CSS类名，特别是在条件渲染。例如：

```javascript
import classNames from 'classnames';

function MyComponent(props) {
  const { isActive } = props;
  const buttonClasses = classNames('btn', {
    'btn-active': isActive,
  });

  return <button className={buttonClasses}>Click Me</button>;
}
```
`buttonClasses`在isActive为true时，返回`btn btn-active`,在isActive为false时，返回`btn`。

我们实现了类似功能的cs函数，但整体代码不到20行。

## 文档

### 函数名称：[cs](./src/classnames.ts)

样式合并的方法，用于代替classnames库。

参数说明：

- args: 可以是字符串、字符串数组、对象、undefined、null或布尔值。

路径指向的值，如果路径不存在，则返回defaultValue。


```javascript
import { cs } from './path/to/cs';

cs('foo', 'bar'); // 返回字符串 'foo bar'
cs('foo', ['bar', 'baz']); // 返回字符串 'foo bar baz'
cs({ foo: true, bar: false, baz: true }); // 返回字符串 'foo baz'
```

#### 实现思路

遍历传入的参数
- 如果参数里有字符串或者数组，保留下来
- 对于参数里有对象，则遍历对象把值是true的值保留下来

如下：
```javascript
  const classNames = [];
  if (isString(v)) {
      classNames.push(v);
    } else if (isArray(v)) {
      classNames = classNames.concat(v);
    } else if (isObject(v)) {
      Object.keys(v).forEach((k) => {
        if (v[k]) {
          classNames.push(k);
        }
      });
    }
```

### 函数名称：[compose](./src/compose.ts)

异步函数组合，是否调用下一个函数完全由中间件本身决定。

compose() 函数会按照数组中的顺序执行每个中间件函数。每个中间件函数执行完毕后，会更新一个名为 middlewareData 的对象，该对象包含了每个中间件函数处理后的数据。

在koa中间件代码的基础上做了改造，是插件式的调用一系列中间件函数的核心实现。

但是，我建议你可以在此函数上进行改造，增加两个机制：
- 比如增加生命周期，例如我们写了一个插件（也就是一个中间件函数），同时可以增加调用前的和调用后两个声明周期，这样官方提供的中间件函数，用户也可以自定义函数在官方提供的中间件基础上，拓展功能。

- 增加依赖关系判断，比如a中间件函数必须要在b中间件函数之后调用，可以增加一个require字段，如果执行顺序中a之前没有b, 就不执行这个中间件打印warning。

参数说明：

- middleware：中间件数组，每个元素都是IMiddleware类型。IMiddleware类型定义如下：

```typescript
type IMiddleware = {
  name: string;
  fn: ({ middlewareData, next }: { middlewareData: Record<string, any>; next: () => void }) => Promise<{ data: Record<string, any> }>;
};
```

#### 示例代码

```javascript
import { compose } from './path/to/compose';

const middleware1 = {
  name: 'middleware1',
  async fn({ middlewareData, next }) {
    middlewareData.middleware1 = { foo: 'bar' };
    await next();
    return { data: { result: 'success' } };
  },
};

const middleware2 = {
  name: 'middleware2',
  async fn({ middlewareData, next }) {
    middlewareData.middleware2 = { baz: 'qux' };
    await next();
  },
};

compose([middleware1, middleware2]);
```
middlewareData的值为
```javascript
{
    "middleware1": {
        "foo": "bar"
    },
    "middleware2": {
        "baz": "qux"
    }
}
```

#### 实现思路

通过dispatch来实现不断调用下一个中间件函数，当然，前提是中间件函数要调用next函数才会走到下一个中间，这样就可以把报错打印出来然后及时中断整个流程。

```javascript
  const middleware = [...] // middlewares
  async function dispatch(index: number) {
    const { name, fn } = middleware[index];
    const data = await fn({
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
```


koa也是类似的机制，为了数据共享,koa将数据都保存到了ctx对象里，我们把数据都绑定在middlewareData对象里，为了知道产生数据的是哪个中间件函数，我们增加了命名空间。如下的name变量。
```javascript
 middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data,
      },
    };
```

### 函数名称： [debounce](./src/debounce.ts)

debounce是一个简单的防抖函数。当一个函数在一段时间内被多次调用时，debounce会只让最后一次调用的函数执行一次。


参数：

- func：需要进行防抖的函数。
- wait：等待时间，即调用 func 的最少时间间隔，单位为毫秒。
- immediate：是否在首次调用时立即执行 func，默认为 false。

#### 示例代码
例如，在用户在输入框中输入时，防抖可以限制在用户连续输入时只有最后一个输入的值才被处理，从而避免不必要的处理浪费。下面是使用 debounce 函数的示例代码：

```javascript
function handleInput(inputValue: string) {
  console.log(`Processing input value: ${inputValue}`);
  // 进行具体的输入处理
}

const debouncedHandleInput = debounce(handleInput, 300);

// 用户在输入框中输入时触发的回调函数
function onInput(event: Event) {
  const inputValue = (event.target as HTMLInputElement).value;
  debouncedHandleInput(inputValue);
}
```
#### 实现思路

如果在wait时间内再次调用函数，就立马取消上一次的调用`clearTimeout(timeout)`。


```javascript
  const context = this;
    if (timeout) clearTimeout(timeout);
      timeout = window.setTimeout(() => {
        result = func.apply(context, args);
      }, wait);
    // Only the first time you can get the result, that is, immediate is true
    // if not，result won't mean much
    return result;
```

然后为了配合react hooks, 要有cancel函数，能取消定时器，避免内存泄露，类似：

```javascript
useEffect(()=>{
  return debounce.cancel()
});
```

另外，当你调用debounce函数时，传入`immediate: true`我们增加了立即调用函数，意味着第一次调用会触发debounce函数，就会执行，代码如下：
```javascript
 if (immediate) {
      const callNow = !timeout;
      timeout = window.setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) result = func.apply(context, args);
    } else {
      //
    }
```
但是，如果你调用immediate就意味着，你必须等到timeout结束才会触发传入的func。



### 函数名称：[group](./src/group.ts)

函数功能：将数组按照指定长度分组。

参数：

- array: any[] - 待分组的数组
- subGroupLength: number - 每个子组的长度

#### 示例代码

```javascript
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const subGroupLength = 3;
const groupedArray = group(originalArray, subGroupLength);

// groupedArray 等于 [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```


### 函数名称：[is](./src/is.ts)

判断传入参数的类型是否符合预期, 例如，函数 `isArray()` 可以用来检查传入的对象是否为数组类型。`isObject()` 函数可以用来检查对象是否为对象类型，`isString()` 函数可以用来检查对象是否为字符串类型，以此类推。

主要基于的是一下函数去做判断
```javascript
const getType = (obj) => Object.prototype.toString.call(obj).slice(8, -1);
```

这个函数是从juqery代码里学来的，一直沿用到现在，也是极为推崇的判断类型的方法。


使用说明：

该文件导出了多个函数，每个函数的作用是判断传入参数的类型是否符合预期。

- isArray(obj: any): obj is any[]
  - 判断传入参数是否为数组类型。

- isObject(obj: any): obj is { [key: string]: any }
  - 判断传入参数是否为对象类型。

- isString(obj: any): obj is string
  - 判断传入参数是否为字符串类型。

- isNumber(obj: any): obj is number
 - 判断传入参数是否为数字类型。

- isRegExp(obj: any)
  - 判断传入参数是否为正则表达式类型。

- isFile(obj: any): obj is File
  - 判断传入参数是否为File类型。

- isBlob(obj: any): obj is Blob
  - 判断传入参数是否为Blob类型。

- isUndefined(obj: any): obj is undefined
  - 判断传入参数是否为undefined类型。

- isFunction(obj: any): obj is (...args: any[]) => any
  - 判断传入参数是否为函数类型。

- isEmptyObject(obj: any): boolean
  - 判断传入参数是否为空对象，即是否为对象且没有任何属性。

参数说明：

- obj: 传入的参数


#### 示例代码

```javascript
import { isArray, isObject, isString } from './is';

const arr = [1, 2, 3];
const obj = { name: 'Tom', age: 20 };
const str = 'hello world';

console.log(isArray(arr)); // true
console.log(isObject(obj)); // true
console.log(isString(str)); // true
```

### 函数名称：[get](./src/get.ts)

用于替代lodash中的get方法，用来获取一个对象中路径指向的值，如果路径不存在，则返回defaultValue。

参数列表：

- source：Object，必填，表示要检索的对象。
- path：Array<string> | string，必填，表示要查找的路径。可以是字符串形式的点分隔路径（例如'a.b.c'），也可以是数组形式的路径（例如['a', 'b', 'c']）。如果路径不合法，函数将返回defaultValue。
- defaultValue：any，可选，表示如果未找到路径，则返回的默认值。默认为undefined。
返回值：路径指向的值，如果路径不存在，则返回defaultValue。

#### 示例代码
```javascript
const obj = { a: { b: { c: 'hello' } } };
const result1 = get(obj, 'a.b.c', 'default');
console.log(result1); // 输出 'hello'

const result2 = get(obj, ['a', 'b', 'd'], 'default');
console.log(result2); // 输出 'default'

const result3 = get(null, 'a.b.c', 'default');
console.log(result3); // 输出 'default'
```

#### 实现思路

遍历path，依此判断path路径中的每一个值是否存在，存在则继续遍历path，不存在则返回defaultValue,注意path有可能是数组，如下：

```javascript
// a[0].b -> a.0.b -> ['a', '0', 'b']
  const paths = Array.isArray(path) ? path : path.replace(/\[(\d+)\]/g, '.$1').split('.');
```
然后遍历path逻辑, 如下：

```javascript
  let result = source;
  for (let i = 0; i < paths.length; i++) {
    if (typeof result !== 'object' || result === null) {
      return defaultValue;
    }
    result = result[paths[i]];
  }
```



### 函数名称：[log](./src/log.ts)

该函数是一个用于在控制台输出信息的辅助函数。它可以输出普通信息，也可以根据指定的等级输出带有不同颜色的信息。该函数还提供了一个divider方法，可以输出一条分割线。

参数列表：

- args：可变参数列表，表示要输出的信息。可以是字符串或其他类型的值。


#### 实现思路

```javascript
log('Hello World!'); // 输出'Hello World!'

log.info('Hello World!'); // 输出带有灰色'Hello World!'

log.success('Hello World!'); // 输出带有绿色'Hello World!'

log.divider(); // 输出一条灰色分割线
```

#### 实现思路

很简单，基本是chalk函数的封装，简化如下：

```javascript
log.info = (arg) => chalk['gray'](arg);
```

### 函数名称：[omit](./src/omit.ts)


用来代替lodash的omit方法，该函数接收一个对象和一个键数组，会返回一个新对象，该对象为传入的对象的浅拷贝，并删除了数组中列出的所有属性。

参数列表：

- obj：T，必填，表示要进行操作的对象。
- keys：Array<K | string>，必填，表示要删除的键数组。可以是字符串或其他类型的值。如果某个键不存在于对象中，该键将被忽略。


#### 示例代码


```javascript
const obj = { a: 1, b: 2, c: 3 };
const result = omit(obj, ['a', 'b']);
console.log(result); // { c: 3 }
```



### 函数名称：[setCssVariables](./src/setCssVariables.ts)

主要用于更换主题，该函数用于设置CSS变量的值。它接收一个键值对对象，将其作为CSS变量名和值对应起来，然后将变量值应用于指定的DOM元素上。

参数列表：

- variables：Record<string, any>，必填，表示要设置的CSS变量名和值。该对象的键为CSS变量名，值为CSS变量的值。
- root：HTMLElement，选填，表示要应用CSS变量的DOM元素。默认为document.body。
返回值：无返回值。

示例：

#### 示例代码


```javascript
const variables = {
  '--bg-color': '#fff',
  '--text-color': '#000',
};
setCssVariables(variables);
```


