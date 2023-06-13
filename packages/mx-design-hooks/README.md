## language
[English](./README.md) | [中文](./README.zh.md)

## Introduction
React hooks library in mx-design


## Documentation

### [useMergeProps](./src/useMergeProps.ts)

This hook refers to arco.design

The processing of props in our component library is include three layers:

For example, the following Empty component:

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
- Among them, componentConfig is the global configuration of components come from ConfigProvider, which can configure the parameters of all components, its priority is higher than defaultProps, but lower than baseProps, that is, if the property of componentConfig?.Empty has the same name as defaultProps, componentConfig?.Empty will be Override defaultProps
- baseProps is the props directly passed to the Empty component, with the highest priority
- The lowest priority is defaultProps



parameter:

- componentProps: PropsType, required, passed in component props.
- defaultProps: Partial<PropsType>, required, the default props of the component.
- globalComponentConfig: Partial<PropsType> | undefined, optional, global component configuration.

#### return value

The final props after merging


### [useMergeValue](./src/useMergeValue.ts)

Refer to the hook of arco.design.

Components are sometimes include controlled components and uncontrolled components. If controlled and uncontrolled logic can be handled uniformly, it‘s nice. We hope that when you pass in a value, it will be automatically recognized as a controlled state. When no value is passed in or passed in If the defaultValue is set, we consider it to be an uncontrolled state.

All that is exposed is the final value and the method to change the value.

#### parameters
useMergeValue accepts two parameters:

- defaultStateValue (required) - The default value for the component's initial state.
- props (optional) - An object containing two properties, defaultValue and value, used to control the state of the component.
   - defaultValue - The value of the component's default state.
   - value - The value that controls the state of the component.

#### return value
- mergedValue - The merged value of the component's state.
- setStateValue - function to update the state of the component.
- stateValue - The value of the component's current state.

#### case
As follows, this is a checkbox component
```javascript
import React, { useContext, useCallback, useRef, useEffect } from 'react';
import useMergeValue from 'xx';

function Checkbox<T extends React.ReactText>(baseProps: CheckboxProps<T>, ref) {
   const [checked, setChecked] = useMergeValue(false, {
     value: props. checked,
     defaultValue: props. defaultChecked,
   });

   //...
}

Checkbox.displayName = 'Checkbox';
```

If props.checked is passed in from the outside, then the checkbox is a controlled component, and the state of the checkbox will only change when props.checked changes.

If props.checked is not passed in, but props.defaultChecked is passed in, then this checkbox is an uncontrolled component. For example, when you click on the checkbox component, it will automatically switch whether it is in the check state according to the situation you clicked.

#### Source Code Analysis

As follows, first check the value, that is, whether the controlled attribute value has a value, if so, it means that it is in a controlled state, so the value returned to the outside is the controlled value value
```javascript
   const mergedValue = isUndefined(value) ? stateValue : value;
   return [mergedValue, ...]
```
If it is an uncontrolled state, as follows:
```javascript
   const [stateValue, setStateValue] = useState<T>(
     // eslint-disable-next-line no-nested-ternary
     !isUndefined(value) ? value : !isUndefined(defaultValue) ? defaultValue : defaultStateValue
   );
```
At this point stateValue is the uncontrolled state, `const mergedValue = isUndefined(value) ? stateValue : value;`here will return the value of the uncontrolled state.

Finally, just in case, it is possible that there is a value at the beginning, that is, it is in a controlled state, and then the value attribute is deleted to become an uncontrolled state:

```javascript
   useEffect(() => {
     if (firstRenderRef. current) {
       firstRenderRef. current = false;
       return;
     }

     if (value === undefined) {
       setStateValue(value);
     }
   }, [value]);
```

Of course, this function is not perfect. For example, the value of my initialized controlled state is undefined, that is, there will be problems when the value is undefined, but this hook is for internal use of our component library, so we know that it will not appear this situation.
