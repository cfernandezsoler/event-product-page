import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import "../styles/events.scss";
import eventsPrev from "./data/events-prev.json";
import { Event } from "./events.js";

const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export class EventsPrev extends Component {
  constructor() {
    super();

    this.state = {
      events: [],
      eventsAnim: false,
      eventsLen: 0,
      eventsMax: 6,
      filterYear: 0,
      filterMonth: 0,
      showMore: true,
    };
  }

  componentDidMount() {
    let getEvents = getPrevEvents();
    this.setState({
      events: getEvents.list,
      eventsLen: getEvents.len,
      eventsAnim: true,
    });
  }

  showMoreEvents = () => {
    let newEventList = getPrevEvents(
      this.state.eventsMax + 6,
      this.state.filterYear,
      this.state.filterMonth
    );
    let showMore = newEventList.len == this.state.eventsLen ? false : true;

    this.setState({
      events: newEventList.list,
      eventsLen: newEventList.len,
      eventsMax: this.state.eventsMax + 6,
      showMore: showMore,
    });
  };

  setEventsAnim = () => {
    this.setState({ eventsAnim: true });
  };

  handleAnimFinished = () => {
    this.setState({ eventsAnim: false });
  };
  handleYearChange = (e) => {
    let newYear = parseInt(e.target.value);
    let newEventList = getPrevEvents(6, newYear, this.state.filterMonth);
    this.setState({
      events: newEventList.list,
      eventsAnim: true,
      eventsLen: newEventList.len,
      eventsMax: 6,
      filterYear: newYear,
      showMore: true,
    });
  };
  handleMonthChange = (e) => {
    let newMonth = parseInt(e.target.value);
    let newEventList = getPrevEvents(6, this.state.filterYear, newMonth);
    this.setState({
      events: newEventList.list,
      eventsAnim: true,
      eventsLen: newEventList.len,
      eventsMax: 6,
      filterMonth: newMonth,
      showMore: true,
    });
  };

  render() {
    return (
      <div id="event-prev" className="container">
        <h1 className="text-center my-2">Eventos Anteriores</h1>

        <h3>Filtrar por:</h3>
        <SelectYear handleYearChange={this.handleYearChange} />
        <SelectMonth handleMonthChange={this.handleMonthChange} />

        <CSSTransition
          in={this.state.eventsAnim}
          classNames="fadein"
          timeout={700}
          onEntered={this.handleAnimFinished}
        >
          <div>
            <EventsPrevList key={0} events={this.state.events} />
          </div>
        </CSSTransition>

        <InfoNoEvents
          eventsLen={this.state.eventsLen}
          showMore={this.state.showMore}
        />
        <ShowMoreButton
          eventsLen={this.state.eventsLen}
          showMore={this.state.showMore}
          showMoreEvents={this.showMoreEvents}
        />
      </div>
    );
  }
}

const SelectYear = (props) => (
  <div className="d-inline-block mb-3">
    <label htmlFor="year" className="d-block m-0">
      Año
    </label>
    <select
      className="filter-select"
      onChange={props.handleYearChange}
      id="year"
      name="year"
    >
      <option value={0}>Todos</option>
      <option value={2020}>2020</option>
      <option value={2019}>2019</option>
    </select>
  </div>
);

const SelectMonth = (props) => (
  <div className="d-inline-block">
    <label htmlFor="month" className="d-block m-0">
      Mes
    </label>
    <select
      className="filter-select"
      onChange={props.handleMonthChange}
      name="month"
      id="month"
    >
      <option value={0}>Todos</option>

      {months.map((item, i) => (
        <option key={i} value={i + 1}>
          {item}
        </option>
      ))}
    </select>
  </div>
);

const EventsPrevList = (props) =>
  props.events.map((data, i) => {
    let divClass = "d-flex flex-wrap justify-content-center m-center";
    return Array.isArray(data) ? (
      <div key={i} className={divClass}>
        {data}
      </div>
    ) : (
      data
    );
  });

const InfoNoEvents = (props) =>
  props.eventsLen == 0 || !props.showMore ? (
    <h3 className="text-center my-5">No hay eventos para mostrar</h3>
  ) : null;

const ShowMoreButton = (props) =>
  props.showMore && props.eventsLen > 5 ? (
    <button
      className="row m-center my-3 btn-show-more"
      onClick={props.showMoreEvents}
    >
      Mostrar mas
    </button>
  ) : null;

function getPrevEvents(eventsMax = 6, filterYear = 0, filterMonth = 0) {
  const eventsPrevReversed = [...eventsPrev].reverse(); // muestra eventos de mas reciente a antiguo
  let elements = [];
  let curMonthElements = [];
  let eventCounter = 0;
  let prevMonth = "";

  eventsPrevReversed.map((data) => {
    const EventoComponent = (
      <Event
        key={"event:" + data.id}
        imgSrc={data.imgSrc}
        imgAlt={data.imgAlt}
        day={data.day}
        date={data.date}
        name={data.name}
        fullDate={data.fullDate}
        hour={data.hour}
        desc={data.desc}
        albumLink={data.albumLink}
      />
    );

    const date = data.date.split("/").map((i) => parseInt(i));
    const d = new Date(date[2], date[1] - 1, date[0]);
    const curMonth = months[d.getMonth()];
    const curYear = d.getFullYear();

    const dateTitle = (
      <h2 key={"dateTitle:" + elements.length} className="date-title">
        {curMonth + " " + curYear}
      </h2>
    );

    if (
      // apply filters
      eventCounter >= eventsMax ||
      (filterYear && filterYear != curYear) ||
      (filterMonth && filterMonth != d.getMonth() + 1)
    )
      return;

    if (curMonth != prevMonth) {
      // month changes
      prevMonth = curMonth;

      if (!prevMonth) elements.push(dateTitle);
      else elements.push(curMonthElements, dateTitle);

      curMonthElements = [];
    }

    curMonthElements.push(EventoComponent);
    eventCounter++;
  });

  elements.push(curMonthElements);
  return { len: eventCounter, list: elements };
}
