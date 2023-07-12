import React, { useEffect, useState } from "react";
import "../assets/styles/home.css";
// import "../main";
import Typewriter from "typewriter-effect";
const Home = () => {
  const asd = new Typewriter("#typewriter", {
    strings: ["Hello", "World"],
    autoStart: true,
  });
  return (
    <div id="home">
      <div className="info">
        <div className="presents">
          <p>¡Hola! Bienvenid@ a mi web.</p>
          <h1>Lucas Haendel</h1>
          <div className="maq">
            <Typewriter
              options={{
                strings: [
                  "<h2>Full Stack Developer</h2>",
                  "<h2>Frontend Developer</h2>",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          {/* <h2>{asd}</h2> */}
          <div className="icons">
            <a
              className="icon"
              href="https://www.facebook.com/Lucas.p.haendel/"
              target="_blank"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
            <a
              className="icon"
              href="https://www.linkedin.com/in/lucashaendel/"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="icon"
              href="https://github.com/lucashaendel"
              target="_blank"
            >
              <i className="fab fa-github-square"></i>
            </a>
            <a className="icon" href="mailto:lucas.ph@live.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="img-lucas">
        <img src="https://i.ibb.co/7bP7H0v/lucas.png" alt="lucas" />
      </div>
      <div className="custom-shape-divider-bottom-1642030938">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Home;
