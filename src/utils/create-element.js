/**
 * Создает DOM-элемент из шаблона
 *
 * @param {string} template - шаблон
 * @return {оbject} DOM-элемент
 */
export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};
