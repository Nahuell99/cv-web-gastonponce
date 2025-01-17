import React from 'react';
import './ProjectCard.css';
import { FaGithub, FaGlobe } from 'react-icons/fa';


interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
  sourceCode: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tools: any;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title, description, link, tools, sourceCode }) => {

  const handleClick = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };


  return (
    <div className="project-card" onClick={handleClick} style={{ cursor: link ? 'pointer' : 'default' }}>
      <div className="project-card-image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="project-card-content">
        <div className="project-card-header">
          <h4 className="project-card-title">{title} <span className="arrow">↗</span> </h4>
          <div className="project-icons">
            <a href={sourceCode} target="_blank" rel="noopener noreferrer" title="Código fuente" className="icon">
              <FaGithub />
            </a>
            <a href={link} target="_blank" rel="noopener noreferrer" title="Sitio web" className="icon">
              <FaGlobe />
            </a>
          </div>
        </div>
        <p className="project-card-description">{description}</p>
        <div className="tools">
          {tools.map((tool: string, index: number) => (
            <span key={index} className="tool-pill">{tool}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
