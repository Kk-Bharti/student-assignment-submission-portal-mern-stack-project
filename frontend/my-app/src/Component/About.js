import React from 'react';
import '../index.css'

const About = () => {
  return (
    <div className="about-container">
      <h1>About This Portal</h1>
      <p>
        This portal is designed to streamline the submission and grading process for student assignments. 
        It provides a convenient platform for:
      </p>
      <ul>
        <li>Students to submit assignments electronically.</li>
        <li>Instructors to easily view and grade submissions.</li>
        <li>Track assignment deadlines and submission status.</li>
        <li>Provide feedback directly within the platform.</li>
      </ul>
      <p>
        We believe this portal will enhance the learning experience for both students and instructors.
      </p>
      {/* Add any other relevant information here, such as: */}
      {/* - Contact information */}
      {/* - Team information */}
      {/* - Acknowledgements */}
    </div>
  );
};

export default About;