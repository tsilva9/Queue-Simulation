import "../css/style.css";
import React from "react";

export default class Grid extends React.Component {
  state = { tabla: this.props.tabla };

  render() {
    return (
      <div className="grid">
        <table
          className="grid__table"
          cellPadding="0"
          cellSpacing="0"
          border="0"
        >
          <thead>
            <tr className="table__row table__row--head">
              <th className="grid__column">Evento</th>
              <th className="grid__column">Reloj (min)</th>
              <th className="grid__column">RND Llegada</th>
              <th className="grid__column">Tiempo entre Llegadas</th>
              <th className="grid__column">Proxima Llegada</th>
              <th className="grid__column">RND Atencion</th>
              <th className="grid__column">Tiempo Atencion</th>
              <th className="grid__column">Fin Atencion</th>
              <th className="grid__column">Cola Atencion</th>
              <th className="grid__column">Empleado</th>
              <th className="grid__column">Proximo Fin Turno</th>
              <th className="grid__column">RND Cambio</th>
              <th className="grid__column">Tiempo Cambio</th>
              <th className="grid__column">Fin Cambio</th>
              <th className="grid__column">Tiempo Atencion Restante</th>
              <th className="grid__column">Cola Maxima</th>
              <th className="grid__column">Clientes Atendidos</th>
              <th className="grid__column">AC Tiempo Espera</th>
              <th className="grid__column">Tiempo Espera Promedio</th>
              {console.log(this.state.tabla.clientes)}
              {this.state.tabla.slice(-1)[0].clientes.map((cliente) => {
                return (
                  <th className="grid__column" key={cliente.id}>
                    Cliente {cliente.id}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="grid__body">
            {this.state.tabla.map((fila) => {
              return (
                <tr className="table__row table__row--head" key={fila.id}>
                  <th className="grid__row">{fila.evento.nombre}</th>
                  <th className="grid__row">
                    {Math.round((fila.reloj + Number.EPSILON) * 1000) / 1000}
                  </th>
                  <th className="grid__row">
                    {Math.round((fila.rndLlegada + Number.EPSILON) * 1000) /
                      1000}
                  </th>
                  <th className="grid__row">
                    {Math.round(
                      (fila.tiempoEntreLlegadas + Number.EPSILON) * 1000
                    ) / 1000}
                  </th>
                  <th className="grid__row">
                    {Math.round((fila.proximaLlegada + Number.EPSILON) * 1000) /
                      1000}
                  </th>
                  <th className="grid__row">
                    {Math.round((fila.rndAtencion + Number.EPSILON) * 1000) /
                      1000}
                  </th>
                  <th className="grid__row">
                    {Math.round((fila.tiempoAtencion + Number.EPSILON) * 1000) /
                      1000}
                  </th>
                  <th className="grid__row">
                    {Math.round((fila.finAtencion + Number.EPSILON) * 1000) /
                      1000}
                  </th>
                  <th className="grid__row">{fila.colaAtencion.length}</th>
                  <th className="grid__row">{fila.empleado.estado.nombre}</th>
                  <th className="grid__row">{fila.proximoFinTurno}</th>
                  <th className="grid__row">
                    {Math.round((fila.rndCambio + Number.EPSILON) * 1000) /
                      1000}
                  </th>
                  <th className="grid__row">
                    {Math.round((fila.tiempoCambio + Number.EPSILON) * 1000) /
                      1000}
                  </th>
                  <th className="grid__row">
                    {Math.round((fila.finCambio + Number.EPSILON) * 1000) /
                      1000}
                  </th>
                  <th className="grid__row">
                    {Math.round(
                      (fila.tiempoAtencionRestante + Number.EPSILON) * 1000
                    ) / 1000}
                  </th>
                  <th className="grid__row">{fila.colaMaxima}</th>
                  <th className="grid__row">{fila.clientesAtendidos}</th>
                  <th className="grid__row">
                    {Math.round((fila.acTiempoEspera + Number.EPSILON) * 1000) /
                      1000}
                  </th>
                  <th className="grid__row">
                    {Math.round(
                      (fila.tiempoEsperaPromedio + Number.EPSILON) * 1000
                    ) / 1000}
                  </th>
                  {fila.clientes.map((cliente) => {
                    return (
                      <th className="grid__row">{cliente.estado.nombre}</th>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
