export default (path) => {
  const { hostname, pathname } = new URL(path);
  const p = pathname === '/' ? '' : pathname;
  return `${hostname}${p}`.replace(/[^a-zA-Z0-9]/g, '-');
};
