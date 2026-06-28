import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function App() {
  return (
    <div className="card-container">
      <div className="card">
        <div className="content">
          <h1 className="title">Hi, I'm Jerry!</h1>
          <p className="subtitle">
            I'm a Software Engineering student at the University of Waterloo.
          </p>

          <div className="links">
            <a
              className="link-btn"
              href="https://linkedin.com/in/jerrytq"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="link-icon"
                aria-hidden
              />
              <span>LinkedIn</span>
            </a>

            <a
              className="link-btn"
              href="https://github.com/jerrytq"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="link-icon"
                aria-hidden
              />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <div className="avatar">
          <img
            src="https://starship.jerrytq.com/jerrytq/home/hero/jerrytqzheng.jpg"
            alt="Jerry Zheng"
          />
        </div>
      </div>
    </div>
  );
}
