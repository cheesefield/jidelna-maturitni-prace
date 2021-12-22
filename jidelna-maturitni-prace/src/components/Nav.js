import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

function Nav() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => {
    setClick(false);
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <nav>
        <div className="logo">
          <NavLink to="/" onClick={closeMobileMenu}>
            <img src="/images/logo.png" alt="logo" />
          </NavLink>
        </div>
        <ul className={click ? "navbar active" : "navbar"}>
          <li>
            <NavLink
              exact
              to="/denni_menu"
              activeClassName="active"
              onClick={closeMobileMenu}
            >
              Denní menu
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/stala_nabidka"
              activeClassName="active"
              onClick={closeMobileMenu}
            >
              Stálá nabídka
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/o_nas"
              activeClassName="active"
              onClick={closeMobileMenu}
            >
              O nás
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/kontakt"
              activeClassName="active"
              onClick={closeMobileMenu}
            >
              Kontakt
            </NavLink>
          </li>
        </ul>
        <div
          onClick={handleClick}
          className={click ? "menu-btn open" : "menu-btn"}
        >
          <div className="menu-btn__burger"></div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
