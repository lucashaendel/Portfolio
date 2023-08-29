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
            <svg
              aria-label="Next.js logotype"
              height="18"
              role="img"
              viewBox="0 0 394 79"
            >
              <path
                d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z"
                fill="var(--geist-foreground)"
              ></path>
              <path
                d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330722H149.052Z"
                fill="var(--geist-foreground)"
              ></path>
              <path
                d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z"
                fill="var(--geist-foreground)"
              ></path>
              <path
                d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z"
                fill="var(--geist-foreground)"
              ></path>
              <path
                clip-rule="evenodd"
                d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z"
                fill="var(--geist-foreground)"
                fill-rule="evenodd"
              ></path>
              <path
                d="M333.607 78.8546C332.61 78.8546 331.762 78.5093 331.052 77.8186C330.342 77.1279 329.991 76.2917 330 75.3011C329.991 74.3377 330.342 73.5106 331.052 72.8199C331.762 72.1292 332.61 71.7838 333.607 71.7838C334.566 71.7838 335.405 72.1292 336.115 72.8199C336.835 73.5106 337.194 74.3377 337.204 75.3011C337.194 75.9554 337.028 76.5552 336.696 77.0914C336.355 77.6368 335.922 78.064 335.377 78.373C334.842 78.6911 334.252 78.8546 333.607 78.8546Z"
                fill="var(--geist-foreground)"
              ></path>
              <path
                d="M356.84 45.4453H362.872V68.6846C362.863 70.8204 362.401 72.6472 361.498 74.1832C360.585 75.7191 359.321 76.8914 357.698 77.7185C356.084 78.5364 354.193 78.9546 352.044 78.9546C350.079 78.9546 348.318 78.6001 346.75 77.9094C345.182 77.2187 343.937 76.1826 343.024 74.8193C342.101 73.456 341.649 71.7565 341.649 69.7207H347.691C347.7 70.6114 347.903 71.3838 348.29 72.0291C348.677 72.6744 349.212 73.1651 349.895 73.5105C350.586 73.8559 351.38 74.0286 352.274 74.0286C353.243 74.0286 354.073 73.8286 354.746 73.4196C355.419 73.0197 355.936 72.4199 356.296 71.6201C356.646 70.8295 356.831 69.8479 356.84 68.6846V45.4453Z"
                fill="var(--geist-foreground)"
              ></path>
              <path
                d="M387.691 54.5338C387.544 53.1251 386.898 52.0254 385.773 51.2438C384.638 50.4531 383.172 50.0623 381.373 50.0623C380.11 50.0623 379.022 50.2532 378.118 50.6258C377.214 51.0075 376.513 51.5164 376.033 52.1617C375.554 52.807 375.314 53.5432 375.295 54.3703C375.295 55.061 375.461 55.6608 375.784 56.1607C376.107 56.6696 376.54 57.0968 377.103 57.4422C377.656 57.7966 378.274 58.0874 378.948 58.3237C379.63 58.56 380.313 58.76 380.995 58.9236L384.14 59.6961C385.404 59.9869 386.631 60.3778 387.802 60.8776C388.973 61.3684 390.034 61.9955 390.965 62.7498C391.897 63.5042 392.635 64.413 393.179 65.4764C393.723 66.5397 394 67.7848 394 69.2208C394 71.1566 393.502 72.8562 392.496 74.3285C391.491 75.7917 390.043 76.9369 388.143 77.764C386.252 78.582 383.965 79 381.272 79C378.671 79 376.402 78.6002 374.493 77.8004C372.575 77.0097 371.08 75.8463 370.001 74.3194C368.922 72.7926 368.341 70.9294 368.258 68.7391H374.235C374.318 69.8842 374.687 70.8386 375.314 71.6111C375.95 72.3745 376.78 72.938 377.795 73.3197C378.819 73.6923 379.962 73.8832 381.226 73.8832C382.545 73.8832 383.707 73.6832 384.712 73.2924C385.708 72.9016 386.492 72.3564 387.055 71.6475C387.627 70.9476 387.913 70.1206 387.922 69.1754C387.913 68.312 387.654 67.5939 387.156 67.0304C386.649 66.467 385.948 65.9944 385.053 65.6127C384.15 65.231 383.098 64.8856 381.899 64.5857L378.081 63.6223C375.323 62.9225 373.137 61.8592 371.541 60.4323C369.937 59.0054 369.143 57.115 369.143 54.7429C369.143 52.798 369.678 51.0894 370.758 49.6261C371.827 48.1629 373.294 47.0268 375.148 46.2179C377.011 45.4 379.114 45 381.456 45C383.836 45 385.92 45.4 387.719 46.2179C389.517 47.0268 390.929 48.1538 391.952 49.5897C392.976 51.0257 393.511 52.6707 393.539 54.5338H387.691Z"
                fill="var(--geist-foreground)"
              ></path>
            </svg>
            <p>Next Js</p>
          </figure>
          <figure class="icon-skill">
            <svg
              viewBox="0 0 71 20"
              fill="none"
              role="img"
              class="icon-md w-[71px] text-default"
              title="Expo home"
            >
              <path
                d="M9.258 6.342c.158-.23.331-.26.472-.26.14 0 .374.03.532.26 2.06 2.806 6.332 10.208 6.727 10.611.585.597 1.388.225 1.854-.452.46-.667.587-1.135.587-1.634 0-.34-6.653-12.614-7.324-13.636C11.462.248 11.252 0 10.15 0h-.825c-1.1 0-1.259.248-1.903 1.23C6.75 2.254.097 14.528.097 14.868c0 .5.127.967.587 1.634.466.677 1.269 1.05 1.854.452.395-.403 4.661-7.805 6.72-10.61zm14.941-5.237v15.344h9.35v-3.113h-6.125v-3.244h5.45V6.98h-5.45V4.218h6.125V1.105h-9.35zM46.25 16.449l-3.88-5.568 3.619-5.195h-3.662L40.54 8.23l-1.765-2.543h-3.706l3.618 5.217-3.857 5.546h3.661l2.027-2.915 2.027 2.915h3.705zm7.572-10.982c-1.482 0-2.637.614-3.378 1.732V5.686H47.37V20h3.073v-5.063c.74 1.117 1.896 1.731 3.378 1.731 2.768 0 4.97-2.52 4.97-5.611 0-3.091-2.202-5.59-4.97-5.59zm-.697 8.242c-1.504 0-2.681-1.14-2.681-2.652 0-1.49 1.177-2.653 2.68-2.653 1.483 0 2.681 1.184 2.681 2.653 0 1.49-1.198 2.652-2.68 2.652zm12.188-8.242c-3.16 0-5.558 2.411-5.558 5.612 0 3.2 2.397 5.59 5.557 5.59 3.139 0 5.558-2.39 5.558-5.59 0-3.2-2.42-5.612-5.558-5.612zm0 2.96c1.438 0 2.55 1.117 2.55 2.652 0 1.49-1.112 2.63-2.55 2.63-1.46 0-2.55-1.14-2.55-2.63 0-1.535 1.09-2.653 2.55-2.653z"
                fill="currentColor"
              ></path>
            </svg>
            <p>Expo - React Native</p>
          </figure>
          <figure class="icon-skill">
            <img
              src="https://img.icons8.com/?size=512&id=nCj4PvnCO0tZ&format=png"
              alt="Typescript"
            />
            <p>TypeScript</p>
          </figure>
          <figure class="icon-skill">
            <img
              src="https://img.icons8.com/?size=512&id=71257&format=png"
              alt="Angular"
            />
            <p>Angular</p>
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
              src="https://img.icons8.com/color/512/python.png"
              alt="Python"
            />
            <p>Python</p>
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
