import { createContext } from 'react';

export interface CheckboxGroupContextProps {
  disabled?: boolean;
  isCheckboxGroup: boolean;
  onGroupChange: (_optionValue, _checked: boolean, e: Event) => void;
  checkboxGroupValue: (string | number)[];
  registerValue: (value: string | number) => void;
  unRegisterValue: (value: string | number) => void;
}

export const CheckboxGroupContext = createContext<CheckboxGroupContextProps>({
  isCheckboxGroup: false,
  checkboxGroupValue: [],
  onGroupChange: () => {},
  registerValue: () => {},
  unRegisterValue: () => {},
});
