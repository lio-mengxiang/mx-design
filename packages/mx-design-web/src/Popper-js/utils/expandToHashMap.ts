export function expandToHashMap(value: number | string | boolean, keys: Array<string>): { [key: string]: number | string | boolean } {
  return keys.reduce((hashMap, key) => {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
