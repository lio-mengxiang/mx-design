import { transform } from '@babel/standalone';
import RemoveImports from 'babel-plugin-transform-remove-imports';

export function babelTransform(input: string) {
  const { code } = transform(input, {
    presets: ['react'],
    plugins: [[RemoveImports, { removeAll: true }]],
  });
  return code;
}
