export const createDescription = (text, max) => {
  const slice = text.slice(0, max);
  return `${slice}...`;
}