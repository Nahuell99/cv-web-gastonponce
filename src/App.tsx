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
            <p>Apasionado por crear soluciones de software orientadas a satisfacer las necesidades y expectativas de los usuarios.</p>
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
          <p>Soy un desarrollador apasionado por crear interfaces de usuario profesionales. Mi trabajo favorito se encuentra en la intersección del diseño y el desarrollo, llevando adelante los diseños al milímetro requeridos por los equipos de UX y negocio.</p>

          <p>Actualmente, soy PO semi-sr en <a href="https://www.agrology.com/" className="empresa-link"><strong>Agrology</strong></a> y cuento con un amplio conocimiento en el negocio agropecuario. Colaboro en la creación y mantenimiento de los sistemas de gestión agrícola que forman parte de Agrology, lo que garantiza que nuestra plataforma cumpla con los requerimientos y necesidades que nuestros usuarios exigen.</p>

          <p>En el pasado, tuve la oportunidad de trabajar como QA y desarrollador de aplicaciones de distribución de medicamentos en farmacias de Argentina para <a href="https://www.mobile-i-business.com/" className="empresa-link"><strong>Mobile I Business</strong></a> e implementador de facilitadores de transacciones de pago para <a href="https://www.eldars.com.ar/" className="empresa-link"><strong>Eldar</strong></a>.</p>

          <p>En mi tiempo libre practico escalada, voy regularmente al gimnasio, me gusta ir a los teatros y cines de Buenos Aires y soy un apasionado de los videojuegos retro.</p>
          </div>

          <div>
            <h3>Experiencia profesional:</h3>
          </div>

          <div className='ExperienceDiv'>
            <ExperienceCard
              startYear="OCT 2022"
              endYear="PRESENTE"
              position="Product Owner"
              company="Agrology Data S.R.L."
              link="https://www.agrology.com/"
              description="Como ProductOwner en Agrology, lideré la planificación y gestión de sprints, coordinando reuniones de planning y presentaciones de avances al directorio. Participé en pruebas de APIs utilizando Postman y documenté su integración con sistemas externos. Además, realicé testing automatizado con Playwright y gestioné el análisis de datos de Hotjar para identificar oportunidades de mejora participando en la negociación de tiempos de proyecto y la elaboración de informes de progreso para clientes y directorio."
              tools={['Postman', 'JavaScript', 'CSS', 'HTML', 'Figma']}
            />
            <ExperienceCard
              startYear="ENE 2022"
              endYear="OCT 2022"
              position="Analista y QA"
              link="https://www.eldars.com.ar/"
              company="ELDAR S.R.L"
              description="Como Analista en Eldar, colaboré estrechamente con clientes y equipos de desarrollo en proyectos enfocados en facilitar las transacciones financieras. Mis responsabilidades incluyeron el relevamiento y análisis de propuestas, la generación de documentación técnica y funcional, y la participación activa en squads bajo metodologías ágiles (Scrum). Además, ejecute pruebas de integración y utilizando POSTMAN para probar APIs en integraciones de terceros."
              tools={['Postman', 'MySQL', 'Jira','HTML','CSS']}
            />
            <ExperienceCard
              startYear="JUL 2020"
              endYear="ENE 2022"
              position="Analista FrontEnd Angular"
              link="https://www.mobile-i-business.com/"
              company="Mobile-I-Busines"
              description="Colabore en el área de ventas del producto a visitadores farmacéuticos, participé activamente en todas las etapas del ciclo de vida del producto, desde el relevamiento de requerimientos hasta la implementación final. Mi rol incluía el análisis funcional y técnico, la presentación de propuestas a clientes potenciales, y el desarrollo de interfaces de usuario utilizando Angular y Angular Material."
              tools={['FormsModule', 'Routing', 'NgRx', 'AngularMaterial', 'Flexbox', 'Bootstrap', 'Angular', 'MySQL', 'Postman']}
            />
            <div>
              <h4>
                <a className="empresa-link" href="/CV-Gaston-Ponce.pdf" target="_blank" rel="noopener noreferrer">
                  Ver CV completo <span className="arrow">↗</span>
                </a>
              </h4>
            </div>
          </div>

          <div className='ProyectDiv'>
            <div>
              <h3>Proyectos personales:</h3>
            </div>
            <ProjectCard
              imageSrc="/spotify-project-data.png"
              title="Statistics of your Spotify"
              description="Aplicación web para visualizar tus datos personales de Spotify. Consulta tus artistas favoritos, las pistas más escuchadas por periodos de tiempos a elección. Debes solicitar tu información a Spotify para recibirla en formato .json y cargarla para ver la información real."
              link="https://nahuell99.github.io/spotify-data/"
              sourceCode='https://github.com/Nahuell99/spotify-data'
              tools={['Recharts', 'HTML', 'CSS', 'React','reactContext']}
            />

            <ProjectCard
              imageSrc="/cv-web-page.png"
              title="CV Web Page"
              description="Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more."
              link="https://www.gastonponce.com/"
              sourceCode='https://github.com/Nahuell99/cv-web-gastonponce'
              tools={['HTML','CSS','reactContext']}
            />

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
