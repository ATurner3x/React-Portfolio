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

