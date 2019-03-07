import {createElement} from "./utils/create-element.js";
import {getRandomInt} from "./utils/random-int.js";
import {createFilterTemplate} from "./template/filter.js";
import {createTripTemplate} from "./template/trip.js";

const MIN_NUMBER = 1;
const NUMBER_OF_TRIPS = 7;
const MAX_TRIPS_NUMBER = 5;
const FILTER_NAMES = [`Everything`, `Future`, `Past`];

/**
 * Добавляет запланированные события - точки маршрута
 *
 * @param {number} number - Количество необходимых событий
 * @return {оbject} fragment - Фрагмент разметки с событиями
 */
const fillTripSection = (number) => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < number; i++) {
    const trip = createElement(createTripTemplate());
    fragment.appendChild(trip);
  }
  return fragment;
};

/**
 * Добавляет все блоки фильтров на страницу
 *
 * @param {object} block - Блок событий, изменяемый при клике
 * @return {оbject} fragment - Фрагмент разметки с фильтрами
 */
const fillFilterBlock = (block) => {
  const fragment = document.createDocumentFragment();
  /**
   * Добавляет фильтры на страницу
   *
   * @param {string} element - Элемент перебираемого массива
   * @param {number} i - Индекс элемента
   */
  FILTER_NAMES.forEach(function (element, i) {
    const filter = createElement(createFilterTemplate(FILTER_NAMES[i]));
    const checkbox = filter.querySelector(`input`);

    fragment.appendChild(filter);

    checkbox.addEventListener(`change`, () => {
      while (block.firstChild) {
        block.removeChild(block.firstChild);
      }
      tripsBlock.appendChild(fillTripSection(getRandomInt(MIN_NUMBER, MAX_TRIPS_NUMBER)));
    });
  });
  return fragment;
};

const tripFilter = document.querySelector(`.trip-filter`);
const tripsBlock = document.querySelector(`.trip-day__items`);

tripFilter.appendChild(fillFilterBlock(tripsBlock));
tripsBlock.appendChild(fillTripSection(NUMBER_OF_TRIPS));
