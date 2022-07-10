import "../css/style.css";
import React from "react";

export default class Form extends React.Component {
  //state = { filas: 0, desde: 0, cantidad: 0, conAyudante: false };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit();
  };

  render() {
    return (
      <form className="form" onSubmit={this.onFormSubmit}>
        <h1 className="form__title">Parámetros</h1>
        <label htmlFor="number" className="form__label form__label--1">
          N° Filas
          <input
            type="number"
            className="form__input--numeric form__input--numeric--1"
            onChange={(e) => this.props.changeFilas(e.target.value)}
            value={this.props.filas}
            required
          />
          {this.props.formError.filasError ? (
            <p className="form__error form__error--1">
              {this.props.formError.filasError}
            </p>
          ) : null}
        </label>

        <label htmlFor="number" className="form__label form__label--2">
          Desde
          <input
            type="number"
            className="form__input--numeric form__input--numeric--2"
            onChange={(e) => this.props.changeDesde(e.target.value)}
            value={this.props.desde}
            required
          />
          {this.props.formError.desdeError ? (
            <p className="form__error form__error--2">
              {this.props.formError.desdeError}
            </p>
          ) : null}
        </label>
        <label
          htmlFor="number"
          className="form__label form__label--3form__label form__label--3"
        >
          Mostrar
          <input
            type="number"
            className="form__input--numeric form__input--numeric--3"
            onChange={(e) => this.props.changeCantidad(e.target.value)}
            value={this.props.cantidad}
            required
          />
          {this.props.formError.cantidadError ? (
            <p className="form__error form__error--3">
              {this.props.formError.cantidadError}
            </p>
          ) : null}
        </label>
        <label htmlFor="boolean" className="form__label form__label--4">
          Con Ayudante
          <input
            type="radio"
            className="form__input form__radio--1"
            onChange={(e) =>
              this.props.changeConAyudante(!this.props.conAyudante)
            }
          ></input>
        </label>

        <img
          src={require("../resources/paper.png")}
          alt="papel"
          className="form__icon form__icon--1"
          onClick={this.props.onEnunciadoClick}
        />

        <img
          src={require("../resources/pencil.png")}
          alt="papel"
          className="form__icon form__icon--2"
          onClick={this.props.onProbabilidadesClick}
        />

        <label htmlFor="submit" className="form__label form__label--5">
          <input type="submit" className="form__radio--2"></input>
        </label>
      </form>
    );
  }
}

// render() {
//   return (
//     <form className="form" onSubmit={this.onFormSubmit}>
//       <h1 className="form__title">Parámetros</h1>
//       <label htmlFor="number" className="form__label form__label--1">
//         N° Filas
//         <input
//           type="number"
//           className="form__input--numeric form__input--numeric--1"
//           onChange={(e) => this.setState({ filas: e.target.value })}
//           value={this.state.filas}
//           required
//         />
//       </label>
//       <label htmlFor="number" className="form__label form__label--2">
//         Desde
//         <input
//           type="number"
//           className="form__input--numeric form__input--numeric--2"
//           onChange={(e) => this.setState({ desde: e.target.value })}
//           value={this.state.desde}
//           required
//         />
//       </label>
//       <label
//         htmlFor="number"
//         className="form__label form__label--3form__label form__label--3"
//       >
//         Mostrar
//         <input
//           type="number"
//           className="form__input--numeric form__input--numeric--3"
//           onChange={(e) => this.setState({ cantidad: e.target.value })}
//           value={this.state.cantidad}
//           required
//         />
//       </label>
//       <label htmlFor="boolean" className="form__label form__label--4">
//         Con Ayudante
//         <input
//           type="radio"
//           className="form__input form__radio--1"
//           onChange={(e) => this.setState({ conAyudante: true })}
//         ></input>
//       </label>

//       <img
//         src={require("../resources/paper.png")}
//         alt="papel"
//         className="form__icon form__icon--1"
//         onClick={this.props.onEnunciadoClick}
//       />

//       <img
//         src={require("../resources/pencil.png")}
//         alt="papel"
//         className="form__icon form__icon--2"
//         onClick={this.props.onProbabilidadesClick}
//       />

//       <label htmlFor="submit" className="form__label form__label--5">
//         <input type="submit" className="form__radio--2"></input>
//       </label>
//     </form>
//   );
