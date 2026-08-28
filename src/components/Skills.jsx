import React from 'react';

function Skills() {
  const skills = [
    {
      id: 1,
      icon: 'fab fa-figma',
      titleKey: 'skillUiuxTitle',
      descKey: 'skillUiuxDesc',
      level: 90,
      color: '#7dd3fc'
    },
    {
      id: 2,
      icon: 'fas fa-pen-nib',
      titleKey: 'skillGraphicTitle',
      descKey: 'skillGraphicDesc',
      level: 95,
      color: '#c4b5fd'
    },
    {
      id: 3,
      icon: 'fas fa-mobile-alt',
      titleKey: 'skillMotionTitle',
      descKey: 'skillMotionDesc',
      level: 80,
      color: '#fde047'
    },
    {
      id: 4,
      icon: 'fas fa-code',
      titleKey: 'skillFrontendTitle',
      descKey: 'skillFrontendDesc',
      level: 75,
      color: '#67e8f9'
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 data-i18n="skillsHeader">Keahlian</h2>
          <div className="underline"></div>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div 
              key={skill.id}
              className="skill-card"
              style={{ '--color': skill.color, '--level': `${skill.level}%` }}
            >
              <div className="skill-icon">
                <i className={skill.icon}></i>
              </div>
              <h3 data-i18n={skill.titleKey}></h3>
              <p data-i18n={skill.descKey}></p>
              <div className="skill-bar">
                <div className="skill-progress"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
