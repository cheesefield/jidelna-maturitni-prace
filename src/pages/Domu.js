import React from "react";
import { Helmet } from "react-helmet";
import OteviraciDoba from "../data/oteviraci_doba.json";
import "../App.css";

function Domu() {
  return (
    <div className="App">
      <Helmet>
        <title>U Krvavého barona</title>
      </Helmet>
      <main>
        <h2>Otevírací doba</h2>
        <table>
          <thead>
            <tr>
              <th>Den</th>
              <th>Čas</th>
            </tr>
          </thead>
          {OteviraciDoba.map((otevreno, index) => {
            return (
              <tbody>
                <tr>
                  <th>{otevreno.day}</th>
                  <th>{otevreno.time}</th>
                </tr>
              </tbody>
            );
          })}
        </table>
        <h2>Rozvoz jídel</h2>
        <p>
          Pokud si chcete objednat jídlo z pohodlí Vašeho domova, zavolejte na
          telefonní číslo +420 696 969 666 a nahlaste čísla jídel. Rozvoz po
          Opavě je nad 100,-Kč zdarma a pokud maté jídlo za méně nebo jste z
          okolí Opavy, tak je doprava 50,-Kč.
        </p>
      </main>
    </div>
  );
}

export default Domu;
