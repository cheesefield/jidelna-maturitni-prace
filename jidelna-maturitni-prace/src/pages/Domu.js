import React from "react";
import { Helmet } from "react-helmet";
import "../App.css";

function Domu() {
  return (
    <div className="App">
      <Helmet>
        <title>U Krvavého barona</title>
      </Helmet>
      <main>
        <h2>Otevírací doba</h2>
        <p>Pondělí: 9-22</p>
        <p>Úterý: 9-22</p>
        <p>Středa: 9-22</p>
        <p>Čtvrtek: 9-22</p>
        <p>Pátek: 9-1</p>
        <p>Sobota: 9-1</p>
        <p>Neděle: 9-23</p>
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
