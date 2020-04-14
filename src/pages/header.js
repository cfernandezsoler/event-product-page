import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "../styles/header.scss";
import { Overlay } from "./overlay.js";

export const Header = (props) => (
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
          path={`${props.startLink}/`}
          name="Inicio"
          classNormal="header-link"
          classActive="selected"
          linkMatchItem={props.linkMatchItem}
        />
        <HeaderLink
          id="nosotros"
          path={`${props.startLink}/nosotros`}
          name="Nosotros"
          classNormal="header-link"
          classActive="selected"
          linkMatchItem={props.linkMatchItem}
        />
        <HeaderDropDown
          id="eventos"
          startLink={props.startLink}
          linkMatchItem={props.linkMatchItem}
        />
        <HeaderLink
          id="contacto"
          path={`${props.startLink}/contacto`}
          name="Contacto"
          classNormal="header-link"
          classActive="selected"
          linkMatchItem={props.linkMatchItem}
        />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const HeaderLink = (props) => (
  <NavLink
    className={
      props.linkMatchItem === props.id
        ? props.classNormal + " " + props.classActive
        : props.classNormal
    }
    to={props.path}
  >
    <h3>{props.name}</h3>
  </NavLink>
);

const HeaderDropDown = (props) => (
  <Overlay
    overlayButton={
      <OverlayButton linkMatchItem={props.linkMatchItem} id={props.id} />
    }
    overlayInfo={
      <OverlayInfo
        startLink={props.startLink}
        linkMatchItem={props.linkMatchItem}
      />
    }
  />
);

const OverlayButton = (props) => (
  <button
    className={
      props.linkMatchItem === "eventos-anteriores" ||
      props.linkMatchItem === "eventos-proximos"
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

const OverlayInfo = (props) => (
  <div className="overlay-menu">
    <HeaderLink
      id="eventos-proximos"
      path={`${props.startLink}/eventos-proximos`}
      name="Proximos"
      classNormal="overlay-link"
      classActive="selected"
      linkMatchItem={props.linkMatchItem}
    />
    <div className="overlay-underline w-100"></div>
    <HeaderLink
      id="eventos-anteriores"
      path={`${props.startLink}/eventos-anteriores`}
      name="Anteriores"
      classNormal="overlay-link"
      classActive="selected"
      linkMatchItem={props.linkMatchItem}
    />
  </div>
);
