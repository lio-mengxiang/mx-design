export function keepFocus(e) {
  e.target.tagName !== 'INPUT' && e.preventDefault();
}
