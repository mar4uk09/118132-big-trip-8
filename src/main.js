import {getRandomInt} from "./random-int.js";
import {createFilterTemplate} from "./filter-template.js";
import {createTripTemplate} from "./trip-template.js";

const MIN_NUMBER = 1;
const NUMBER_OF_TRIPS = 7;
const MAX_TRIPS_NUMBER = 10;
const FILTER_NAMES = [`Everything`, `Future`, `Past`];

/**
 * Добавляет запланированные события - точки маршрута
 *
 * @param {number} number - Количество необходимых событий
 * @param {object} parent - Блок-родитель, в котором отрисуются все события
 */
const fillTripSection = (number, parent) => {
  for (let i = 0; i < number; i++) {
    const template = document.createElement(`template`);
    template.innerHTML = createTripTemplate();
    parent.appendChild(template.content);
  }
};

/**
 * Добавляет все блоки фильтров на страницу
 *
 * @param {object} parent - Блок-родитель, в котором отрисуются все фильтры
 * @param {object} block - Блок событий, изменяемый при клике
 */
const fillFilterBlock = (parent, block) => {
/**
 * Добавляет фильтры на страницу
 *
 * @param {string} element - Элемент перебираемого массива
 * @param {number} i - Индекс элемента
 */
  FILTER_NAMES.forEach(function (element, i) {
    const template = document.createElement(`template`);
    template.innerHTML = createFilterTemplate(FILTER_NAMES[i]);
    parent.appendChild(template.content);
  });
  /**
   * Добавляет обработчик клика на страницу
   *
   * @param {object} filter - Фильтр, при клике на который перезаполняется блок событий
   */
  parent.childNodes.forEach(function (filter) {
    filter.addEventListener(`click`, () => {
      while (block.firstChild) {
        block.removeChild(block.firstChild);
      }
      fillTripSection(getRandomInt(MIN_NUMBER, MAX_TRIPS_NUMBER), block);
    });
  });
};

const tripFilter = document.querySelector(`.trip-filter`);
const tripsBlock = document.querySelector(`.trip-day__items`);

fillFilterBlock(tripFilter, tripsBlock);
fillTripSection(NUMBER_OF_TRIPS, tripsBlock);
