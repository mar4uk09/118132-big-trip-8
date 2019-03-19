import {getRandomArrayElements} from "./random-array-elem.js";

export const getRandomMapElements = (map, elementsAmount) => getRandomArrayElements(Array.from(map.keys()), elementsAmount);
