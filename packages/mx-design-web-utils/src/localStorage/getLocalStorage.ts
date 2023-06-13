export function setLocalStorage<T>(key: string, value: T | null = null): void {
  try {
    if (value === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  } catch (error) {
    if (typeof window !== 'undefined') {
      console.error(error);
    }
  }
}
