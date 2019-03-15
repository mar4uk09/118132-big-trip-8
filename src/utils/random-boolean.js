/**
 * Создает произвольное булево значение
 *
 * @return {boolean} Произвольное булево значение
 */
export const getRandomBoolean = () => Boolean(Math.round(Math.random() * 2 - 1));
