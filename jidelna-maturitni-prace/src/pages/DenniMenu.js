import React from "react";
import { Helmet } from "react-helmet";
import "../App.css";

import Table from "../components/Table";

const list = [
  { id: 1, name: "Svíčková s šesti", price: "69,-" },
  { id: 2, name: "Svíčková s pěti", price: "269,-" },
  { id: 3, name: "Svíčková s jedním", price: "869,-" },
];

const colNames = ["Číslo", "Jídlo", "Cena"];

function DenniMenu() {
  return (
    <div className="App">
      <Helmet>
        <title>Denní menu - U Krvavého barona</title>
      </Helmet>
      <main>
        <h1>Denní menu</h1>
        <p>1. Svíčková omáčka s knedlíkem Cena: 105,-Kč</p>
        <p>2. Knedl, vepřo, zelo Cena: 100,-Kč</p>
        <p>3. Borůvkové knedlíky Cena: 70,-Kč</p>
        <p>4. Rajská omáčka s knedlíkem Cena: 115,-Kč</p>
        <p>5. Zeleninové rizoto Cena: 60,-Kč</p>
        <p>6. Špagety s boloňskou omáčkou Cena: 75,-Kč</p>
      </main>
    </div>
  );
}

export default DenniMenu;
