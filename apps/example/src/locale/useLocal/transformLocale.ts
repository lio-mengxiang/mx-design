import { REGEXP } from '../constants';

export function transformLocale(pattern: string, placement?: Record<string, string | number>): string {
  if (typeof pattern === 'string') {
    if (!placement || !REGEXP.test(pattern)) return pattern;
    return pattern.replace(REGEXP, (_, key) => {
      if (placement) return String(placement[key]);
      return '';
    });
  }

  return '';
}
