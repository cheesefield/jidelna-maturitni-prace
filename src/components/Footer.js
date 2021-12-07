import React from "react";
import "../App.css";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLocationArrow,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { a } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer>
        <div className="kontakty">
          <div className="kontakt">
            <p>Adresa</p>
            <div className="icons">
              <FaLocationArrow />
            </div>
            <p>Vaškovo nám. 2052, 746 01 Opava</p>
          </div>
          <div className="kontakt">
            <p>Telefon</p>
            <div className="icons">
              <FaPhoneAlt />
            </div>
            <p>+420 696 969 666</p>
          </div>
          <div className="kontakt">
            <p>Email</p>
            <div className="icons">
              <FaEnvelope />
            </div>
            <p>ukb@gmail.com</p>
          </div>
        </div>
        <div className="social-media">
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <div className="icons">
              <FaTwitter />
            </div>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <div className="icons">
              <FaInstagram />
            </div>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <div className="icons">
              <FaFacebook />
            </div>
          </a>
        </div>
        <p>
          Designed by <b>CheeseField</b>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
