/**
 * Создает произвольное число
 *
 * @param {number} min - Минимальное число
 * @param {number} max - Максимальное число
 * @return {number} Произвольное число
 */
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;
