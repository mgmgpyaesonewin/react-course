import React, { useState } from 'react';
import LikeButton from './LikeButton';
import HobbyInput from './HobbyInput';
import { Twitter, Linkedin, Github, Mail, ExternalLink } from 'lucide-react';

function BioCard({ name, bioText, imageUrl, websiteUrl, socialLinks, skills }) {
  // State for hobbies
  const [hobbies, setHobbies] = useState(["Coding", "Reading", "Hiking"]);

  const getIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case 'twitter': return <Twitter size={20} />;
      case 'linkedin': return <Linkedin size={20} />;
      case 'github': return <Github size={20} />;
      case 'email': return <Mail size={20} />;
      default: return <ExternalLink size={20} />;
    }
  };

  return (
    <div className="bio-card">
      <div className="bio-header">
        <div className="image-container">
          <img src={imageUrl} alt={`${name}'s profile`} className="bio-image" />
        </div>
        <div className="header-content">
          <h2 className="bio-name">{name}</h2>
          <p className="bio-title">Software Engineer</p>
        </div>
      </div>

      <div className="bio-body">
        <div className="bio-section">
          <h3>About Me</h3>
          <p className="bio-text-content">{bioText}</p>
        </div>

        <div className="skills-section">
          <h3>Skills</h3>
          <div className="skills-container">
            {skills && skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar-bg">
                  <div
                    className="skill-bar-fill"
                    style={{ "--target-width": `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bio-footer">
        <div className="social-links">
          {socialLinks && socialLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className={`social-icon ${link.platform.toLowerCase()}`} title={link.platform}>
              {getIcon(link.platform)}
            </a>
          ))}
        </div>

        <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="website-link">
          View Projects on GitHub
        </a>

        <div className="interactive-section">
          <LikeButton />
          <HobbyInput hobbies={hobbies} setHobbies={setHobbies} />
        </div>

        <div className="hobbies-list-section">
          <h4>Interests</h4>
          <div className="hobbies-tags">
            {hobbies.map((hobby, index) => (
              <span key={index} className="hobby-tag">{hobby}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BioCard;
