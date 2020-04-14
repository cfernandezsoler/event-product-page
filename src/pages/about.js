import React from "react";
import "../styles/about.scss";
import "../styles/libraries/carousel.min.css";

export const About = () => (
  <div className="container justify-content-center">
    <Description />
  </div>
);

const Description = () => (
  <div className="text-center">
    <h1 id="title" className="text-center my-2">
      Acerca de Nosotros
    </h1>
    <p className="m-center nosotros-texto">
      BA-Disco, es un nuevo multiespacio ubicado en el corazón de Belgrano. Con
      tres barras, tres sectores VIP's con mesas y confortables sillones, donde
      se brinda una exclusiva atención personalizada durante toda la noche.
    </p>
    <img
      className="img-fluid myimage my-3 mr-1"
      src="./media/about/barra.png"
    ></img>
    <img className="img-fluid myimage my-3" src="./media/about/vip.png"></img>
    <p className="m-center nosotros-texto">
      En su pista posee sonido e iluminación de ultima generación, ambiente
      climatizado y decoración minimalista. Seguridad interna, salidas de
      emergencia perfectamente señalizadas. Ademas posee, una gastronomía que
      ofrece una variedad de platos elaborados con productos de excelentísima
      calidad.
    </p>
    <img className="img-fluid myimage my-3" src="./media/about/pista.png"></img>
    <p className="m-center nosotros-texto">
      Gracias a su estructura permite la realización de eventos privados en
      cualquier día de la semana. <br />
      Los fines de semana se ofrece una propuesta ideal como disco de cachengue
      para mayores de 25 años los Viernes y Sabados.
    </p>
    <img
      className="img-fluid myimage my-3"
      src="./media/about/pista-barra.png"
    ></img>
  </div>
);
