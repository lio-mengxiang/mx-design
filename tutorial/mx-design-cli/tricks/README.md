## Preface

In this refactoring of mx-design-cli, there are two very useful javascript function skills to share with you!

## Advanced technique 1:  Pluggable Function Combinators

If you usually want to crate a pluggable function combiner, you can use it.

Before writing functions, let's think about how to implement a pluggable function combinator.

### First Edition

The simplest is the compose source code implementation of koa, we will make transformations on the basis of it, the following is the first version of the implementation + case

```javascript
// koa has a feature, calling the next parameter means calling the next function
function fn1(next) {
     console. log(1);
     next();
}

function fn2(next) {
     console. log(2);
     next();
}

function fn3(next) {
     console. log(3);
     next();
}

middleware = [fn1, fn2, fn3]

function compose(middleware){
    function dispatch (index){
         if(index == middleware. length) return ;
         const curr = middleware[index];
         // Use the arrow function here to let the function delay execution
         return curr(() => dispatch(++index))
   }
   dispatch(0)
};

compose(middleware);
```

### second edition

What's wrong with the compose above?

We need to share data between different functions. Someone said that it is simple. If you Put in the an object under windows or global, you can Put in the all the data and you are done.

This is not appropriate. Firstly, the global variable is polluted. Secondly, after compose execution is completed, or if an execution error occurs, do we still need to clear the data on this object? Loaded into the middleware, the implementation is as follows:

```javascript
function compose(middleware, initOptions) {
   const otherOptions = initOptions || {};
   function dispatch(index) {
     if (index === middleware. length) return;
     const currMiddleware = middleware[index];
     return currMiddleware(() => dispatch(++index), otherOptions);
   }
   dispatch(0);
}

```

See no, there is an otherOptions on it, which is used to transfer data

### Third Edition

In fact, the implementation of koa is very problematic, that is, the global otherOptions (called ctx in koa) is like a trash can, and everything is put in it. In case the properties to be changed of several middleware are the same, it will not be overwritten. Yes. So we just need to add a namespace.

```javascript
/**
  * Asynchronous function composition, whether to call the next function is completely determined by the middleware itself
  * @param middleware middleware
  */

type IMiddleware = {
   name: string;
   fn: ({ middlewareData, next }: { middlewareData: Record<string, any>; next: () => void }) => Promise<{ data: Record<string, any> }>;
};

export default function compose(middleware: IMiddleware[]) {
   let middlewareData: Record<string, any> = {};
   async function dispatch(index: number) {
     if (index === middleware. length) return;
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

The above writing method is the implementation of `floating-ui`, let’s go one step further, is there any problem with the above writing method? The problem is that, for example, I officially provide A middleware (actually a function), and users want to perform some actions before or after A middleware. This requirement is very common.

Therefore, we need to add a life cycle hook, which is to leave a life cycle function before a certain middleware is executed and after execution.

### Fourth Edition

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
     if (index === middleware. length) return;
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

The above is the core implementation idea of `release-it`, but there is still a problem, how to deal with the dependencies of middleware, for example, middleware B must be called after middleware A, what should I do?

### Fifth Edition

Add the reuqire attribute, and write the required middleware name into the reuqire array, so before executing the middleware, you need to traverse the middleware array, delete the middleware (that is, the function) whose dependencies are not satisfied, or log to warn the user. I won't write it here, it is not used in general situations, this is the implementation of `popper-core` source code.

## Advanced technique 2: How to convert stream (stream) into promise function

Briefly speaking, a common interview question is how to implement a promisify function, but my  requirement is how to promisify a stream.

background:

For example, I want to compile the ts file of the react component library into js through the babel command, and then compile less into css through gulp.

Here we first need to explain why we don’t use webpack or rollup to package the component library, because webpack and rollup generally have a single entry, that is, they are finally packaged into a file, which is generally called the umd format.

This definitely does not satisfy on-demand loading, that is to say, I introduced the button component, and you only load the code related to the button component.

There are also some custom processing css, gulp is simpler and more flexible than webpack. In fact, this is the packaging method of ant design and arco design, and the packaging speed is very fast.

So here I wrote a function that compiles less files into css, but I need it to return a promise, so that all tasks can be parallelized with promise. Unified catch. The function is as follows:

```javascript
export const copyLessMid = async ({ entryDir, outDirCjs, outDirEsm, mode }) => {
     const newEntryDir = getNewEntryDir(entryDir);
     const source = gulp. src(paths. styles(newEntryDir));
     if (mode === CJS) {
       source.pipe(gulp.dest(outDirCjs));
     }
     if (mode === ESM) {
       source.pipe(gulp.dest(outDirEsm));
     }

   return source
};

```

We can use the end event of the stream to give the promise to resolve. If the error event is triggered, the promise will be rejected. The code is as follows:


```javascript
export const copyLessMid = async ({ entryDir, outDirCjs, outDirEsm, mode }) => {
   return new Promise((resolve, reject) => {
     const newEntryDir = getNewEntryDir(entryDir);
     const source = gulp. src(paths. styles(newEntryDir));
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
