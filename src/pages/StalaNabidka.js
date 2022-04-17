import React from "react";
import { Helmet } from "react-helmet";
import "../App.css";

function StalaNabidka() {
  return (
    <div className="App">
      <Helmet>
        <title>Stálá nabídka - U Krvavého barona</title>
      </Helmet>
      <main>
        <h1>Stálá nabídka</h1>
        <div id="images">
          <div class="container">
            <img
              src="/images/knedlo_vepro_zelo.jpg"
              alt="Knedlo, vepřo, zelo"
            />
            <div class="details">
              <h3>Knedlo, vepřo, zelo</h3>
            </div>
          </div>
          <div class="container">
            <img
              src="/images/plnene_bramborove_knedliky_s_uzenym_masem.jpg"
              alt="Plněné bramborové knedlíky s uzeným masem"
            />
            <div class="details">
              <h3>Plněné bramborové knedlíky s uzeným masem</h3>
            </div>
          </div>
          <div class="container">
            <img src="/images/spagety_carbonara.jpg" alt="Špagety Carbonara" />
            <div class="details">
              <h3>Špagety Carbonara</h3>
            </div>
          </div>
          <div class="container">
            <img src="/images/spanelsky_ptacek.jpg" alt="Španělský ptáček" />
            <div class="details">
              <h3>Španělský ptáček</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default StalaNabidka;
