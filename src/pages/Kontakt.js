import React from "react";
import { Helmet } from "react-helmet";
import { supabase } from "../client";
import { useState, useEffect } from "react";
import "../App.css";

function Kontakt() {
  const [nazor, setNazor] = useState({
    jmeno: "",
    prijmeni: "",
    email: "",
    obsah: "",
  });
  const [odber, setOdber] = useState({
    email_odber: "",
  });
  const { jmeno, prijmeni, email, obsah } = nazor;
  const { email_odber } = odber;
  async function createNazor() {
    await supabase
      .from("nazor")
      .insert([{ jmeno, prijmeni, email, obsah }])
      .single();
    setNazor({ jmeno: "", prijmeni: "", email: "", obsah: "" });
    toggleClass();
  }
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    isActive ? setActive(false) : setActive(true);
    console.log(toggleClass);
  };
  return (
    <div className="App">
      <Helmet>
        <title>Kontakt - U Krvavého barona</title>
      </Helmet>
      <main>
        <h1>Kde nás najdete?</h1>
        <p>
          Najdete nás na Vaškovo nám. 2052 hned vedle policejní stanice, také
          nás najdete na našem Facebooku, Instagramu nebo Twitteru, kde neustále
          přidáváme aktualní jídelní lístky, změny v otevirácí době a různé
          akce, které momentálně probíhají.
        </p>
        <div className="form">
          <h2>Váš názor</h2>
          <div className="row">
            <div className="col-25">
              <label for="jmeno">Jméno</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="jmeno"
                name="jmeno"
                placeholder="Jméno"
                value={jmeno}
                onChange={(e) => setNazor({ ...nazor, jmeno: e.target.value })}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="prijmeni">Příjmení</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="prijmeni"
                name="prijmeni"
                placeholder="Příjmení"
                value={prijmeni}
                onChange={(e) =>
                  setNazor({ ...nazor, prijmeni: e.target.value })
                }
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="email">Email</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setNazor({ ...nazor, email: e.target.value })}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="obsah">Obsah</label>
            </div>
            <div className="col-75">
              <textarea
                id="obsah"
                name="obsah"
                placeholder="Napište Nám"
                value={obsah}
                onChange={(e) => setNazor({ ...nazor, obsah: e.target.value })}
              ></textarea>
            </div>
          </div>
          <div className="button">
            <button onClick={createNazor}>Odeslat</button>
          </div>
          <div className="form">
            <h2>Odběr jídelních lístků</h2>
            <input
              type="text"
              id="email_odber"
              name="email_odber"
              placeholder="Zadejte mail:"
              value={email_odber}
              className="odber"
              onChange={(e) =>
                setOdber({ ...odber, email_odber: e.target.value })
              }
            />
            <div className="button">
              <button onClick={createOdber}>Přihlásit se k odběru</button>
            </div>
          </div>
          <div id="submit" className={isActive ? "active" : null}>
            <div className="text">
              <h2>Formulář byl odeslán, děkujeme.</h2>
              <button onClick={toggleClass}>Ok</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Kontakt;
