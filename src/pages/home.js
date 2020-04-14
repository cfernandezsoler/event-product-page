import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "../styles/home.scss";
import "../styles/libraries/carousel.min.css";
//BA-DISCO seria el nombre fictisio

export class Home extends Component {
  constructor() {
    super();

    this.state = { windowWidth: window.innerWidth }; // esto seria 700px
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
  }
  resize() {
    this.setState({
      windowWidth: window.innerWidth,
    });
  }

  render() {
    return (
      <div className="container text-center pb-2">
        <Carousel
          showArrows={this.state.windowWidth < 500 ? false : true}
          showThumbs={false}
          showStatus={false}
          useKeyboardArrows={true}
          infiniteLoop={this.state.windowWidth < 500 ? false : true}
          emulateTouch={this.state.windowWidth < 500 ? true : false}
          centerMode={this.state.windowWidth < 500 ? true : false}
          centerSlidePercentage={this.state.windowWidth < 500 ? 200 : 100}
        >
          <img src="./media/home/inicio-disco.jpg" />
          <img src="./media/home/cabina-dj.png" />
          <img src="./media/home/pista-publico.png" />
        </Carousel>

        <IntroText />

        <ItemList windowWidth={this.state.windowWidth}>
          <Item
            icon="fa-wine-bottle"
            desc="Tres barras distribuidas por todo el local"
          />
          <Item icon="fa-utensils" desc="Servicio de Catering" />
          <Item icon="fa-camera" desc="Fotografo" />
          <Item icon="fa-users" desc="Capacidad para 1500 personas" />
          <Item
            icon="fa-hand-holding-medical"
            desc="Servicio Medico Incluido"
          />
          <Item icon="fa-wheelchair" desc="Acceso Discapacitados" />
        </ItemList>

        <h3 className="m-3">¿Queres saber mas?</h3>
        <ContactoLink />
      </div>
    );
  }
}

const IntroText = () => (
  <div id="intro">
    <h1 id="title" className="my-3">
      Sala de Eventos y Espectaculos
    </h1>
    <p id="description" className="m-center">
      Ubicado en Av Juramento 2000, Barrio Belgrano CABA. Fue remodelado en su
      totalidad para ofrecerle a sus asistentes una locación única en su tipo,
      con una ubicación conveniente, sonido e iluminación de última tecnología y
      con una atención especializada en el buen trato a sus clientes.
      <br /> Fiel a nuestra línea artística, les ofrecemos una propuesta musical
      más que atractiva, permitiendo por su estructura modular la posibilidad de
      realizar su evento utilizando el salón completo a su disposicion. Contando
      con los beneficios que ofrece el establecimiento.
    </p>
  </div>
);

const Item = (props) => (
  <div className="item-container p-5">
    <i className={"fas " + props.icon + " mb-3 icon-gold"}></i>
    <h5>{props.desc}</h5>
  </div>
);

const ItemList = (props) =>
  props.windowWidth <= 777 ? (
    <Carousel
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      useKeyboardArrows={true}
    >
      {props.children}
    </Carousel>
  ) : (
    <div className="d-flex m-center justify-content-center flex-wrap itemlist">
      {props.children}
    </div>
  );

const ContactoLink = () => (
  <Link id="link-reserve" to="/contacto">
    Contactanos
  </Link>
);
