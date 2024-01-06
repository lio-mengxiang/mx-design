## language
[English](./README.md) | [中文](./README.zh.md)

## Introduction
This library includes the public methods required by mx-design, the main purpose is to reduce third-party dependencies, the purpose is to:

- Reduced dependency size: faster application or library loading.

- Improve application or library performance: Self-implemented utility functions are usually more lightweight and efficient than functions in third-party libraries.


For example, the classnames library is used to dynamically set CSS class names. It helps developers easily manage CSS class names in React applications, especially in conditional rendering. For example:

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
`buttonClasses` returns `btn btn-active` when isActive is true, and `btn` when isActive is false.

We implemented the cs function with similar functions, but the overall code is less than 20 lines.

## Documentation

### Function name: [cs](./src/classnames.ts)

Method for style merging, used instead of the classnames library.

Parameter Description:

- args: can be a string, an array of strings, an object, undefined, null, or a boolean.

The value pointed to by the path, or defaultValue if the path does not exist.


```javascript
import { cs } from './path/to/cs';

cs('foo', 'bar'); // returns the string 'foo bar'
cs('foo', ['bar', 'baz']); // returns the string 'foo bar baz'
cs({ foo: true, bar: false, baz: true }); // returns the string 'foo baz'
```

#### Implementation idea

Iterate through the incoming parameters
- If there is a string or array in the parameter, keep it
- If there is an object in the parameter, then traverse the object and keep the value of true

as follows:
```javascript
   const classNames = [];
   if (isString(v)) {
       classNames. push(v);
     } else if (isArray(v)) {
       classNames = classNames. concat(v);
     } else if (isObject(v)) {
       Object.keys(v).forEach((k) => {
         if (v[k]) {
           classNames. push(k);
         }
       });
     }
```

### Function name: [compose](./src/compose.ts)

Asynchronous function composition, whether to call the next function is completely determined by the middleware itself.

The compose() function will execute each middleware function in the order in the array. After each middleware function is executed, an object named middlewareData will be updated, which contains the data processed by each middleware function.

Modified on the basis of koa middleware code, it is the core implementation of plug-in calling a series of middleware functions.

However, I suggest that you can modify this function and add two mechanisms:
- For example, to increase the life cycle, for example, we wrote a plug-in (that is, a middleware function), and at the same time, we can add two declaration cycles before and after the call, so that the officially provided middleware function, the user can also customize the function in the On the basis of the officially provided middleware, the function is expanded.

- Add dependency judgment. For example, a middleware function must be called after b middleware function. You can add a require field. If there is no b before a in the execution sequence, this middleware will not be executed and a warning will be printed.

Parameter Description:

- middleware: middleware array, each element is IMiddleware type. The IMiddleware type is defined as follows:

```typescript
type IMiddleware = {
   name: string;
   fn: ({ middlewareData, next }: { middlewareData: Record<string, any>; next: () => void }) => Promise<{ data: Record<string, any> }>;
};
```

#### Example code

```javascript
import { compose } from './path/to/compose';

const middleware1 = {
   name: 'middleware1',
   async fn({ middlewareData, next }) {
     middlewareData. middleware1 = { foo: 'bar' };
     await next();
     return { data: { result: 'success' } };
   },
};

const middleware2 = {
   name: 'middleware2',
   async fn({ middlewareData, next }) {
     middlewareData. middleware2 = { baz: 'qux' };
     await next();
   },
};

compose([middleware1, middleware2]);
```
The value of middlewareData is
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

#### Implementation idea

Use dispatch to continuously call the next middleware function. Of course, the premise is that the middleware function will call the next function before going to the next middle, so that the error report can be printed out and the entire process can be interrupted in time.

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


Koa also has a similar mechanism. For data sharing, koa saves the data in the ctx object, and we bind the data in the middlewareData object. In order to know which middleware function generates the data, we increase the namespace. The name variable as follows.
```javascript
  middlewareData = {
       ...middlewareData,
       [name]: {
         ...middlewareData[name],
         ...data,
       },
     };
```

