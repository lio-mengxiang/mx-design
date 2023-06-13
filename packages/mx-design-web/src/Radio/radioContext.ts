import { createContext } from 'react';
// type
import type { RadioGroupContextProps } from './interface';

const defaultContextValue: RadioGroupContextProps = {
  type: 'radio',
};

export const RadioGroupContext = createContext<RadioGroupContextProps>(defaultContextValue);
