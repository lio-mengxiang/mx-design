export function group(array: any[], subGroupLength: number) {
  let index = 0;
  const newArray = [];

  while (index < array.length) {
    newArray.push(array.slice(index, (index += subGroupLength)));
  }
  return newArray;
}
