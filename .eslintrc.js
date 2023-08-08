/**
 * @zh plugins和extends的区别, 如果eslint里没有的规则需要plugin做拓展
 * @en The difference between plugins and extends, If you have rules that aren't in eslint, you need the plugin to extend them
 */
module.exports = {
  /**
   * @zh node或者浏览器中的全局变量很多，如果我们一个个进行声明显得繁琐,因此就需要用到env，这是对环境定义的一组全局变量的预设
   * @en There are many global variables in node or browser, it would be cumbersome if we declare them one by one, So we need to use env,
   * which is a preset for a set of global variables defined by the environment
   */
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  /**
   * @zh 插件是一个 npm 包，通常输出规则。要确保这个包安装在 ESLint 能请求到的目录下。plugins属性值可以省略包名的前缀eslint-plugin-。
   * 插件一个主要的作用就是补充规则，比如eslint:recommended中没有有关react的规则，则需要另外导入规则插件eslint-plugin-react
   * @en A plugin is an npm package that typically exports rules. Make sure the package is installed in a directory
   * where ESLint can request it.The plugins attribute value can omit the prefix eslint-plugin- of the package name.
   * One of the main functions of the plugin is to supplement rules,for example, if there are no rules about react
   * in eslint:recommended, you need to import the rule plugin eslint-plugin-react
   */
  plugins: ['react', 'babel', '@typescript-eslint/eslint-plugin'],

  /**
   * @zh extends可以看做是去集成一个个配置方案的最佳实践
   * eslint开头的ESLint官方扩展，有两个：eslint:recommended（推荐规范）和eslint:all（所有规范）。
   * plugin开头的扩展是插件类型扩展
   * eslint-config开头的来自npm包，使用时可以省略eslint-config-
   * @开头的扩展,是在npm包上面加了一层作用域scope
   * 需要注意的是：多个扩展中有相同的规则，以后面引入的扩展中规则为准。
   * @en extends can be seen as the best practice to integrate configuration schemes
   * There are two official ESLint extensions starting with eslint: eslint:recommended (recommended specification)
   * and eslint:all (all specifications).
   * Extensions starting with plugin are plugin type extensions
   * The beginning of eslint-config comes from the npm package, and eslint-config- can be omitted when using
   * The extension at the beginning of @ is to add a layer of scope to the npm package
   * It should be noted that if multiple extensions have the same rules,
   * the rules in the extensions introduced later shall prevail.
   */
  extends: ['airbnb', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'prettier'],
  /**
   * @zh 指定你想支持的语言，默认支持es5。指定啥语言，eslint就按照啥语法检查
   * @en Specify the language you want to support, es5 is supported by default. What language is specified,
   * eslint will check according to the grammar
   */
  parserOptions: {
    /**
     * @zh 你可以通过指定 sourceType 属性来指定你的代码要在哪种模式下运行。这个属性可以被设置为 "module"、"commonjs" 或 "script"。
     * 默认情况下，.js 和 .mjs 文件的 sourceType 是 "module"，而 .cjs 文件则是 "commonjs"
     * @en You can specify which mode your code should run in by specifying the sourceType attribute.
     * This property can be set to "module", "commonjs" or "script".
     * By default, the sourceType is "module" for .js and .mjs files, and "commonjs" for .cjs files
     */
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true, // enable JSX
    },
  },
  /**
   * 0 or 'off'：close rule(关闭规则)。
   * 1 or 'warn'：enable the rule，treat it as a warning(does not cause the program to fail) 并将其视为一个警告（不会导致程序失败)
   * 2 or 'error'：enable the rule, treat it as a bug (which will cause the program to fail if not fixed) 打开规则，并将其视为一个错误（如果不修复，将导致程序失败）
   */
  rules: {
    /**
     * @zh 这个规则要求 React 组件文件的扩展名必须是 .js 或者 .jsx。如果你希望允许使用 .tsx 扩展名的 TypeScript 文件需要更改此规则
     * @en This rule requires that React component files must have a .js or .jsx extension. If you want to allow
     * TypeScript files with .tsx extension you need to change this rule
     */
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    /**
     * @zh 该规则要求你在 React 组件中定义 propTypes 属性
     * @en This rule requires you to define propTypes properties in your React components
     */
    'react/prop-types': 0,
    /**
     * @zh 该规则要求你在 React 组件中定义 displayName 属性
     * @en This rule requires you to define displayName properties in your React components
     */
    'react/display-name': 0,
    /**
     * @zh 是否允许target属性是blank
     * @en Whether to allow the target attribute to be blank
     */
    'react/jsx-no-target-blank': 0,
    /**tt
     * @zh jsx遍历需要写key属性
     * @en jsx traversal, need to add the key attribute
     */
    'react/jsx-key': 1,
    /**
     * @zh 该规则是针对 React 项目的，检查您是否使用了 findDOMNode 方法。该方法被认为是一种反模式
     * @en This rule is specific to React projects and checks if you are using the findDOMNode method.
     * This method is considered an anti-pattern
     */
    'react/no-find-dom-node': 0,
    /**
     * @zh 该规则检查您在 JSX 属性中使用的引号类型是否符合指定的配置。
     * @en This rule checks that the type of quotes you use in JSX attributes conforms to the specified configuration
     */
    'jsx-quotes': [2, 'prefer-double'],

    /**
     * @zh 该规则检查您是否在同一个文件中同时使用空格和制表符进行缩进。
     * @en This rule checks if you use both spaces and tabs for indentation in the same file.
     */
    'no-mixed-spaces-and-tabs': 2,
    /**
     * @zh 该规则检查您是否使用制表符进行缩进
     * @en This rule checks if you use tabs for indentation.
     */
    'no-tabs': 2,
    /**
     * @zh 该规则检查您的代码行末尾是否存在多余的空格
     * @en This rule checks for extra spaces at the end of your lines of code.
     */
    'no-trailing-spaces': 2,
    /**
     * @zh 该规则检查您在代码中使用的引号类型是否符合指定的配置。
     * @en This rule checks that the type of quotes you are using in your code conforms to the specified configuration
     */
    quotes: [2, 'single'],
    /**
    * @zh 单行长度不能超过140
    * @en 140 characters maximum per line
    */
    'max-len': [0, { code: 140 }],
    /**
     * @zh 该规则检查您在代码块前是否存在空格
     * @en This rule checks if you have spaces before code blocks
     */
    'space-before-blocks': 2,
    /**
     * @zh 该规则检查您在括号内是否存在空格。
     * @en This rule checks if you have spaces inside the brackets.
     */
    'space-in-parens': 2,
    /**
     * @zh 该规则检查您在操作符周围是否存在空格
     * @en This rule checks if you have spaces around operators.
     */
    'space-infix-ops': 2,
    /**
     * @zh 该规则检查您的 TypeScript 函数是否显式指定了返回类型
     * @en This rule checks if your TypeScript function explicitly specifies a return type.
     */
    '@typescript-eslint/explicit-function-return-type': 0,
    /**
     * @zh 该规则检查您是否在 TypeScript 代码中使用了 any 类型
     * @en This rule checks whether you use the any type in your TypeScript code.
     */
    '@typescript-eslint/no-explicit-any': 0,
    /**
     * @zh 该规则检查您是否在 TypeScript 代码中使用了非空断言操作符
     * @en This rule checks if you use the non-null assertion operator ! in your TypeScript code.
     */
    '@typescript-eslint/no-non-null-assertion': 0,
    /**
     * @zh 此规则不允许使用 // @ts-ignore 注释来抑制 TypeScript 错误
     * @en This rule disallows the use of // @ts-ignore comments to suppress TypeScript errors.
     */
    '@typescript-eslint/ban-ts-ignore': 0,
    /**
     * @zh 此规则禁止在定义变量或函数之前使用它们。
     * @en This rule disallows the use of variables or functions before they are defined.
     */
    '@typescript-eslint/no-use-before-define': 0,
    /**
     * @zh 此规则对导出的函数和方法强制执行显式返回类型。
     * @en This rule enforces explicit return types on exported functions and methods.
     */
    '@typescript-eslint/explicit-module-boundary-types': 0,
    /**
     * @zh 它要求在函数中使用 return 语句时，要么总是返回一个值，要么总是不返回值
     * @en It requires that when a return statement is used in a function, it either always returns a value or it always returns no value
     */
    'consistent-return': 0,
    /**
     * @zh 此规则不允许在变量和函数名称中使用悬挂下划线。
     * @en This rule disallows the use of dangling underscores in variable and function names
     */
    'no-underscore-dangle': 0,
    /**
     * @zh 当一个模块只有一个导出时，此规则强制使用默认导出。
     * @en This rule enforces the use of default exports when there is only one export from a module
     */
    'import/prefer-default-export': 0,
    /**
     * @zh 此规则强制在导入语句中使用文件扩展名
     * @en This rule enforces the use of file extensions in import statements.
     */
    'import/extensions': 0,
    /**
     * @zh 此规则不允许导入无法由配置的解析器解析的模块。
     * @en This rule disallows importing modules that cannot be resolved by the configured resolver.
     */
    'import/no-unresolved': 0,
    /**
     * @zh 此规则强制使用 camelcase 变量和函数命名约定
     * @en This rule enforces the use of camelcase naming convention for variables and functions
     */
    camelcase: 0,
    /**
     * @zh 这条规则不允许使用一元运算符++和--
     * @en This rule disallows the unary operators ++ and --
     */
    'no-plusplus': 0,
    /**
     * @zh 此规则不允许重新分配函数参数
     * @en  This rule disallows reassigning function parameters.
     */
    'no-param-reassign': 0,
    /**
     * @zh 要求在模块顶部调用 require()
     * @en requires require() to be called at the top of the module.
     */
    'global-require': 0,
    /**
     * @zh 禁止在数组中使用数组索引作为 React 元素的 key 属性值
     * @en Disallows the use of array indexes in arrays as the key attribute value of React elements.
     */
    'react/no-array-index-key': 0,
    /**
     * @zh 强制数组方法的回调函数中有 return 语句
     * @en Mandatory return statement in the callback function of the array method.
     */
    'array-callback-return': 0,
    /**
     * @zh 要求在 JSX 元素周围使用括号，以避免遇到自动插入分号的情况
     * @en Requires parentheses around JSX elements to avoid automatic semicolon insertion.
     */
    'react/jsx-wrap-multilines': 0,
    /**
     * @zh 要求命名的函数表达式。
     * @en Function expressions that require naming.
     */
    'func-names': 0,
    /**
     * @zh 要求在注释前有空白。
     * @en Requires whitespace before comments.
     */
    'spaced-comment': 0,
    /**
     * @zh 禁止在循环中使用函数字面量。
     * @en Disables the use of function literals in loops
     */
    'no-loop-func': 0,
    /**
     * @zh 要求在可选的 props 上使用 defaultProps 属性。
     * @en require the defaultProps attribute on optional props.
     */
    'react/require-default-props': 0,
    /**
     * @zh 建议在使用 props 和 state 时使用对象解构赋值。
     * @en It is recommended to use object destructuring assignment when using props and state
     */
    'react/destructuring-assignment': 0,
    /**
     * @zh 要求使用键盘事件处理程序代替 click 事件处理程序，以确保可访问性。
     * @en Require key event handlers to be used instead of click event handlers for accessibility.
     */
    'jsx-a11y/click-events-have-key-events': 0,
    /**
     * @zh 禁止非交互式元素上使用交互式事件处理程序，以确保可访问性。
     * @en Disables the use of interaction event handlers on non-interactive elements to ensure accessibility.
     */
    'jsx-a11y/no-static-element-interactions': 0,
    /**
     * @zh 要求在 JSX 中每行只包含一个表达式。
     * @en Requires only one expression per line in JSX
     */
    'react/jsx-one-expression-per-line': 0,
    /**
     * @zh 建议在需要字符串连接时使用模板字面量
     * @en It is recommended to use template literals when string concatenation is required
     */
    'prefer-template': 1,
    /**
     * @zh 禁止在变量声明之前使用它们
     * @en Forbids using variables before they are declared
     */
    'no-use-before-define': 0,
    /**
     * @zh 禁止在非交互式元素上使用交互式事件处理程序，以确保可访问性。
     * @en Disallow interactive event handlers on non-interactive elements to ensure accessibility
     */
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    /**
     * @zh 强制类方法使用 this。
     * @en Force class methods to use this.
     */
    'class-methods-use-this': 0,
    /**
     * @zh 禁用位运算符。
     * @en Bitwise operators are disabled.
     */
    'no-bitwise': 0,
    /**
     * @zh 禁用 continue 语句。
     * @en Disable the continue statement.
     */
    'no-continue': 0,
    /**
     * @zh 要求 a 元素具有内容
     * @en Requires the a element to have content
     */
    'jsx-a11y/anchor-has-content': 0,
    /**
     * @zh 要求 a 元素的 href 属性有效
     * @en Requires the href attribute of the a element to be valid
     */
    'jsx-a11y/anchor-is-valid': 0,
    /**
     * @zh 禁止将 props 展开到组件中
     * @en Disallow spreading props into components
     */
    'react/jsx-props-no-spreading': 0,
    /**
     * @zh 要求 button 元素的 type 属性始终被声明
     * @en Requires the type attribute of the button element to always be declared
     */
    'react/button-has-type': 0,
    /**
    * @zh 规定对象字面量中花括号换行格式的规则
    * @en Rules for formatting curly brace breaks in object literals
    */
    'object-curly-newline': 0,
    /**
     * @zh 用于检查代码中对象或数组字面量末尾是否存在额外的逗号
     * @en  Check for unused extra commas at the end of object or array literals in code
     */
    'comma-dangle': 0,
    /**
     * @zh 用于检查代码没有使用的变量
     * @en Check for unused variable
     */
    'no-unused-vars': 0,
    'implicit-arrow-linebreak': 0,
    'operator-linebreak': 0,
    'no-shadow': 0,
    'function-paren-newline': 0,
    'react/default-props-match-prop-types': 0,
    'react/static-property-placement': 0,
    'react/jsx-no-bind': 0,
    'no-unused-expressions': 0,
    'no-nested-ternary': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/jsx-no-constructed-context-values': 0,
    'react/no-unescaped-entities': 0,
    'no-restricted-syntax': 0,
    'react/jsx-no-useless-fragment': 0
  },
};
