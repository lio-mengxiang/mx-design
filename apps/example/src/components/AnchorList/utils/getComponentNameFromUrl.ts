export function getComponentNameFromUrl(location) {
  return location.pathname.split('/')[2].toLocaleUpperCase();
}
