export function get(source: Object, path: Array<string> | string, defaultValue?: any) {
  if (typeof source !== 'object' || source === null) {
    return defaultValue;
  }
  // a[0].b -> a.0.b -> ['a', '0', 'b']
  const paths = Array.isArray(path) ? path : path.replace(/\[(\d+)\]/g, '.$1').split('.');
  let result = source;
  for (let i = 0; i < paths.length; i++) {
    if (typeof result !== 'object' || result === null) {
      return defaultValue;
    }
    result = result[paths[i]];
  }
  return result === undefined ? defaultValue : result;
}
