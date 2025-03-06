import React from 'react';

const Country = ({ flag, name, link, cities }) => {
    return (
        <div className="country">
            <a href={link} className="country-link">
                <img src={flag} alt={`${name} flag`} className="country-flag" />
            </a>
            <p className="country-name">{name}</p>
            <p className="city-list">
                {cities.join(' ')}
            </p>
        </div>
    );
};

export default Country;