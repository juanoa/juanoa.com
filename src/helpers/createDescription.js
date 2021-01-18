const removeMd = require('remove-markdown');

export const createDescription = (text, max) => {
  const plainText = removeMd(text);
  const slice = plainText.slice(0, max);
  return `${slice}...`;
}