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
        <Table list={list} colNames={colNames} />
      </main>
    </div>
  );
}

export default DenniMenu;
