/**
 * Создает элемент template
 *
 * @param {string} inner - содержимое шаблона
 * @return {оbject} content шаблона
 */
export const createElement = (inner) => {
  const template = document.createElement(`template`);
  template.innerHTML = inner;
  return template.content;
};
