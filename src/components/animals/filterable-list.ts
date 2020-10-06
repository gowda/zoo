export default (
  items: any[], key: string, q: string,
) => items.filter((item) => item[key].toLowerCase().startsWith(q.toLowerCase()));
