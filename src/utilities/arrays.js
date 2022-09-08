export const chunk = (list = [], chunkSize) => {
  const chunks = [];

  for (let i = 0; i < list.length; i += chunkSize) {
    const slice = list.slice(i, i + chunkSize);
    chunks.push(slice);
  }

  return chunks;
};
