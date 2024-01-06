<div align="center">
    <img alt="Mx Design Logo" width="300" src="../../assets/logo.png"/>
</div>
<div align="center" style="margin-top: 0px">
  <h1>Mx Design</h1>
</div>

<div align="center">

mx-design want to create the best tutorial project on github about how to build a react component library.

</div>

<div align="center">

[English](./README.md) | [中文](./README.zh.md)

</div>
## 代码架构设计

一个组件大致分为以下几个层次（对于简单组件没有分层，因为代码量太少了，没有必要）,我们拿tree组件举例：

### 逻辑层

把tree组价的数据结构放在useReducer中，然后更改数据结构的方法放入useStore中，这样就组成了tree组件的主要操作逻辑，所有的逻辑修改都聚合到这一层。

如下：

```
const useStore = (props) => {
  const [data, setData] = useReducer(...);
  const handleClick = () => { ... }
  // ...
  return {
    data,
    handleClick,
    ...
  }
}
```


### 样式层

使用useClass hook和useStyle hook，把所有的样式都聚合到这一层。

```javascript
const { wrapperClass, nodeClass } = useClass(...)

const { wrapperStyle, nodeStyle } = useStyle(...);
```


### 渲染层

因为在逻辑层已经拿到数据和例如click事件的注册方法，渲染层只要把数据和方法放到jsx元素上即可

样式也是如此，所以react的充当了一个渲染层（类似数据变化的逻辑都不在这里处理），就避免大量的useState去处理组件逻辑，让组件发可维护性大大降低。


