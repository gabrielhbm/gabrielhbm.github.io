import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Album from '../components/Album';
const albums = [
  {
    image: 'path/to/image1.jpg',
    title: 'Album 1',
    artist: 'Artist 1',
    genre: 'Genre 1',
    releaseYear: 2021,
    rating: 4.5,
    description: 'Description for album 1',
  },
  {
    image: 'path/to/image2.jpg',
    title: 'Album 2',
    artist: 'Artist 2',
    genre: 'Genre 2',
    releaseYear: 2020,
    rating: 4.0,
    description: 'Description for album 2',
  },
  {
    image: 'path/to/image3.jpg',
    title: 'Album 3',
    artist: 'Artist 3',
    genre: 'Genre 3',
    releaseYear: 2019,
    rating: 4.8,
    description: 'Description for album 3',
  },
  {
    image: 'path/to/image4.jpg',
    title: 'Album 4',
    artist: 'Artist 4',
    genre: 'Genre 4',
    releaseYear: 2018,
    rating: 4.2,
    description: 'Description for album 4',
  },
  {
    image: 'path/to/image5.jpg',
    title: 'Album 5',
    artist: 'Artist 5',
    genre: 'Genre 5',
    releaseYear: 2017,
    rating: 4.7,
    description: 'Description for album 5', 
  },
];
const Music = () => {
  const { t } = useTranslation();
  useDocumentTitle(t('music'));

  return (
    <div>
      <h1>{t('music')}</h1>
      <div className='album-container'>
        {albums.map((album, index) => (
          <Album
            key={index}
            image={album.image}
            title={album.title}
            artist={album.artist}
            genre={album.genre}
            releaseYear={album.releaseYear}
            rating={album.rating}
            description={album.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Music;
