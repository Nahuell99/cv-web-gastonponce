import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = ({ startYear, endYear, position, company, description, tools, link }: any) => {

  const handleClick = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="experience-card" onClick={handleClick} style={{ cursor: link ? 'pointer' : 'default' }}>
      <div className="experience-header">
        <div className="experience-date">
          <span>{startYear} - {endYear || "Actual"}</span>
        </div>
        <div className="experience-title">
          <h3 className="experience-title">{position} · {company} <span className="arrow">↗</span> </h3> 
        </div>
      </div>
      <p className="experience-description">{description}</p>
      <div className="tools">
        {tools.map((tool: string, index: number) => (
          <span key={index} className="tool-pill">{tool}</span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
