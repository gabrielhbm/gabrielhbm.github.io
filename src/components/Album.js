import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';


const Album = ({ image, title, artist, genre, releaseYear, rating, description, link }) => {
    const { t } = useTranslation();
    return (
        <div className="album">
            <a href={link} target="_blank" rel="noreferrer">
                <img src={image} alt={`${title} cover`} className='album-cover'/>
            </a>
            <div className='album-top'>
                <h2>{title}</h2>
                <p className='album-artist'>{artist}</p>
            </div>
            <p className='album-genre'>{t('genre')} : {t(genre)}</p>
            <p className='album-year'>{t('releaseYear')} : {releaseYear}</p>
            <p className='album-rating'>{t('myRating')} : {rating}</p>
            <p className='album-desc'>{description}</p>
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
    link: PropTypes.string
};

export default Album;