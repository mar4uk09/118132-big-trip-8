import {createContent} from "./utils/create-content.js";
import {createFilterTemplate} from "./template/filter.js";
import {generateTripPoint} from "./data.js";
import {TripPoint} from "./classes/trip-point.js";
import {OpenedTripPoint} from "./classes/open-trip-point.js";

const FILTER_NAMES = [`Everything`, `Future`, `Past`];

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
    const filter = createContent(createFilterTemplate(FILTER_NAMES[i]));
    const checkbox = filter.querySelector(`input`);

    checkbox.addEventListener(`change`, () => {
      while (block.firstChild) {
        block.removeChild(block.firstChild);
      }
    });

    fragment.appendChild(filter);
  });
  return fragment;
};

const tripFilter = document.querySelector(`.trip-filter`);
const tripsBlock = document.querySelector(`.trip-day__items`);

const tripPointComponent = new TripPoint(generateTripPoint());
const openedTripPointComponent = new OpenedTripPoint(generateTripPoint());

tripsBlock.appendChild(tripPointComponent.render());
tripFilter.appendChild(fillFilterBlock(tripsBlock));

tripPointComponent.onClick = () => {
  openedTripPointComponent.render();
  tripsBlock.replaceChild(openedTripPointComponent.element, tripPointComponent.element);
  tripPointComponent.unrender();
};

openedTripPointComponent.onSubmit = () => {
  tripPointComponent.render();
  tripsBlock.replaceChild(tripPointComponent.element, openedTripPointComponent.element);
  openedTripPointComponent.unrender();
};

openedTripPointComponent.onDelete = () => {
  tripPointComponent.render();
  tripsBlock.replaceChild(tripPointComponent.element, openedTripPointComponent.element);
  openedTripPointComponent.unrender();
};
