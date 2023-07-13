import React, { useEffect } from "react";
import "../assets/styles/skills.css";
import Aos from "aos";

const Skills = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div id="skills" data-aos="fade-down">
      <h2>Habilidades</h2>
      <div id="icons-skill" data-aos="fade-down">
        <div className="cardSkill" data-aos="fade-down">
          <figure class="icon-skill">
            <img
              src="https://img.icons8.com/color/480/000000/html-5--v1.png"
              alt="HTML-5"
            />
            <p>HTML 5</p>
          </figure>
          <figure class="icon-skill">
            <img
              src="https://img.icons8.com/color/480/000000/css3.png"
              alt="css-3"
            />
            <p>CSS 3</p>
          </figure>
          <figure class="icon-skill">
            <img src="https://img.icons8.com/color/512/sass.png" alt="Sass" />
            <p>Sass</p>
          </figure>
          <figure class="icon-skill">
            <img
              src="https://img.icons8.com/color/512/bootstrap.png"
              alt="bootstrap"
            />
            <p>Bootstrap</p>
          </figure>
          <figure class="icon-skill">
            <img
              src="https://img.icons8.com/?size=512&id=gFw7X5Tbl3ss&format=png"
              alt="Material-UI"
            />
            <p>Material Ui</p>
          </figure>
          <figure class="icon-skill">
            <img
              src="https://img.icons8.com/color/480/000000/javascript--v1.png"
              alt="Javascript"
            />
            <p>Javascript</p>
          </figure>
          <figure class="icon-skill">
            <img
              src="https://img.icons8.com/officel/512/react.png"
              alt="React"
            />
            <p>React</p>
          </figure>
          <figure class="icon-skill">
            <img
              src="https://img.icons8.com/?size=512&id=71257&format=png"
              alt="Angular"
            />
            <p>Angular</p>
          </figure>
          <figure class="icon-skill">
            <img
              src="https://img.icons8.com/?size=512&id=nCj4PvnCO0tZ&format=png"
              alt="Typescript"
            />
            <p>TypeScript</p>
          </figure>
        </div>
        <div className="cardSkill" data-aos="fade-down">
          <figure class="icon-skill">
            <img
              src="https://img.icons8.com/fluency/512/node-js.png"
              alt="Node"
            />
            <p>Node Js</p>
          </figure>
          <figure class="icon-skill">
            <img
              src="https://img.icons8.com/?size=512&id=WNoJgbzDr3i2&format=png"
              alt="Express"
            />
            <p>Express JS</p>
          </figure>
          <figure class="icon-skill">
            <img
              src="https://img.icons8.com/color/512/postgreesql.png"
              alt="PostgresSQL"
            />
            <p>Postgres SQL</p>
          </figure>
          <figure class="icon-skill">
            <img
              src="https://img.icons8.com/fluency/480/000000/mysql-logo.png"
              alt="MySQL"
            />
            <p>MySQL</p>
          </figure>
          <figure class="icon-skill">
            <img
              src="https://img.icons8.com/color/512/java-coffee-cup-logo.png"
              alt="Java"
            />
            <p>Java</p>
          </figure>
        </div>
        <div className="cardSkill" data-aos="fade-down">
          <figure class="icon-skill">
            <img
              src="https://img.icons8.com/color/480/000000/git.png"
              alt="Git"
            />
            <p>Git</p>
          </figure>
          <figure class="icon-skill">
            <img
              src="https://img.icons8.com/material-outlined/480/000000/github.png"
              alt="GitHub"
            />
            <p>GitHub</p>
          </figure>
          <figure class="icon-skill">
            <img
              src="https://img.icons8.com/fluency/480/000000/visual-studio-code-2019.png"
              alt="VSCode"
            />
            <p>V.S. Code</p>
          </figure>

          <figure class="icon-skill">
            <img
              src="http://img.icons8.com/color/480/000000/trello.png"
              alt="Trello"
            />
            <p>Trello</p>
          </figure>
          <figure class="icon-skill">
            <img
              src="https://img.icons8.com/color/480/000000/adobe-photoshop--v1.png"
              alt="Photoshop"
            />
            <p>Photoshop</p>
          </figure>

          <figure class="icon-skill">
            <img
              src="https://img.icons8.com/color/480/000000/adobe-illustrator--v1.png"
              alt="Illustrator"
            />
            <p>Illustrator</p>
          </figure>
          <figure class="icon-skill">
            <img src="https://img.icons8.com/color/512/figma.png" alt="Figma" />
            <p>Figma</p>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Skills;
