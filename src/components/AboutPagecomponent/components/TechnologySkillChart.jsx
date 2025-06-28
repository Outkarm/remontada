import "../styles/TechnologySkillChart.css";

const TechnologySkillChart = ({ skillPercentage, skillName }) => {
  return (
    <div className="technology-skill-chart">
      <div className="technology-sckill-chart-info-container">
        <div className="technology-sckill-chart-name">{skillName}</div>
        <div className="technology-sckill-chart-percentage">
          {skillPercentage}%
        </div>
      </div>
      <div className="bar-chart">
        <div className="bar" style={{ width: `${skillPercentage}%` }}></div>
      </div>
    </div>
  );
};

export default TechnologySkillChart;
