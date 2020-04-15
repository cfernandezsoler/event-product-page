import React, { Component } from "react";
import "../styles/contact.scss";

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", tel: "", email: "" };
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  checkTel = (e) => {
    if (!this.state.tel.match(/\d{7,13}/))
      e.target.setCustomValidity(
        "Ingrese un numero de telefono valido, sin espacios ni simbolos."
      );
    else e.target.setCustomValidity("");
  };

  render() {
    const reserva = this.props.location.state
      ? this.props.location.state.reservaText
      : "";

    return (
      <div className="container text-center">
        <h1 className="my-2">Contacto</h1>
        <h3>
          Completa el siguiente formulario y nos pondremos en contacto con vos
        </h3>

        <form>
          <input
            id="name"
            type="text"
            placeholder="Nombre"
            autoFocus
            required
          ></input>
          <input
            id="tel"
            type="tel"
            placeholder="Teléfono"
            onChange={this.handleChange}
            pattern="\d{8,13}"
            onInput={this.checkTest}
            required
          ></input>
          <input id="email" type="email" placeholder="Email" required></input>
          <input
            type="text"
            placeholder="Asunto"
            defaultValue={reserva}
            required
          ></input>
          <textarea
            id="mensaje"
            type="text"
            placeholder="Mensaje"
            required
          ></textarea>

          <button onClick={this.checkText}>Enviar</button>
        </form>
      </div>
    );
  }
}
