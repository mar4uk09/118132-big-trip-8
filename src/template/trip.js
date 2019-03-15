/**
 * Создает шаблон запланированного события - точки маршрута
 *
 * @param {object} point - Oбъект с данными для точки маршрута
 * @return {string} Шаблон события
 */
export const createTripTemplate = (point) => `<article class="trip-point">
    <i class="trip-icon">${point.icon()}</i>
    <h3 class="trip-point__title">${point.type} to ${point.city}</h3>
    <p class="trip-point__schedule">
      <span class="trip-point__timetable">${point.timeStart}&nbsp;&mdash; ${point.timeEnd}</span>
      <span class="trip-point__duration">${point.timeDirrefence}</span>
    </p>
    <p class="trip-point__price">&euro;&nbsp;${point.price}</p>
    <ul class="trip-point__offers">
    ${[...point.currentOffers].map((offer) => `<li><button class="trip-point__offer">${offer} +&euro;&nbsp;${point.offerPrice(offer)}</button></li>`).join(``)}
    </ul>
  </article>
`;
