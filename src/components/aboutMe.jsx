import React from 'react';
import '../styles/aboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <h2 className="about-me-title">About Me</h2>
      {/* <img src="path_to_photo" alt="Developer's Photo" /> */}
      <p className="about-me-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit facilisis est, non fringilla risus iaculis eget. Vivamus quis rhoncus erat. Cras feugiat elit eu neque volutpat, sit amet gravida orci sollicitudin. Phasellus ac tellus eu ligula consequat tincidunt nec at lorem. Etiam luctus velit nec bibendum bibendum. Vestibulum eu elit felis. Maecenas luctus velit nec justo finibus, quis euismod arcu dictum. In aliquam purus eu massa varius, eu tristique quam hendrerit. Nulla facilisi. Mauris aliquam arcu eget luctus venenatis. Curabitur sit amet justo est.</p>
    </div>
  );
};

export default AboutMe;

