import React, { useEffect } from "react";
import "../assets/styles/aboutMe.css";
import pdf from "../assets/cv/LucasHaendel.pdf";
import Aos from "aos";
const AboutMe = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div id="about-me" data-aos="fade-down">
      <article class="text animado" data-aos="fade-down">
        <h2>¿Quién soy?</h2>
        <p>
          🧒 Soy un apasionado por la tecnología. una persona dinamica,
          proactiva, autodidacta y creativa. Me gusta investigar, resolver
          problemas y trabajar en equipo.
        </p>
        <p>
          Al darme cuenta que en la tecnología podía desarrollar mis
          habilidades, decidí que es a lo que quiero dedicarme.
        </p>
      </article>

      <article class="text animado" data-aos="fade-down">
        <h3>Sobre mi</h3>
        <p>🇦🇷 Soy Argentino, Vivo en Buenos Aires.</p>
        <p>🎓 Estoy cursando la carrera de Analista de Sistemas en IFTS N.16</p>
        <p>💻 Realice el Bootcamp en Plataforma 5 con el stack PERN | SCRUM.</p>
        <p>💻Realice el curso de Angular en Coderhouse</p>
        <p>
          💪Me motiva estar en permanente evolución y capacitarme en nuevas
          tecnologías.
        </p>

        <p>
          Tengo gran interés en desarrollar mis habilidades en un entorno
          laboral. Que me brinde la posibilidad de generar nuevas experiencias y
          conocimientos.
        </p>

        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          download="Lucas Haendel - Desarrollador.pdf"
          data-aos="fade-down"
        >
          <button class="button type3">Descargar CV</button>
        </a>
      </article>
    </div>
  );
};

export default AboutMe;
