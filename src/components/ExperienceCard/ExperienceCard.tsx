import './ExperienceCard.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ExperienceCard = ({ startYear, endYear, position, company, description, tools, link }: any) => {

  const handleClick = () => {
    if (link) {
      const newWindow = window.open(link, '_blank');
      if (newWindow) {
        newWindow.opener = null;
      }
    }
  };

  return (
    <div className="experience-card" onClick={handleClick} style={{ cursor: link ? 'pointer' : 'default' }}>
      <div className="experience-date">
        <span>{startYear} - {endYear || "Actual"}</span>
      </div>
      <div className="experience-title">
      <h3 className="experience-title">{position} · {company} <span className="arrow">↗</span> </h3> 
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
