## 语言
[English](./README.md) | [中文](./README.zh.md)

## 简介
mx-design 中的 React hooks库


## 文档

### [useMergeProps](./src/useMergeProps.ts)

这样的设计参考了arco.design

把我们的组件库对于props的处理分为三层：

举个例子, 如下的Empty组件：

```javascript
const defaultProps = {};
function Empty(baseProps: EmptyProps, ref) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps<EmptyProps>(baseProps, defaultProps, componentConfig?.Empty);

  return (
    <div ref={ref} className={containerCls} style={style}>

    </div>
  );
}
```
- 其中componentConfig是从ConfigProvider上传下来的组件全局配置，可以配置所有组件的参数，但它的优先级是高于defaultProps，也就是componentConfig?.Empty的属性如果有和defaultProps同名的，componentConfig?.Empty会覆盖defaultProps
- baseProps是直接传给Empty组件的props，优先级最高
- 最低优先级的是defaultProps



参数:

- componentProps: PropsType，必填，传入的组件props。
- defaultProps: Partial<PropsType>，必填，组件的默认props。
- globalComponentConfig: Partial<PropsType> | undefined，可选，全局组件配置。

#### 返回值

合并后的最终props


### [useMergeValue](./src/useMergeValue.ts)

参考了arco.design的设计。

组件有时分为受控组件和非受控组件，如果可以统一处理受控和非受控的逻辑，我们希望当你传入value的时候自动识别为受控状态，当没有传入value或者传入了defaultValue，我们认为是非受控的状态。

对外暴露的都是最终的值和改变值的方法。

#### 参数
useMergeValue 接受两个参数：

- defaultStateValue（必需）- 组件初始状态的默认值。
- props（可选）- 一个包含 defaultValue 和 value 两个属性的对象，用于控制组件状态。
  - defaultValue - 组件默认状态的值。
  - value - 控制组件状态的值。

#### 返回值
- mergedValue - 组件状态的合并值。
- setStateValue - 用于更新组件状态的函数。
- stateValue - 组件当前状态的值。

#### 案例
如下，这是一个checkbox组件
```javascript
import React, { useContext, useCallback, useRef, useEffect } from 'react';
import useMergeValue from 'xx';

function Checkbox<T extends React.ReactText>(baseProps: CheckboxProps<T>, ref) {
  const [checked, setChecked] = useMergeValue(false, {
    value: props.checked,
    defaultValue: props.defaultChecked,
  });

  // ...
}

Checkbox.displayName = 'Checkbox';
```

假如外部传入了props.checked，那么这个checkbox是一个受控组件，只有props.checked变化的时候，checkbox的状态才会变化。

如果没有传props.checked，而是传入了props.defaultChecked，那么这个checkbox是一个非受控组件，比如你点击checkbox这个组件的时候，会根据你点击的情况自动切换是否是check状态

#### 源码解析

如下，首先先检测value，也就是受控的属性value是否有值，有的话，说明是受控状态，所以返回给外部的就是受控的值value
```javascript
  const mergedValue = isUndefined(value) ? stateValue : value;
  return [mergedValue, ...]
```
如果是非受控状态，如下：
```javascript
  const [stateValue, setStateValue] = useState<T>(
    // eslint-disable-next-line no-nested-ternary
    !isUndefined(value) ? value : !isUndefined(defaultValue) ? defaultValue : defaultStateValue
  );
```
此时stateValue就是非受控状态了，`const mergedValue = isUndefined(value) ? stateValue : value;`这里就会返回非受控状态的值。

最后，我们以防万一，有可能刚开始是有value的，也就是处于受控状态，然后将value属性删除，变为了非受控状态：

```javascript
  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    if (value === undefined) {
      setStateValue(value);
    }
  }, [value]);
```

当然，这个函数并不是完美的，比如我初始化受控状态的值就是undefined，也就是value就是undefined的时候就会出问题，但是这个hook是供我们组件库内部使用，所以我们自己知道不会出现这种状况。
