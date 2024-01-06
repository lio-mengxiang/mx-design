import type { ComponentType } from 'react';

export const evalCode = (code: string, dependencies: Record<string, any>): ComponentType => {
  const args = [];
  const argv = [];
  Object.keys(dependencies).map((key) => {
    args.push(key);
    argv.push(dependencies[key]);
  });
  args.push(code || '');
  return new Function(...args)(...argv);
};
