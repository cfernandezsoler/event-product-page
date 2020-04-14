import React from "react";
import { Link } from "react-router-dom";
import "../styles/events.scss";
import { Overlay } from "./overlay";

export const Event = (props) => (
  <Overlay
    overlayButton={
      <EventItem
        imgSrc={props.imgSrc}
        imgAlt={props.imgAlt}
        day={props.day}
        date={props.date}
        name={props.name}
      />
    }
    overlayInfo={
      <EventOverlayInfo
        imgSrc={props.imgSrc}
        imgAlt={props.imgAlt}
        name={props.name}
        date={props.date}
        fullDate={props.fullDate}
        hour={props.hour}
        desc={props.desc}
        albumLink={props.albumLink}
        showReservBtn={props.showReservBtn}
        startLink={props.startLink}
      />
    }
    overlayScreen={true}
  />
);

const EventItem = (props) => (
  <div className="event-item my-3 mx-lg-3 overflow-hidden">
    <img
      className="border-img img-fluid"
      src={"./media/events/next/" + props.imgSrc}
      alt={props.imgAlt}
    />
    <div className="d-flex">
      <div className="border-text text-center ml-3 pr-3">
        <h5 className="m-0 ">{props.day}</h5>
        <h5 className="m-0 event-date">{props.date}</h5>
      </div>
      <p className="m-0 ml-2 event-text">{props.name}</p>
    </div>
  </div>
);

const EventOverlayInfo = (props) => (
  <div
    closeoverlay="true"
    id="overlay-exit-outside"
    className="event-info-overlay"
  >
    <div className="event-info">
      <OverlayHeader name={props.name} />

      <img
        src={"./media/events/prev/" + props.imgSrc}
        alt={props.imgAlt}
        className="img-fluid"
      />
      <h4 className="mt-2 mb-0">Fecha:</h4>
      <p>{props.fullDate}</p>
      <h4 className="mt-2 mb-0">Hora:</h4>
      <p>{props.hour}</p>
      <h4 className="mt-2 mb-0">Descripcion:</h4>
      <p>{props.desc}</p>

      <OverlayReservButton
        showReservBtn={props.showReservBtn}
        name={props.name}
        date={props.date}
        startLink={props.startLink}
      />
      <OverlayMediaButton albumLink={props.albumLink} />
    </div>
  </div>
);

const OverlayHeader = (props) => (
  <div id="overlay-header">
    <h3 className="my-3">{props.name}</h3>
    <button id="overlay-exit" closeoverlay="true" className="d-inline">
      X
    </button>
  </div>
);

const OverlayReservButton = (props) => (
  <div className="my-4">
    {props.showReservBtn ? (
      <Link
        closeoverlay="true"
        className="my-5"
        to={{
          pathname: `${props.startLink}/contacto`,
          state: {
            reservaText: "Reserva: " + props.name + " " + props.date,
          },
        }}
      >
        Reservar
      </Link>
    ) : null}
  </div>
);

const OverlayMediaButton = (props) =>
  props.albumLink ? (
    <a href={props.albumLink} target="_blank">
      <i className="fab fa-facebook-square mr-2 my-3"></i> Ver Album
    </a>
  ) : null;
