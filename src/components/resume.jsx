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

  