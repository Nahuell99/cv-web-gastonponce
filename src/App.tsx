import React, { useEffect } from 'react';
import './App.css';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'; // Importación de iconos
import ExperienceCard from './components/ExperienceCard/ExperienceCard';
import ProjectCard from './components/ProyectCard/ProjectCard';

function App() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = document.querySelector('.degradeFondo') as HTMLElement;
      container.style.setProperty('--x', `${e.clientX}px`);
      container.style.setProperty('--y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='degradeFondo'>
      <div className="container">
        <div className="left-panel">
          <div className="header">
            <h1>Gaston Ponce</h1>
            <h2>FrontEnd Developer</h2>
            <p>Apasionado por el desarrollo de software que cumplan con las exigencias y expectativas de los usuarios.</p>
          </div>
          <div className="social-icons">
            <a href="https://github.com/Nahuell99" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/gastonponce/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/nahuelg.ponce/" target="_blank" rel="noopener noreferrer" title="Instagram">
              <FaInstagram />
            </a>
            <a href="mailto:NahuelG.Ponce@gmail.com" title="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="right-panel">
          <div className="presentacion">
            <p>Soy un desarrollador apasionado por crear interfaces de usuario accesibles y perfectas en cuanto a píxeles que combinen un diseño bien pensado con una ingeniería sólida. Mi trabajo favorito se encuentra en la intersección del diseño y el desarrollo, llevando adelante los diseño al milímetro de lo diseños requeridos por los equipos de UX y negocio.</p>

            <p>Actualmente, soy PO semi-sr en Agrology y cuento con un amplio conocimiento en el negocio aropecuario. Colaboro en la creación y mantenimiento de los sistemas de gestion agricola que forman parte de Agorlogy, lo que garantiza que nuestra plataforma cumpla con los requerimientos y necesidades que nuestros usuarios exigen.</p>

            <p>En el pasado, tuve la oportunidad de trabajar como Analista y QA en el desarrollo de aplicaciones de distribución de medicamentos en farmacias de Argentina para Mobile I Business e implementador de facilitadores de transacciones de pago para ELDAR.</p>

            <p>En mi tiempo libre practico escalada, voy regularmente al gimnasio, me gusta ir a los teatros y cines de Buenos Aires y soy un apasionado de los videojuegos retro.</p>
          </div>

          <div>
            <h3>Experiencia</h3>
          </div>

          <div className='ExperienceDiv'>
            <ExperienceCard
              startYear="Oct 2022"
              endYear="PRESENTE"
              position="Product Owner"
              company="Agrology Data S.R.L."
              description="Desarrollo y mantenimiento de interfaces de usuario en React, optimizando el rendimiento y asegurando la accesibilidad."
              tools={['Postman', 'JavaScript', 'CSS', 'HTML', 'Figma']}
            />
            <ExperienceCard
              startYear="Ene 2022"
              endYear="Oct 2022"
              position="Analista Funcional y QA"
              company="ELDAR S.R.L"
              description="Desarrollé soluciones backend en Node.js y gestioné bases de datos SQL."
              tools={['Node.js', 'Express', 'MySQL']}
            />
            <ExperienceCard
              startYear="Jul 2020"
              endYear="Ene 2022"
              position="FrontEnd Angular - Analista QA"
              company="Mobile-I-Busines"
              description="Desarrollé soluciones backend en Node.js y gestioné bases de datos SQL."
              tools={['Node.js', 'Express', 'MySQL']}
            />
          </div>

          <div>
            <h3>Proyectos</h3>
          </div>

          <div className='ProyectDiv'>

            <ProjectCard
              imageSrc="/spotify-project-data.png"
              title="Statistics of your Spotify"
              description="Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more."
              link="https://nahuell99.github.io/spotify-data/"
            />

            <ProjectCard
              imageSrc="/spotify-project-data.png"
              title="CV Web Page"
              description="Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more."
              link="https://www.gastonponce.com/"
            />

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
