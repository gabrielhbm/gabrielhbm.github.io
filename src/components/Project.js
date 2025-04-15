import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import '../styles/projects.css';

const Project = ({ img, name, date, description, skills, link }) => {
    const { t } = useTranslation();
    return (
        <div className='project-container'>
            <div className='project-img'>
                <img src={`${process.env.PUBLIC_URL}/${img}`} alt={name} />
            </div>
            <div className='project-head'>
                <p className='projectName'>{name}</p>
                <p className='projectDate'>{date}</p>
                <p className='projectSkills'>{t('involvedSkills').toLocaleUpperCase()}</p>
                <div className='project-skills'>
                    {skills.map(skill => (
                        <i 
                            key={skill} 
                            className={`devicon-${skill}${(skill === 'blender' || skill === 'threejs') ? '-original' : '-plain'}`} 
                            alt={`${name} icon`}
                            title={skill}
                        ></i>
                    ))}
                </div>
            </div>
            <div className='project-description'>
                {description.map((paragraph, index) => (
                    <p key={index} className='project-description-p'>{paragraph}</p>
                ))}
            </div>
            {link && (
                <div className='project-link'>
                    <a href={link} target='_blank' rel='noopener noreferrer' className="project-link-a">
                        <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                        {t('linkToProject')}
                    </a>
                </div>
            )}
        </div>
    );
};

Project.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.array.isRequired,
    skills: PropTypes.array.isRequired,
    link: PropTypes.string, // Optional link
};

export default Project;