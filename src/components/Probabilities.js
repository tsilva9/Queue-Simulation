import "../css/style.css";
import React from "react";

export default class Probabilities extends React.Component {
  render() {
    return (
      <form className="probabilities" onSubmit={this.onFormSubmit}>
        <h1 className="probabilities__title">Probabilidades</h1>
        <label
          htmlFor="number"
          className="probabilities__label probabilities__label--1"
        >
          ME Llegada
          <input
            type="number"
            className="probabilities__input--numeric probabilities__input--numeric--1"
            onChange={(e) => this.props.changeLlegada(e.target.value)}
            value={this.props.llegada}
            required
          />
          {this.props.formError.melError ? (
            <p className="probabilities__error probabilities__error--1">
              {this.props.formError.melError}
            </p>
          ) : null}
        </label>
        <label
          htmlFor="number"
          className="probabilities__label probabilities__label--2"
        >
          ME Atención
          <input
            type="number"
            className="probabilities__input--numeric probabilities__input--numeric--2"
            onChange={(e) => this.props.changeAtencion(e.target.value)}
            value={this.props.atencion}
            required
          />
          {this.props.formError.meaError ? (
            <p className="probabilities__error probabilities__error--2">
              {this.props.formError.meaError}
            </p>
          ) : null}
        </label>
        <label
          htmlFor="number"
          className="probabilities__label probabilities__label--3"
        >
          Fin Cambio LI
          <input
            type="number"
            className="probabilities__input--numeric probabilities__input--numeric--3"
            onChange={(e) => this.props.changeCambioLI(e.target.value)}
            value={this.props.cambioLI}
            required
          />
          {this.props.formError.cliError ? (
            <p className="probabilities__error probabilities__error--3">
              {this.props.formError.cliError}
            </p>
          ) : null}
        </label>

        <label
          htmlFor="number"
          className="probabilities__label probabilities__label--4"
        >
          Fin Cambio LS
          <input
            type="number"
            className="probabilities__input--numeric probabilities__input--numeric--4"
            onChange={(e) => this.props.changeCambioLS(e.target.value)}
            value={this.props.cambioLS}
            required
          />
          {this.props.formError.clsError ? (
            <p className="probabilities__error probabilities__error--4">
              {this.props.formError.clsError}
            </p>
          ) : null}
        </label>

        <label
          htmlFor="number"
          className="probabilities__label probabilities__label--5"
        >
          Fin turno (Minutos)
          <input
            type="number"
            className="probabilities__input--numeric probabilities__input--numeric--5"
            onChange={(e) => this.props.changeFinTurno(e.target.value)}
            value={this.props.finTurno}
            required
          />
          {this.props.formError.finTurnoError ? (
            <p className="probabilities__error probabilities__error--5">
              {this.props.formError.finTurnoError}
            </p>
          ) : null}
        </label>
      </form>
    );
  }
}

// return (
//   <form className="probabilities" onSubmit={this.onFormSubmit}>
//     <h1 className="probabilities__title">Probabilidades</h1>
//     <label
//       htmlFor="number"
//       className="probabilities__label probabilities__label--1"
//     >
//       ME Llegada
//       <input
//         type="number"
//         className="probabilities__input--numeric probabilities__input--numeric--1"
//         onChange={(e) => this.setState({ llegada: e.target.value })}
//         value={this.state.llegada}
//         required
//       />
//     </label>
//     <label
//       htmlFor="number"
//       className="probabilities__label probabilities__label--2"
//     >
//       ME Atención
//       <input
//         type="number"
//         className="probabilities__input--numeric probabilities__input--numeric--2"
//         onChange={(e) => this.setState({ atencion: e.target.value })}
//         value={this.state.atencion}
//         required
//       />
//     </label>
//     <label
//       htmlFor="number"
//       className="probabilities__label probabilities__label--3"
//     >
//       Fin Cambio LI
//       <input
//         type="number"
//         className="probabilities__input--numeric probabilities__input--numeric--3"
//         onChange={(e) => this.setState({ cambioLI: e.target.value })}
//         value={this.state.cambioLI}
//         required
//       />
//     </label>

//     <label
//       htmlFor="number"
//       className="probabilities__label probabilities__label--4"
//     >
//       Fin Cambio LS
//       <input
//         type="number"
//         className="probabilities__input--numeric probabilities__input--numeric--4"
//         onChange={(e) => this.setState({ cambioLI: e.target.value })}
//         value={this.state.cambioLS}
//         required
//       />
//     </label>

//     <label
//       htmlFor="number"
//       className="probabilities__label probabilities__label--5"
//     >
//       Fin turno (Minutos)
//       <input
//         type="number"
//         className="probabilities__input--numeric probabilities__input--numeric--5"
//         onChange={(e) => this.setState({ finTurno: e.target.value })}
//         value={this.state.finTurno}
//         required
//       />
//     </label>
//   </form>
// );
