export function sortBlogs(from: string[], data: any) {
  const s: string[] = [];
  from
    .sort((a, b) => {
      return new Date(data[a]?.timestamp).getTime() - new Date(data[b]?.timestamp).getTime();
    })
    .forEach((path) => s.unshift(path));
  return s;
}
