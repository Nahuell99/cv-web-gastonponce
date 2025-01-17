import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import './App.css';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import ExperienceCard from './components/ExperienceCard/ExperienceCard';
import ProjectCard from './components/ProyectCard/ProjectCard';
import { useLanguage } from './LanguageContext';
import LanguageSwitch from './components/LanguageSwitch/LanguageSwitch'; // Importar el switch
import cvPng from "./assets/cv-web-page.png";
import spotifyPng from "./assets/spotify-project-data.png";
import CV_EN from './assets/CV-Gaston Ponce-FE-EN.pdf';
import CV_ES from './assets/CV-Gaston Ponce-FE-ES.pdf';


function App() {
  const { setLanguage, t, language } = useLanguage();

  const cv = language === 'es' ? CV_ES : CV_EN;

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
      <Analytics />
      <SpeedInsights />
      <LanguageSwitch language={language} setLanguage={setLanguage} /> {/* Switch flotante */}
      <div className="container">
        <div className="left-panel">
          <div className="header">
            <h1>Gaston Ponce</h1>
            <h2>FrontEnd Developer</h2>
            <p>{t("pre-presentation")}</p>
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

            <h3 className="mobile-only">{t("aboutMe")}</h3>

            <p>{t("presentation-p1")}</p>

            <p>{t("presentation-p2-1")}<a href="https://www.agrology.com/" className="empresa-link" rel="noopener noreferrer" target="_blank"><strong>Agrology</strong></a>{t("presentation-p2-2")}</p>

            <p>{t("presentation-p3-1")}<a href="https://www.mobile-i-business.com/" className="empresa-link" rel="noopener noreferrer" target="_blank"><strong>Mobile I Business</strong></a>{t("presentation-p3-2")}<a href="https://www.eldars.com.ar/" rel="noopener noreferrer" className="empresa-link" target="_blank"><strong>Eldar</strong></a>.</p>

            <p>{t("presentation-p4")}</p>
          </div>
          <div>
            <h3>{t("professionalExperience:")}</h3>
          </div>
          <div className='ExperienceDiv'>
            <ExperienceCard
              startYear={t("OCT")+" 2022"}
              endYear={t("present")}
              position="Product Owner"
              company="Agrology Data S.R.L."
              link="https://www.agrology.com/"
              description={t("descriptionAgrology")}
              tools={['Postman', 'JavaScript', 'CSS', 'HTML', 'Figma']}
            />
            <ExperienceCard
              startYear={t("JAN")+" 2022"}
              endYear={t("OCT")+" 2022"}
              position="FrontEnd - QA Analyst"
              link="https://www.eldars.com.ar/"
              company="ELDAR S.R.L"
              description={t("descriptionEldar")}
              tools={['Postman', 'MySQL', 'HTML', 'CSS','Figma','SCRUM']}
            />
            <ExperienceCard
              startYear={t("JUL")+" 2020"}
              endYear={t("JAN")+" 2022"}
              position="Analyst FrontEnd Angular"
              link="https://www.mobile-i-business.com/"
              company="Mobile-I-Busines"
              description={t("descriptionMiB")}
              tools={['FormsModule', 'Routing', 'NgRx', 'AngularMaterial', 'Flexbox', 'Bootstrap', 'Angular', 'MySQL', 'Postman', 'HTML','CSS','PlaywRight']}
            />

            <div>
              <h4>
                <a className="empresa-link" href={cv} target="_blank" rel="noopener noreferrer">
                {t("fullCV")} <span className="arrow">↗</span>
                </a>
              </h4>
            </div>
            
          </div>
          <div className='ProyectDiv'>
            <div>
              <h3>{t("personalProjects")}</h3>
            </div>
            <ProjectCard
              imageSrc={spotifyPng}
              title={t("statisticsSpotify")}
              description={t("statisticsSpotify-description")}
              link="https://nahuell99.github.io/spotify-data/"
              sourceCode='https://github.com/Nahuell99/spotify-data'
              tools={['Recharts', 'HTML', 'CSS', 'React', 'reactContext']}
            />
            <ProjectCard
              imageSrc={cvPng}
              title="CV Web Page"
              description={t("cv-description")}
              link="https://www.gastonponce.com/"
              sourceCode='https://github.com/Nahuell99/cv-web-gastonponce'
              tools={['HTML', 'CSS', 'reactContext']}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
