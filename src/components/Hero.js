import "../css/style.css";
import Form from "./Form";
import React from "react";
import Probabilities from "./Probabilities";

export default class Hero extends React.Component {
  state = {
    displayEnunciado: false,
    displayProbabilidades: false,
    filas: 0,
    desde: 0,
    cantidad: 0,
    conAyudante: false,
    llegada: Math.round((60 / 28 + Number.EPSILON) * 1000000) / 1000000,
    atencion: 2,
    cambioLI: 3,
    cambioLS: 5,
    finTurno: 120,
    formMainErrors: {
      filasError: "",
      desdeError: "",
      cantidadError: "",
    },
    formProbabilities: {
      melError: "",
      meaError: "",
      cliError: "",
      clsError: "",
      finTurnoError: "",
    },
  };

  onEnunciadoClick = () => {
    this.setState({ displayEnunciado: !this.state.displayEnunciado });
  };

  onProbabilidadesClick = () => {
    this.setState({ displayProbabilidades: !this.state.displayProbabilidades });
  };

  onFormSubmit = () => {
    this.props.onSubmit(
      this.state.filas,
      this.state.desde,
      this.state.cantidad,
      this.state.conAyudante,
      this.state.llegada,
      this.state.atencion,
      this.state.cambioLI,
      this.state.cambioLS,
      this.state.finTurno
    );
  };

  changeFilas = (nuevoFilas) => {
    if (nuevoFilas < 0) {
      this.setState({
        formMainErrors: {
          filasError: "La cantidad de filas no puede ser negativa",
          desdeError: this.state.formMainErrors.desdeError,
          cantidadError: this.state.formMainErrors.cantidadError,
        },
      });
    } else {
      this.setState({
        formMainErrors: {
          filasError: "",
          desdeError: this.state.formMainErrors.desdeError,
          cantidadError: this.state.formMainErrors.cantidadError,
        },
      });
    }

    this.setState({ filas: nuevoFilas });
  };

  changeDesde = (nuevoDesde) => {
    if (+nuevoDesde < 0) {
      this.setState({
        formMainErrors: {
          filasError: this.state.formMainErrors.filasError,
          desdeError: "No puede ser negativo",
          cantidadError: this.state.formMainErrors.cantidadError,
        },
      });
    } else if (parseFloat(nuevoDesde) > parseFloat(this.state.filas)) {
      this.setState({
        formMainErrors: {
          filasError: this.state.formMainErrors.filasError,
          desdeError: "No puede ser mayor a la cantidad de filas",
          cantidadError: this.state.formMainErrors.cantidadError,
        },
      });
    } else {
      this.setState({
        formMainErrors: {
          filasError: this.state.formMainErrors.filasError,
          desdeError: "",
          cantidadError: this.state.formMainErrors.cantidadError,
        },
      });
    }

    this.setState({ desde: nuevoDesde });
  };

  changeCantidad = (nuevoCantidad) => {
    if (nuevoCantidad < 0) {
      this.setState({
        formMainErrors: {
          filasError: this.state.formMainErrors.filasError,
          desdeError: this.state.formMainErrors.desdeError,
          cantidadError: "No puede ser negativo",
        },
      });
    } else if (
      parseFloat(nuevoCantidad) >
      parseFloat(this.state.filas) - parseFloat(this.state.desde)
    ) {
      this.setState({
        formMainErrors: {
          filasError: this.state.formMainErrors.filasError,
          desdeError: this.state.formMainErrors.desdeError,
          cantidadError:
            "No puede ser mayor que la cantidad de filas disponibles",
        },
      });
    } else {
      this.setState({
        formMainErrors: {
          filasError: this.state.formMainErrors.filasError,
          desdeError: this.state.formMainErrors.desdeError,
          cantidadError: "",
        },
      });
    }
    this.setState({ cantidad: nuevoCantidad });
  };

  changeConAyudante = (nuevoConAyudante) => {
    this.setState({ conAyudante: nuevoConAyudante });
  };

  changeLlegada = (nuevoLlegada) => {
    if (nuevoLlegada <= 0) {
      this.setState({
        formProbabilities: {
          melError: "Debe ser mayor a cero",
          meaError: this.state.formProbabilities.meaError,
          cliError: this.state.formProbabilities.cliError,
          clsError: this.state.formProbabilities.clsError,
          finTurnoError: this.state.formProbabilities.finTurnoError,
        },
      });
    } else {
      this.setState({
        formProbabilities: {
          melError: "",
          meaError: this.state.formProbabilities.meaError,
          cliError: this.state.formProbabilities.cliError,
          clsError: this.state.formProbabilities.clsError,
          finTurnoError: this.state.formProbabilities.finTurnoError,
        },
      });
    }

    this.setState({ llegada: nuevoLlegada });
  };

  changeAtencion = (nuevoAtencion) => {
    if (nuevoAtencion <= 0) {
      this.setState({
        formProbabilities: {
          melError: this.state.formProbabilities.melError,
          meaError: "Debe ser mayor a cero",
          cliError: this.state.formProbabilities.cliError,
          clsError: this.state.formProbabilities.clsError,
          finTurnoError: this.state.formProbabilities.finTurnoError,
        },
      });
    } else {
      this.setState({
        formProbabilities: {
          melError: this.state.formProbabilities.melError,
          meaError: "",
          cliError: this.state.formProbabilities.cliError,
          clsError: this.state.formProbabilities.clsError,
          finTurnoError: this.state.formProbabilities.finTurnoError,
        },
      });
    }

    this.setState({ atencion: nuevoAtencion });
  };

