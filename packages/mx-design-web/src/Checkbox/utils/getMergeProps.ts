import { CheckboxGroupContextProps } from '../checkboxGroupContext';
import { CheckboxProps } from '../interface';

interface IGetMergeProps {
  props: CheckboxProps;
  context: CheckboxGroupContextProps;
}

export function getMergeProps({ props, context }: IGetMergeProps) {
  const mergeProps = { ...props };

  if (context.isCheckboxGroup) {
    mergeProps.checked = context.checkboxGroupValue.indexOf(props.value) !== -1;
    mergeProps.disabled = !!(context.disabled || props.disabled);
  }

  return mergeProps;
}
