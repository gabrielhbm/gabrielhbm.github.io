import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ name, description }) => {
    return (
        <div className='project-container'>
            <p>{name}</p>
            <p>{description}</p>
        </div>
    );
};

Project.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Project;