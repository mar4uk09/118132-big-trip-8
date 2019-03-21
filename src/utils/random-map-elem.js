import {getRandomArrayElements} from "./random-array-elem";

export const getRandomMapElements = (map, elementsAmount) => getRandomArrayElements(Array.from(map.keys()), elementsAmount);
