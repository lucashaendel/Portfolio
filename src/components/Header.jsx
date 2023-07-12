import React from "react";
import "../assets/styles/header.css";
import "../main";

const Header = () => {
  const cambiarClase = () => {
    let siteNav = document.getElementById("site-nav");
    siteNav.classList.toggle("site-nav-open");
    let menuOpen = document.getElementById("menu-toggle");
    menuOpen.classList.toggle("menu-open");
  };

  return (
    <header>
      <img src="https://i.ibb.co/ZxgRtPs/lh-logo.png" alt="lh-logo" />
      <nav id="site-nav" className="menu">
        <ul>
          <li Onclick={cambiarClase}>
            <a href="#home">Inicio</a>
          </li>
          <li onclick="cambiarClase()">
            <a href="#about-me">Sobre mi</a>
          </li>
          <li onclick="cambiarClase()">
            <a href="#skills">Skills</a>
          </li>
          <li onclick="cambiarClase()">
            <a href="#portfolio">Portfolio</a>
          </li>
        </ul>
      </nav>
      <div id="menu-toggle" class="menu-toggle" onclick="cambiarClase()">
        <div className="hamburger"></div>
      </div>
    </header>
  );
};

export default Header;
