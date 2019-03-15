import {getRandomInt} from "./utils/random-int.js";
import {getRandomArrayElements} from "./utils/random-array-elem.js";
import {getRandomMapElements} from "./utils/random-map-elem.js";
import {getRandomBoolean} from "./utils/random-boolean.js";
import {getTime, getTimeDifference} from "./utils/get-time.js";

const MIN_PRICE = 5;
const MAX_PRICE = 120;
const MAX_OFFERS_COUNT = 2;
const MAX_DESCRIPTION_SENTENCES = 3;
const HOUR_IN_MS = 1000 * 60 * 60;
const MINUTE_IN_MS = 1000 * 60;
const HOUR = 24;
const MINUTE = 60;

const DATA = {
  TYPES: new Map([
    [`Taxi`, `🚕`],
    [`Bus`, `🚌`],
    [`Train`, `🚂`],
    [`Ship`, `🛳️`],
    [`Transport`, `🚊`],
    [`Drive`, `🚗`],
    [`Flight`, `✈️`],
    [`Check-in`, `🏨`],
    [`Sightseeing`, `🏛️`],
    [`Restaurant`, `🍴`],
  ]),
  CITIES: new Set([
    `Amsterdam`,
    `Geneva`,
    `Charmonix`,
    `Geneva`,
    `London`,
    `Paris`,
  ]),
  OFFERS: new Map([
    [`Add luggage`, getRandomInt(10, 50)],
    [`Switch to comfort class`, getRandomInt(10, 50)],
    [`Add meal`, getRandomInt(10, 50)],
    [`Choose seats`, getRandomInt(10, 50)],
  ]),
  DESCRIPTIONS: new Set([
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    `Cras aliquet varius magna, non porta ligula feugiat eget.`,
    `Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra.`,
    `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    `Sed sed nisi sed augue convallis suscipit in sed felis.`,
    `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`,
    `In rutrum ac purus sit amet tempus.`,
  ]),
};


/**
 * Генерирует данные для точки маршрута
 *
 * @return {object} объект с данными для точки маршрута
 */
export const generateTripPoint = () => {
  const DATE_START = new Date(Date.now() + getRandomInt(0, HOUR) * HOUR_IN_MS + getRandomInt(0, MINUTE) * MINUTE_IN_MS);
  const DATE_END = new Date(Date.now() + getRandomInt(0, HOUR) * HOUR_IN_MS + getRandomInt(0, MINUTE) * MINUTE_IN_MS);

  const type = getRandomMapElements(DATA.TYPES, 1);
  const city = getRandomArrayElements(DATA.CITIES, 1);
  const price = getRandomInt(MIN_PRICE, MAX_PRICE);
  const currentOffers = getRandomMapElements(DATA.OFFERS, getRandomInt(0, MAX_OFFERS_COUNT));
  const description = getRandomArrayElements(DATA.DESCRIPTIONS, getRandomInt(1, MAX_DESCRIPTION_SENTENCES)).join(` `);
  const isFavourite = getRandomBoolean();
  const timeStart = getTime(DATE_START);
  const timeEnd = getTime(DATE_END);
  const timeDirrefence = getTimeDifference(DATE_START, DATE_END);
  const offerPrice = (offer) => {
    return DATA.OFFERS.get(`${offer}`);
  };

  const tripPoint = {
    type,
    icon: DATA.TYPES.get(...type),
    city,
    price,
    currentOffers,
    offerPrice,
    description,
    photo: `http://picsum.photos/300/150?r=${Math.random()}`,
    isFavourite,
    timeStart,
    timeEnd,
    timeDirrefence,
  };
  return tripPoint;
};
