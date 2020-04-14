import React from "react";
import { Link } from "react-router-dom";
import eventsNext from "./data/events-next.json";
import { Event } from "./events.js";

export const EventsNext = (props) => (
  <div className="container">
    <h1 className="text-center my-2">Proximos Eventos</h1>

    <div className="d-flex flex-wrap justify-content-center m-center">
      {eventsNext.map((data) => (
        <Event
          key={"event-next:" + data.id}
          imgSrc={data.imgSrc}
          imgAlt={data.imgAlt}
          day={data.day}
          date={data.date}
          name={data.name}
          fullDate={data.fullDate}
          hour={data.hour}
          desc={data.desc}
          showReservBtn={data.showReservBtn}
          startLink={props.startLink}
        />
      ))}
      <EventReserv startLink={props.startLink} />
    </div>
  </div>
);

const EventReserv = (props) => (
  <Link
    to={{
      pathname: `${props.startLink}/contacto`,
      state: {
        reservaText: "Reserva de Evento ",
      },
    }}
    className="event-item my-3 mx-lg-3 overflow-hidden text-decoration-none"
  >
    <img
      src="./media/events/next/photo-reserv.png"
      alt="Add a reservation"
      className="border-img img-fluid"
    />
    <p id="reserva-text" className="m-0 text-center">
      Reservar
    </p>
  </Link>
);
