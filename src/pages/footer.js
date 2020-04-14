import React from "react";
import "../styles/footer.scss";

export const Footer = () => (
  <footer className="py-3 container">
    <div className="row">
      <Location />
      <Contact />
      <Social />
    </div>
    <Credits />
  </footer>
);

const Location = () => (
  <div id="location" className="col">
    <h2>BA Disco</h2>
    <p>Juramento 2000</p>
    <p>Buenos Aires, Argentina</p>
    <a
      href="https://www.google.com/maps/place/Juramento+2000,+Buenos+Aires/@-34.5598281,-58.4550281,17z"
      target="_blank"
    >
      <i className="fas fa-map-marker-alt mr-2"></i>
      Ver en Google Maps
    </a>
  </div>
);

const Contact = () => (
  <div id="contact" className="col">
    <p>Tel: 11 1111 1111</p>
    <p>
      Email: <a href="mailto:correo@correo.com">correo@correo.com</a>
    </p>
  </div>
);
const Credits = () => (
  <div>
    <p id="creditos" className="text-center mt-5">
      © 2019 | Sitio Web desarrollado por Cristian Fernandez
    </p>
    <a href="#" className="d-block text-center text-decoration-none">
      Volver arriba
    </a>
  </div>
);
const Social = () => (
  <div id="social" className="col">
    <a href="#">
      <i className="fab fa-facebook-square icon-gold"></i>
    </a>
    <a href="#">
      <i className="fab fa-twitter-square icon-gold"></i>
    </a>
    <a href="#">
      <i className="fab fa-instagram-square icon-gold"></i>
    </a>
  </div>
);
