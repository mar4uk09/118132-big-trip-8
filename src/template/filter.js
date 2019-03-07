/**
 * Создает шаблон блока фильтр
 *
 * @param {string} value - Значение фильтра
 * @return {string} Шаблон блока фильтр
 */
export const createFilterTemplate = (value) =>
  `<input type="radio" id="filter-${value.toLowerCase()}"name="filter" value="${value.toLowerCase()}">
  <label class="trip-filter__item" for="filter-${value.toLowerCase()}">${value}</label>
`;
