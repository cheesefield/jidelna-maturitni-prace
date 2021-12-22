import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// components
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// pages
import Domu from "./pages/Domu";
import DenniMenu from "./pages/DenniMenu";
import StalaNabidka from "./pages/StalaNabidka";
import ONas from "./pages/ONas";
import Kontakt from "./pages/Kontakt";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Domu />} />
          <Route path="/denni_menu" element={<DenniMenu />} />
          <Route path="/stala_nabidka" element={<StalaNabidka />} />
          <Route path="/o_nas" element={<ONas />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
