import type { RadioGroupContextProps, RadioProps } from '../interface';

interface IGetMergeProps {
  props: RadioProps;
  context: RadioGroupContextProps;
}

export function getMergeProps({ props, context }: IGetMergeProps) {
  const mergeProps = { ...props };

  if (context.group) {
    mergeProps.checked = context.value === props.value;
    mergeProps.disabled = !!(context.disabled || props.disabled);
  }

  return mergeProps;
}
