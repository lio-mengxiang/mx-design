import React from 'react';
import { SelectInputProps } from '../interface';
import { SingleInput } from './singleInput';
import { MultipleInput } from './multipleInput';

/**
 * @zh 这是一个用来给例如Select组件做基础组件
 * @en this is basic component ，such as the basis of the Select component
 */
export const SelectInput = React.forwardRef<Partial<any>, SelectInputProps>((props, ref) => {
  return props.multiple ? <MultipleInput ref={ref} {...props} /> : <SingleInput ref={ref} {...props} />;
});
