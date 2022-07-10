import Hero from "./Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Grid from "./Grid";
import simular from "../services/simular";

export default class App extends React.Component {
  state = {
    redirect: false,
    error: false,
    tabla: [],
  };
  // 725 lineas de JavaScript!
  // 724 lineas de Java!
  // 380 lineas de CSS

  onFormSubmit = async (
    filas,
    desde,
    cantidad,
    conAyudante,
    llegada,
    atencion,
    cambioLI,
    cambioLS,
    finTurno
  ) => {
    const response = await simular.get(
      `/${filas}/${desde}/${cantidad}/${conAyudante}/${llegada}/${atencion}/${cambioLI}/${cambioLS}/${finTurno}`
    );
    this.setState({ tabla: response.data, redirect: true });
  };

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              this.state.redirect ? (
                <Grid tabla={this.state.tabla} />
              ) : (
                <Hero onSubmit={this.onFormSubmit} />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
