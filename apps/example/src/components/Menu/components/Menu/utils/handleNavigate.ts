export function handleNavigate({ navigate, path }) {
  return () => navigate(path);
}
