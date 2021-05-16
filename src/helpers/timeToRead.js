export const timeToRead = (content) => {
  const wom = content.match(/\S+/g);
  const words = wom ? wom.length : 0;
  return Math.round(words / 250);
}