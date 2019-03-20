import {createElement} from "./utils/create-element.js";

export class TripPoint {
  constructor(data) {
    this._type = data.type;
    this._icon = data.icon;
    this._city = data.city;
    this._price = data.price;
    this._currentOffers = data.currentOffers;
    this._description = data.description;
    this._photo = data.photo;
    this._isFavourite = data.isFavourite;
    this._timeStart = data.timeStart;
    this._timeEnd = data.timeEnd;
    this._timeDirrefence = data.timeDirrefence;

    this._element = null;
    this._onClick = null;
  }

  _onTripPointClick() {
    return typeof this._onClick === `function` && this._onClick();
  }

  get element() {
    return this._element;
  }

  set onClick(fn) {
    this._onClick = fn;
  }

  get template() {
    return `<article class="trip-point">
      <i class="trip-icon">${this._icon}</i>
      <h3 class="trip-point__title">${this._type} to ${this._city}</h3>
      <p class="trip-point__schedule">
        <span class="trip-point__timetable">${this._timeStart}&nbsp;&mdash; ${this._timeEnd}</span>
        <span class="trip-point__duration">${this._timeDirrefence}</span>
      </p>
      <p class="trip-point__price">&euro;&nbsp;${this._price}</p>
      <ul class="trip-point__offers">
      ${[...this._currentOffers].map(([offer, price]) => `<li><button class="trip-point__offer">${offer} +&euro;&nbsp;${price}</button></li>`).join(``)}
      </ul>
    </article>`.trim();
  }

  bind() {
    this._element.addEventListener(`click`, this._onTripPointClick.bind(this));
  }

  render() {
    this._element = createElement(this.template);
    this.bind();
    return this._element;
  }

  unbind() {
    this._element.removeEventListener(`click`, this._onTripPointClick.bind(this));
  }

  unrender() {
    this.unbind();
    this._element = null;
  }
}
