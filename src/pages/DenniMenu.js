import React from "react";
import { Helmet } from "react-helmet";
import Jidelnicek from "../data/denni_menu.json";
import "../App.css";

function DenniMenu() {
  return (
    <div className="App">
      <Helmet>
        <title>Denní menu - U Krvavého barona</title>
      </Helmet>
      <main>
        <h1>Denní menu</h1>
        <table>
          <thead>
            <tr>
              <th>Číslo</th>
              <th>Jídlo</th>
              <th>Cena</th>
            </tr>
          </thead>
          {Jidelnicek.map((jidloInfo, index) => {
            return (
              <tbody>
                <tr>
                  <th>{jidloInfo.id}</th>
                  <th>{jidloInfo.name}</th>
                  <th>{jidloInfo.price}</th>
                </tr>
              </tbody>
            );
          })}
        </table>
      </main>
    </div>
  );
}

export default DenniMenu;
