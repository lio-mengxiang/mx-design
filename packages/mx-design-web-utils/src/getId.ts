const globalInstanceIdMap = {};

export default function getId(prefix: string) {
  globalInstanceIdMap[prefix] = prefix in globalInstanceIdMap ? globalInstanceIdMap[prefix] : 0;
  globalInstanceIdMap[prefix] += 1;
  return `${prefix}${globalInstanceIdMap[prefix]}`;
}
