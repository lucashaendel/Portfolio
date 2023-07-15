import React from "react";
import "../assets/styles/header.css";
import "../main";

const Header = () => {
  const handleMenu = () => {
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
          <li onClick={handleMenu}>
            <a href="#home">Inicio</a>
          </li>
          <li onClick={handleMenu}>
            <a href="#about-me">Sobre mi</a>
          </li>
          <li onClick={handleMenu}>
            <a href="#skills">Skills</a>
          </li>
          <li onClick={handleMenu}>
            <a href="#portfolio">Portfolio</a>
          </li>
        </ul>
      </nav>
      <div id="menu-toggle" class="menu-toggle" onClick={handleMenu}>
        <div className="hamburger"></div>
        {/* <button onClick={handle}>asd</button> */}
      </div>
    </header>
  );
};

export default Header;
