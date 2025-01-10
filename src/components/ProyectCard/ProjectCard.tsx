import React from 'react';
import './ProjectCard.css';


interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title, description, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-card">
      <div className="project-card-image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="project-card-content">
        <h3 className="project-card-title">
          {title} <span className="arrow">↗</span>
        </h3>
        <p className="project-card-description">{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
