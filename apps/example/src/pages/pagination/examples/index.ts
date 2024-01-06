import { basic } from './basic';
import { pageJumper } from './pageJumper';
import { size } from './size';
import { total } from './total';
import { step } from './step';
import { buffersize } from './buffersize';
import { simple } from './simple';

export const exampleList = {
  [basic.namespace]: basic,
  [pageJumper.namespace]: pageJumper,
  [size.namespace]: size,
  [total.namespace]: total,
  [step.namespace]: step,
  [buffersize.namespace]: buffersize,
  [buffersize.namespace]: buffersize,
  [simple.namespace]: simple,
};
