export function getLocalStorage<T>(key: string, defaultValue: T | null = null): T | null {
  try {
    const value = localStorage.getItem(key);
    if (value) return JSON.parse(value) as T;
  } catch (error) {
    if (typeof window !== 'undefined') {
      console.error(error);
    }
  }

  return defaultValue;
}
