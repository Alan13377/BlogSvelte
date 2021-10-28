const readingTime = (text) => {
  const wordsPerMinute = 200;
  const numOfWords = text.split(/\s/g).length;
  const minutes = numOfWords / wordsPerMinute;
  const readingTime = Math.ceil(minutes);
  return `📔 ${readingTime} Min. `;
};

export default readingTime;
