import React from 'react';
import PropTypes from 'prop-types';

const Album = ({ image, title, artist, genre, releaseYear, rating, description }) => {
    return (
        <div className="album">
            <img src={image} alt={`${title} cover`} />
            <h2>{title}</h2>
            <p>Artist: {artist}</p>
            <p>Genre: {genre}</p>
            <p>Release Year: {releaseYear}</p>
            <p>Rating: {rating}</p>
            <p>{description}</p>
        </div>
    );
};

Album.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string,
};

export default Album;