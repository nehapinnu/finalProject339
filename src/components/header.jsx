import React from "react";
import "./header.css";
import "./drops.css";

function Header() {
  return (
    <header>
      <a href="home.html" className="logo">
        <img
          src="../../images/background/dino.png"
          alt="dino"
          className="logoImage"
        />
      </a>
      <ul className="nav">
        <li className="navBar">
          <a href="home.html" className="active">
            Home
          </a>
        </li>
        <li className="navBar">
          <a href="shopping.html" className="navColor">
            Shopping
          </a>
        </li>
        <li className="navBar">
          <a href="music.html" className="navColor">
            music
          </a>
        </li>
        {/* <li className="navBar">
          <div className="dropdown">
            <a href="music.html" className="navColor">
              <button className="dropbtn">
                Music
                <i className="fa fa-caret-down"></i>
              </button>
            </a>
            <div className="dropdown-content">
              <a href="taylor.html">Taylor Swift</a>
              <a href="selena.html">Selena Gomez</a>
              <a href="ariana.html">Ariana Grande</a>
              <a href="ellie.html">Ellie Goulding</a>
            </div>
          </div>
        </li> */}
      </ul>
      {/* </nav> */}
    </header>
  );
}

export default Header;
