/**
 * Создает элемент template.content
 *
 * @param {string} inner - содержимое шаблона
 * @return {оbject} content шаблона
 */
export const createContent = (inner) => {
  const template = document.createElement(`template`);
  template.innerHTML = inner;
  return template.content;
};
