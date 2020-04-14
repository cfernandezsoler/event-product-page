import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../styles/header.scss";
import { Overlay } from "./overlay.js";

export function Header() {
  const location = useLocation();

  return (
    <Navbar
      collapseOnSelect
      variant="dark"
      expand="lg"
      className="container shadow header-line py-md-3"
    >
      <Link to="/inicio" className="navbar-brand">
        <h3>BA-DISCO</h3>
      </Link>

      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <i className="fas fa-bars"></i>
      </Navbar.Toggle>

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="container justify-content-end">
          <HeaderLink
            id="inicio"
            path="/inicio"
            name="Inicio"
            classNormal="header-link"
            classActive="selected"
          />
          <HeaderLink
            id="nosotros"
            path="/nosotros"
            name="Nosotros"
            classNormal="header-link"
            classActive="selected"
          />
          <HeaderDropDown id="eventos" />
          <HeaderLink
            id="contacto"
            path="/contacto"
            name="Contacto"
            classNormal="header-link"
            classActive="selected"
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
const HeaderLink = (props) => (
  <NavLink
    className={
      location.pathname == props.path
        ? props.classNormal + " " + props.classActive
        : props.classNormal
    }
    to={props.path}
  >
    <h3>{props.name}</h3>
  </NavLink>
);

const HeaderDropDown = () => (
  <Overlay overlayButton={<OverlayButton />} overlayInfo={<OverlayInfo />} />
);

const OverlayButton = () => (
  <button
    className={
      location.pathname == "/eventos-proximos" ||
      location.pathname == "/eventos-anteriores"
        ? "evento-button selected"
        : "evento-button"
    }
  >
    <h3>
      Eventos
      <i className="fas fa-sort-down text-white ml-2"></i>
    </h3>
  </button>
);

const OverlayInfo = () => (
  <div className="overlay-menu">
    <HeaderLink
      id="eventos-proximos"
      path="/eventos-proximos"
      name="Proximos"
      classNormal="overlay-link"
      classActive="selected"
    />
    <div className="overlay-underline w-100"></div>
    <HeaderLink
      id="eventos-anteriores"
      path="/eventos-anteriores"
      name="Anteriores"
      classNormal="overlay-link"
      classActive="selected"
    />
  </div>
);