### Function name: [debounce](./src/debounce.ts)

debounce is a simple debounce function. When a function is called multiple times over a period of time, debounce will only execute the last called function once.


parameter:

- func: The function that needs to be stabilized.
- wait: Waiting time, that is, the minimum time interval for calling func, in milliseconds.
- immediate: Whether to execute func immediately when first called, default is false.

#### Example code
For example, when the user inputs in the input box, anti-shake can limit that only the last input value is processed when the user continuously inputs, so as to avoid unnecessary processing waste. Here is sample code using the debounce function:

```javascript
function handleInput(inputValue: string) {
   console.log(`Processing input value: ${inputValue}`);
   // Perform specific input processing
}

const debouncedHandleInput = debounce(handleInput, 300);

// The callback function triggered when the user enters in the input box
function onInput(event: Event) {
   const inputValue = (event. target as HTMLInputElement). value;
   debouncedHandleInput(inputValue);
}
```
#### Implementation idea

If the function is called again within the wait time, the last call `clearTimeout(timeout)` will be canceled immediately.


```javascript
   const context = this;
     if (timeout) clearTimeout(timeout);
       timeout = window.setTimeout(() => {
         result = func.apply(context, args);
       }, wait);
     // Only the first time you can get the result, that is, immediate is true
     // if not, result won't mean much
     return result;
```

Then, in order to cooperate with react hooks, there must be a cancel function, which can cancel the timer and avoid memory leaks, similar to:

```javascript
useEffect(()=>{
   return debounce. cancel()
});
```

In addition, when you call the debounce function, pass in `immediate: true` and we have added an immediate call function, which means that the first call will trigger the debounce function, and it will be executed. The code is as follows:
```javascript
  if (immediate) {
       const callNow = !timeout;
       timeout = window.setTimeout(() => {
         timeout = null;
       }, wait);
       if (callNow) result = func. apply(context, args);
     } else {
       //
     }
```
However, if you call immediate it means that you have to wait until the timeout elapses before triggering the incoming func.

### Function name: [group](./src/group.ts)

Function function: group the array according to the specified length.

parameter:

- array: any[] - the array to be grouped
- subGroupLength: number - the length of each subgroup

#### Example code

```javascript
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const subGroupLength = 3;
const groupedArray = group(originalArray, subGroupLength);

// groupedArray equals [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```


### Function name: [is](./src/is.ts)

Determine whether the type of the incoming parameter is as expected, for example, the function `isArray()` can be used to check whether the incoming object is an array type. The `isObject()` function can be used to check whether an object is an object type, the `isString()` function can be used to check whether an object is a string type, and so on.

Mainly based on the following functions to make judgments
```javascript
const getType = (obj) => Object.prototype.toString.call(obj).slice(8, -1);
```

This function is learned from the juqery code, and it has been used until now, and it is also a highly respected method of judging the type.


Instructions for use:

This file exports multiple functions, and the function of each function is to determine whether the type of the incoming parameter meets expectations.

- isArray(obj: any): obj is any[]
   - Determine whether the incoming parameter is an array type.

- isObject(obj: any): obj is { [key: string]: any }
   - Determine whether the incoming parameter is an object type.

- isString(obj: any): obj is string
   - Determine whether the incoming parameter is a string type.

- isNumber(obj: any): obj is number
  - Determine whether the incoming parameter is a numeric type.

- isRegExp(obj: any)
   - Determine whether the incoming parameter is a regular expression type.

- isFile(obj: any): obj is File
   - Determine whether the incoming parameter is of type File.

- isBlob(obj: any): obj is Blob
   - Determine whether the incoming parameter is of Blob type.

- isUndefined(obj: any): obj is undefined
   - Determine whether the incoming parameter is of undefined type.

- isFunction(obj: any): obj is (...args: any[]) => any
   - Determine whether the incoming parameter is a function type.

- isEmptyObject(obj: any): boolean
   - Determine whether the incoming parameter is an empty object, that is, whether it is an object without any attributes.

