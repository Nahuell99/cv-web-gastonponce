import React, { useEffect } from 'react';
import './App.css';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'; // Importación de iconos
import ExperienceCard from './components/ExperienceCard';

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
            <h1>Gaston Nahuel Ponce</h1>
            <h2>FrontEnd Developer</h2>
            <p>Creo experiencias digitales accesibles y con resolución de píxeles para la web.</p>
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
          <div>
            <p>Soy un desarrollador apasionado por crear interfaces de usuario accesibles y perfectas en cuanto a píxeles que combinen un diseño bien pensado con una ingeniería sólida. Mi trabajo favorito se encuentra en la intersección del diseño y el desarrollo, llevando adelante los diseño al milímetro de lo diseños requeridos por los equipos de UX y negocio.</p>

            <p>Actualmente, soy PO semi-sr en Agrology y cuento con un amplio conocimiento en el negocio aropecuario. Colaboro en la creación y mantenimiento de los sistemas de gestion agricola que forman parte de Agorlogy, lo que garantiza que nuestra plataforma cumpla con los requerimientos y necesidades que nuestros usuarios exigen.</p>

            <p>En el pasado, tuve la oportunidad de trabajar como Analista y QA en el desarrollo de aplicaciones de distribución de medicamentos en farmacias de Argentina para Mobile I Business e implementador de facilitadores de transacciones de pago para ELDAR.</p>

            <p>En mi tiempo libre practico escalada, voy regularmente al gimnasio, me gusta ir a los teatros y cines de Buenos Aires y soy un apasionado de los videojuegos retro.</p>
          </div>

          <ExperienceCard
            startYear="2020"
            endYear="2023"
            position="Frontend Developer"
            company="TechCorp"
            description="Desarrollo y mantenimiento de interfaces de usuario en React, optimizando el rendimiento y asegurando la accesibilidad."
            tools={['React', 'JavaScript', 'CSS', 'Figma']}
          />
          <ExperienceCard
            startYear="2018"
            endYear="2020"
            position="Junior Developer"
            company="WebSolutions"
            description="Desarrollé soluciones backend en Node.js y gestioné bases de datos SQL."
            tools={['Node.js', 'Express', 'MySQL']}
          />
          <ExperienceCard
            startYear="2018"
            endYear="2020"
            position="Junior Developer"
            company="WebSolutions"
            description="Desarrollé soluciones backend en Node.js y gestioné bases de datos SQL."
            tools={['Node.js', 'Express', 'MySQL']}
          />
          <ExperienceCard
            startYear="2018"
            endYear="2020"
            position="Junior Developer"
            company="WebSolutions"
            description="Desarrollé soluciones backend en Node.js y gestioné bases de datos SQL."
            tools={['Node.js', 'Express', 'MySQL']}
          />
          <ExperienceCard
            startYear="2018"
            endYear="2020"
            position="Junior Developer"
            company="WebSolutions"
            description="Desarrollé soluciones backend en Node.js y gestioné bases de datos SQL."
            tools={['Node.js', 'Express', 'MySQL']}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
