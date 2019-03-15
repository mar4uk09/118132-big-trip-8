export const getRandomArrayElements = (array, elementsAmount) => Array.from(array).sort(() => 0.5 - Math.random()).slice(0, elementsAmount);
