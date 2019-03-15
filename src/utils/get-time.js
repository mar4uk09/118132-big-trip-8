const HOUR = 24;
const MINUTE = 60;

/**
 * Получает строку с временем в необходимом формате
 *
 * @param {object} time - время
 * @return {string} строка с временем в необходимом формате
 */
const getTime = (time) => {
  let hour = time.getHours();
  let minute = time.getMinutes();
  if (hour < 10) {
    hour = `0` + hour;
  }
  if (minute < 10) {
    minute = `0` + minute;
  }
  return `${hour}:${minute}`;
};

/**
 * Получает строку с разницей между началом и окончанием действия
 *
 * @param {object} timeStart - время начала действия
 * @param {object} timeEnd - время окончания действия
 * @return {string} строка с разницей между началом и окончанием действия
 */
const getTimeDifference = (timeStart, timeEnd) => {
  let hourDif = timeEnd.getHours() - timeStart.getHours();
  if (hourDif < 0) {
    hourDif += HOUR;
  }
  let minuteDif = timeEnd.getMinutes() - timeStart.getMinutes();
  if (minuteDif < 0) {
    minuteDif += MINUTE;
    hourDif -= 1;
  }
  return `${hourDif}H ${minuteDif}M`;
};

export {getTime, getTimeDifference};
