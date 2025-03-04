import React from 'react';
import PropTypes from 'prop-types';

const Skill = ({ icon, name, link }) => {
    return (
        <div className="skill">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <i className={`devicon-${icon}`} alt={`${name} icon`}></i>
                <p className="skill-name">{name}</p>
            </a>
        </div>
    );
};

Skill.propTypes = {
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default Skill;