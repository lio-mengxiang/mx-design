## language
[English](./README.md) | [中文](./README.zh.md)

## Introduction
The mx-design-node-utils library mainly serves mx-design's library of functions for automating, such as cli packaging tools, automatic generation of changelog, etc, and the main technology stack is Node.js.

## Documentation


### [withOra](./src/spinner.ts)

Use the ora package to encapsulate an asynchronous operation that includes loading effects, and support setting start prompts, success prompts, and failure prompts.

parameter:

- promiseFn: a function that returns a Promise
- text: the loading prompt passed to ora
- successText: prompt after successful operation
- failText: the prompt after the operation fails
- startText: optional parameter, the prompt before starting the operation, the default is an empty string

return value:

A Promise object, if the asynchronous operation is successful, the state of the Promise becomes resolved and the result of the asynchronous operation is returned, otherwise the state becomes rejected and an error message is returned.

Precautions:
Since the ora package currently only supports ES modules, this function cannot be used in commonjs modules.

#### case

```javascript
import { withOra } from './withOra';
import { fetchData } from './api';

async function getData() {
   return with Ora(
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
   console. error('Error:', err);
});
```

#### Source code explanation

Mainly added to the incoming promise function
- Before the function runs, the spin animation of ora starts
- After the function runs, print the corresponding log information according to success and failure

The core code is as follows:

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

### [execQuick](./src/execQuick.ts)

Execute shell commands and return results

parameter:

- command: the shell command string to execute

- options: configuration item object, optional

   - cwd: set the directory path to execute the command, the default is the working directory of the current process
   - time: Boolean value, whether to display the command execution time
   - silent: Boolean value, whether to display the output information of the command execution on the terminal, the default is true

Function return value:

A Promise object with the following properties:

- pid: the id number of the process
- code: the exit code of the shell command
- stdout: result string for standard output
- stderr: result string for error output

#### case
```javascript
import { execQuick } from './execQuick';

async function installDependencies() {
   try {
     const { code, stdout, stderr } = await execQuick('npm install');
     if (code === 0) {
       console. log(stdout);
       console.log('Dependencies installed successfully!');
     } else {
       console. error(stderr);
       console.error('Failed to install dependencies.');
     }
   } catch (err) {
     console. error(err);
   }
}

installDependencies();

```
#### Source Code Analysis

This function creates a child process through the spawn method to execute the shell command. During the execution of the command, the function will monitor the stdout and stderr events, concatenate the output result string into the result.stdout and result.stderr fields, and output to the terminal when options.silent is false.

At the end of executing the command, the function calls resolve to return a result object containing the child process id, exit code, standard output, and error output. At the same time, if options.time is true, the function will calculate the execution time of the command and output it to the terminal. If the command fails and options.silent is false, the function will also output an error message on the terminal.
