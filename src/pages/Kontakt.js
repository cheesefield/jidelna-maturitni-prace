import React from "react";
import { Helmet } from "react-helmet";
import "../App.css";

function Kontakt() {
  return (
    <div className="App">
      <Helmet>
        <title>Kontakt - U Krvavého barona</title>
      </Helmet>
      <main>
        <h1>Kde nás najdete?</h1>
        <p>
          Najdete nás na Vaškovo nám. 2052 hned vedle policejní stanice, také
          nás najdete na našem facebooku, instagramu nebo twitteru, kde neustále
          přidáváme aktualní jídelní lístky, změny v otevirácí době a různé
          akce, které momentálně probíhají.
        </p>
      </main>
    </div>
  );
}

export default Kontakt;
