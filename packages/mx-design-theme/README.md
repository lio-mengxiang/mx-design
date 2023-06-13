## language
[English](./README.md) | [中文](./README.zh.md)

## Introduction
This library is primarily used to implement mx-design's custom styling functionality.

## document

## Function name: cs

Description: A method for style merging, used instead of the classnames library.

Parameter:

- args: parameters can be a string, an array of strings, an object, undefined, null or a boolean.


Example:

```javascript
import { cs } from './path/to/cs';

cs('foo', 'bar'); // return 'foo bar'
cs('foo', ['bar', 'baz']); // return 'foo bar baz'
cs({ foo: true, bar: false, baz: true }); // return 'foo baz'
```


## Function name: compose

Description: Asynchronous function composition, whether to call the next function is completely determined by the middleware itself.

Parameter:

- middleware: An array of middleware, each element is of type IMiddleware.

Example:

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
the following is the value of middlewareData:
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
## Function name: debounce

Description: debounce is a simple debounce function. When a function is called multiple times within a certain period of time, debounce only allows the function called at the last time to be executed.

Parameters:

- func: The function to be debounced.
- wait: The waiting time, i.e. the minimum time interval for - calling func, in milliseconds.
- immediate: Whether to execute func immediately on the first call, the default is false.


## Function Name: group

Description: Group an array into sub-arrays of a specified length.

Parameters:

- array: any[] - The array to be grouped
- subGroupLength: number - The length of each sub-group


```javascript
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const subGroupLength = 3;
const groupedArray = group(originalArray, subGroupLength);

// groupedArray will equal [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```
## Function Name: is
Description: Check if the type of the passed-in parameter meets the expectations

Parameters:

This file exports multiple functions, each of which checks if the type of the passed-in parameter meets the expectations.

- isArray(obj: any): obj is any[]

  - Check if the passed-in parameter is an array.
- isObject(obj: any): obj is { [key: string]: any }

  - Check if the passed-in parameter is an object.
- isString(obj: any): obj is string

  - Check if the passed-in parameter is a string.
- isNumber(obj: any): obj is number

  - Check if the passed-in parameter is a number.
- isRegExp(obj: any)

  - Check if the passed-in parameter is a regular expression.
- isFile(obj: any): obj is File

  - Check if the passed-in parameter is a File.
isBlob(obj: any): obj is Blob

- Check if the passed-in parameter is a Blob.
  - isUndefined(obj: any): obj is undefined

- Check if the passed-in parameter is undefined.
  - isFunction(obj: any): obj is (...args: any[]) => any

  - Check if the passed-in parameter is a function.
- isEmptyObject(obj: any): boolean

- Check if the passed-in parameter is an empty object, i.e., an object with no properties.
Parameter Description:

Parameter:
- obj: the passed-in parameter

Example:

```javascript
import { isArray, isObject, isString } from './is';

const arr = [1, 2, 3];
const obj = { name: 'Tom', age: 20 };
const str = 'hello world';

console.log(isArray(arr)); // true
console.log(isObject(obj)); // true
console.log(isString(str)); // true
```
