import {Component} from "./component";
import moment from 'moment';

export class TripPoint extends Component {
  constructor(data) {
    super();
    this._type = data.type;
    this._icon = data.icon;
    this._city = data.city;
    this._price = data.price;
    this._currentOffers = data.currentOffers;
    this._timeStart = moment(data.timeStart).format(`HH:mm`);
    this._timeEnd = moment(data.timeEnd).format(`HH:mm`);
    this._timeDifference = moment(data.timeEnd).subtract(moment(data.timeStart).hour(), `h`)
                                               .subtract(moment(data.timeStart).minute(), `m`)
                                               .format(`HH:mm`);

    this._onClick = null;
    this._onTripPointClick = this._onTripPointClick.bind(this);
  }

  _onTripPointClick() {
    return typeof this._onClick === `function` && this._onClick();
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
        <span class="trip-point__duration">${this._timeDifference}</span>
      </p>
      <p class="trip-point__price">&euro;&nbsp;${this._price}</p>
      <ul class="trip-point__offers">
      ${[...this._currentOffers].map(([offer, price]) => `<li><button class="trip-point__offer">${offer} +&euro;&nbsp;${price}</button></li>`).join(``)}
      </ul>
    </article>`.trim();
  }

  bind() {
    this._element.addEventListener(`click`, this._onTripPointClick);
  }

  unbind() {
    this._element.removeEventListener(`click`, this._onTripPointClick);
  }

  update(data) {
    this._city = data.city;
    this._price = data.price;
  }
}
