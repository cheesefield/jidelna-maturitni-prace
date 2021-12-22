import React from "react";
import { Helmet } from "react-helmet";
import "../App.css";

function ONas() {
  return (
    <div className="App">
      <Helmet>
        <title>O nás - U Krvavého barona</title>
      </Helmet>
      <main>
        <h1>O nás</h1>
        <h2>České jídlo chutně a dobře</h2>
        <p>
          Jsme opavská jídelna, která se zaměřuje převážně na českou kuchyni,
          Váš nenasycený žaludek u nás naplníte svíčkovou omáčkou s domacími
          houskovýmí knedlíky, nebo například typicky českým knedlo, vepřo,
          zelo.
        </p>
        <h2>Proč u Krvavého barona?</h2>
        <p>
          Možná se ptáte proč se jmenujeme U Krvavého barona, je to proto, že
          každý rok, kolem Vánoc, u nás začína Harry Potter týden, všude jsou
          ozdoby s touhle temátikou, čísníci jsou převlečeni do různých postav,
          právě z již zmíněného Harryho Pottera a celý týden se to vede touhle
          tématikou.
        </p>
      </main>
    </div>
  );
}

export default ONas;