  changeCambioLI = (nuevoCambioLI) => {
    if (nuevoCambioLI < 0) {
      this.setState({
        formProbabilities: {
          melError: this.state.formProbabilities.melError,
          meaError: this.state.formProbabilities.meaError,
          cliError: "No puede ser negativo",
          clsError: this.state.formProbabilities.clsError,
          finTurnoError: this.state.formProbabilities.finTurnoError,
        },
      });
    } else if (nuevoCambioLI > this.state.cambioLS) {
      this.setState({
        formProbabilities: {
          melError: this.state.formProbabilities.melError,
          meaError: this.state.formProbabilities.meaError,
          cliError: "No puede ser mayor al limite superior",
          clsError: this.state.formProbabilities.clsError,
          finTurnoError: this.state.formProbabilities.finTurnoError,
        },
      });
    } else {
      this.setState({
        formProbabilities: {
          melError: this.state.formProbabilities.melError,
          meaError: this.state.formProbabilities.meaError,
          cliError: "",
          clsError: this.state.formProbabilities.clsError,
          finTurnoError: this.state.formProbabilities.finTurnoError,
        },
      });
    }
    this.setState({ cambioLI: nuevoCambioLI });
  };

  changeCambioLS = (nuevoCambioLS) => {
    if (nuevoCambioLS < 0) {
      this.setState({
        formProbabilities: {
          melError: this.state.formProbabilities.melError,
          meaError: this.state.formProbabilities.meaError,
          cliError: this.state.formProbabilities.cliError,
          clsError: "No puede ser negativo",
          finTurnoError: this.state.formProbabilities.finTurnoError,
        },
      });
    } else if (nuevoCambioLS < this.state.cambioLI) {
      this.setState({
        formProbabilities: {
          melError: this.state.formProbabilities.melError,
          meaError: this.state.formProbabilities.meaError,
          cliError: this.state.formProbabilities.cliError,
          clsError: "No puede ser menor al limite inferior",
          finTurnoError: this.state.formProbabilities.finTurnoError,
        },
      });
    } else {
      this.setState({
        formProbabilities: {
          melError: this.state.formProbabilities.melError,
          meaError: this.state.formProbabilities.meaError,
          cliError: this.state.formProbabilities.cliError,
          clsError: "",
          finTurnoError: this.state.formProbabilities.finTurnoError,
        },
      });
    }
    this.setState({ cambioLS: nuevoCambioLS });
  };

  changeFinTurno = (nuevoFinTurno) => {
    if (nuevoFinTurno <= 0) {
      this.setState({
        formProbabilities: {
          melError: this.state.formProbabilities.melError,
          meaError: this.state.formProbabilities.meaError,
          cliError: this.state.formProbabilities.cliError,
          clsError: this.state.formProbabilities.clsError,
          finTurnoError: "Debe ser mayor a cero",
        },
      });
    } else {
      this.setState({
        formProbabilities: {
          melError: this.state.formProbabilities.melError,
          meaError: this.state.formProbabilities.meaError,
          cliError: this.state.formProbabilities.cliError,
          clsError: this.state.formProbabilities.clsError,
          finTurnoError: "",
        },
      });
    }
    this.setState({ finTurno: nuevoFinTurno });
  };

  render() {
    return (
      <div className="hero">
        <div className="hero__form">
          <Form
            onFormSubmit={this.onFormSubmit}
            onEnunciadoClick={this.onEnunciadoClick}
            onProbabilidadesClick={this.onProbabilidadesClick}
            filas={this.state.filas}
            changeFilas={this.changeFilas}
            desde={this.state.desde}
            changeDesde={this.changeDesde}
            cantidad={this.state.cantidad}
            changeCantidad={this.changeCantidad}
            conAyudante={this.state.conAyudante}
            changeConAyudante={this.changeConAyudante}
            formError={this.state.formMainErrors}
          />
        </div>

        {this.state.displayProbabilidades ? (
          <div className="hero__probabilities">
            <Probabilities
              llegada={this.state.llegada}
              changeLlegada={this.changeLlegada}
              atencion={this.state.atencion}
              changeAtencion={this.changeAtencion}
              cambioLI={this.state.cambioLI}
              changeCambioLI={this.changeCambioLI}
              cambioLS={this.state.cambioLS}
              changeCambioLS={this.changeCambioLS}
              finTurno={this.state.finTurno}
              changeFinTurno={this.changeFinTurno}
              formError={this.state.formProbabilities}
            />
          </div>
        ) : null}

        {this.state.displayEnunciado ? (
          <div className="hero__texto">
            <p className="hero__texto--1">
              Un restaurante espcializado en comidas rapidas tiene una
              ventanilla desde la cual atienden a los clientes en su vehiculo.
              Llegan en promedio 28 clientes por hora. Se requieren 2 minutos en
              promedio para atender a un cliente. Los tiempo de llegada y
              atencion son Exponenciales. Cada 2 horas se cambia el empleado que
              atiende la ventanilla, se tarda el proceso de cambio de 3 a 5
              minutos uniformemente distribuidos. ¿Cuál es la Cola Máxima? ¿Cuál
              es el promedio de espera de los clientes? Si decidieramos colocar
              un ayudante que acelere el tiempo de atencion bajando los 2
              minutos a 1 minuto 25 segundos, ¿Cómo mejora el sistema?,
              ¿Seguimos teniendo cola?
            </p>
          </div>
        ) : null}
      </div>
    );
  }
}