Parameter Description:

- obj: the parameter passed in


#### Example code

```javascript
import { isArray, isObject, isString } from './is';

const arr = [1, 2, 3];
const obj = { name: 'Tom', age: 20 };
const str = 'hello world';

console. log(isArray(arr)); // true
console. log(isObject(obj)); // true
console. log(isString(str)); // true
```

### Function name: [get](./src/get.ts)

It is used to replace the get method in lodash to obtain the value pointed to by the path in an object. If the path does not exist, defaultValue will be returned.

parameter list:

- source: Object, required, indicates the object to be retrieved.
- path: Array<string> | string, required, indicates the path to be searched. Can be a dot-separated path as a string (eg 'a.b.c') or as an array (eg ['a', 'b', 'c']). If the path is invalid, the function will return defaultValue.
- defaultValue: any, optional, indicating the default value to return if the path is not found. The default is undefined.
Return value: the value pointed to by the path, or defaultValue if the path does not exist.

#### Example code
```javascript
const obj = { a: { b: { c: 'hello' } } };
const result1 = get(obj, 'a.b.c', 'default');
console.log(result1); // output 'hello'

const result2 = get(obj, ['a', 'b', 'd'], 'default');
console.log(result2); // output 'default'

const result3 = get(null, 'a.b.c', 'default');
console.log(result3); // output 'default'
```

#### Implementation idea

Traverse the path, and judge whether each value in the path path exists. If it exists, it will continue to traverse the path. If it does not exist, it will return defaultValue. Note that path may be an array, as follows:

```javascript
// a[0].b -> a.0.b -> ['a', '0', 'b']
   const paths = Array.isArray(path) ? path : path.replace(/\[(\d+)\]/g, '.$1').split('.');
```
Then traverse the path logic, as follows:

```javascript
   let result = source;
   for (let i = 0; i < paths. length; i++) {
     if (typeof result !== 'object' || result === null) {
       return defaultValue;
     }
     result = result[paths[i]];
   }
```



### Function name: [log](./src/log.ts)

This function is a helper function for outputting information to the console. It can output normal information, or output information with different colors according to the specified level. This function also provides a divider method that can output a dividing line.

parameter list:

- args: variable parameter list, indicating the information to be output. Can be a string or other type of value.


#### Implementation idea

```javascript
log('Hello World!'); // output 'Hello World!'

log.info('Hello World!'); // output with gray 'Hello World!'

log.success('Hello World!'); // output with green 'Hello World!'

log.divider(); // output a gray dividing line
```

#### Implementation idea

Very simple, basically the encapsulation of the chalk function, simplified as follows:

```javascript
log.info = (arg) => chalk['gray'](arg);
```

### Function name: [omit](./src/omit.ts)


Used to replace lodash's omit method, this function receives an object and an array of keys, and returns a new object that is a shallow copy of the object passed in, with all properties listed in the array removed.

parameter list:

- obj: T, required, indicates the object to be operated on.
- keys: Array<K | string>, required, indicating the array of keys to be deleted. Can be a string or other type of value. If a key does not exist in the object, the key will be ignored.


#### Example code


```javascript
const obj = { a: 1, b: 2, c: 3 };
const result = omit(obj, ['a', 'b']);
console.log(result); // { c: 3 }
```



### Function name: [setCssVariables](./src/setCssVariables.ts)

Mainly used to change the theme, this function is used to set the value of CSS variables. It receives a key-value pair object, maps it as a CSS variable name and value, and then applies the variable value to the specified DOM element.

parameter list:

- variables: Record<string, any>, required, indicating the CSS variable name and value to be set. The key of this object is the CSS variable name, and the value is the value of the CSS variable.
- root: HTMLElement, optional, indicating the DOM element to apply the CSS variable to. Defaults to document.body.
Return value: no return value.

Example:

#### Example code


```javascript
const variables = {
   '--bg-color': '#fff',
   '--text-color': '#000',
};
setCssVariables(variables);
```
