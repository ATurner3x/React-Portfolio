import React from 'react';
import { FaHtml5, FaCss3Alt, FaSass, FaJs, FaReact } from 'react-icons/fa';
import { FaNodeJs, FaNpm, FaDatabase, FaCode, FaPython } from 'react-icons/fa';
import '../styles/resume.css';

const Resume = () => {
  const frontEndProficiencies = [
    { icon: <FaHtml5 />, label: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { icon: <FaCss3Alt />, label: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { icon: <FaSass />, label: 'Sass', link: 'https://sass-lang.com/' },
    { icon: <FaJs />, label: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { icon: <FaReact />, label: 'React', link: 'https://reactjs.org/' },
  ];

  const backEndProficiencies = [
    { icon: <FaNodeJs />, label: 'Node.js', link: 'https://nodejs.org/' },
    { icon: <FaNpm />, label: 'NPM', link: 'https://www.npmjs.com/' },
    { icon: <FaDatabase />, label: 'MongoDB', link: 'https://www.mongodb.com/' },
    { icon: <FaCode />, label: 'TypeScript', link: 'https://www.typescriptlang.org/' },
    { icon: <FaPython />, label: 'Python', link: 'https://www.python.org/' },
  ];

  return (
    <section>
      <h2>Resume</h2>
      <div className="resume-download">
        <a href="/path/to/your/resume.pdf" download>
          Download Resume
        </a>
      </div>
      <div className="proficiencies">
        <h3>Front-End Proficiencies</h3>
        <ul>
          {frontEndProficiencies.map((item, index) => (
            <li key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </a>
              <p>{item.label}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="proficiencies">
        <h3>Back-End Proficiencies</h3>
        <ul>
          {backEndProficiencies.map((item, index) => (
            <li key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </a>
              <p>{item.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Resume;
