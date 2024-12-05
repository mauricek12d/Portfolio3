import React from 'react';
import './Resume.css'; // Optional for styling

const Resume: React.FC = () => {
  return (
    <div className="resume">
      <h2 className="resume-title">Technical Experience</h2>

      <section className="front-end">
        <h3>Front-End Development</h3>
        <ul>
          <li>Proficient in HTML5, CSS3, JavaScript (ES6+), and TypeScript.</li>
          <li>Experience with modern frameworks and libraries such as React.js and Angular.</li>
          <li>Implemented responsive designs using Bootstrap, Tailwind CSS, and Material-UI.</li>
          <li>Skilled in creating dynamic, user-friendly interfaces with a focus on accessibility (WCAG standards).</li>
          <li>Familiar with version control systems like Git and platforms like GitHub/GitLab.</li>
        </ul>
      </section>

      <section className="back-end">
        <h3>Back-End Development</h3>
        <ul>
          <li>Experienced with server-side programming in Node.js.</li>
          <li>Designed RESTful APIs and GraphQL endpoints for seamless client-server communication.</li>
          <li>Worked with databases such as MySQL and PostgreSQLfor data storage and management.</li>
          <li>Integrated third-party APIs and services into applications.</li>
          <li>Knowledge of cloud platforms like AWS and Azure for deployment and scalability.</li>
        </ul>
      </section>

      <section className="tools-and-tech">
        <h3>Tools & Technologies</h3>
        <p>
          VS Code, Webpack, ESLint, Slack, Zoom, Adobe XD
        </p>
      </section>

       <section className="resume-download">
        <h3>Download My Resume</h3>
        <a
          href="https://github.com/mauricek12d/Resume"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Download Resume
        </a>
      </section>
    </div>
  );
};

export default Resume;
