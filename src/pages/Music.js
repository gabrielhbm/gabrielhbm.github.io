import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Album from '../components/Album';
import '../styles/music.css'
const Music = () => {
  const { t } = useTranslation();
  const albums = [
    {
      image: '/albums/octoberrust.png',
      title: 'October Rust',
      artist: 'Type O Negative',
      genre: 'Gothic Metal',
      releaseYear: 1996,
      rating: 10,
      description: t('octoberRustDesc'),
    },
    {
      image: '/albums/imaginaldisk.png',
      title: 'Imaginal Disk',
      artist: 'Magdalena Bay',
      genre: 'Synthpop',
      releaseYear: 2024,
      rating: 10,
      description: t('imaginalDiscDesc'),
    },
    {
      image: '/albums/wormwood.png',
      title: 'Wormwood',
      artist: 'The Acacia Strain',
      genre: 'Metalcore',
      releaseYear: 2018,
      rating: 10,
      description: t('wormwoodDesc'),
    },
    {
      image: '/albums/pop2.png',
      title: 'POP 2',
      artist: 'Charli XCX',
      genre: 'Hyperpop',
      releaseYear: 2017,
      rating: 10,
      description: t('popTwoDesc'), 
    },
    {
      image: '/albums/dielit.png',
      title: 'Die Lit',
      artist: 'Playboi Carti',
      genre: 'Trap',
      releaseYear: 2018,
      rating: 9.5,
      description: t('dieLitDesc'),
    },
    {
      image: '/albums/afterlyfe.png',
      title: 'Aftërlyfe',
      artist: 'Yeat',
      genre: 'Trap',
      releaseYear: 2020,
      rating: 9,
      description: t('afterlyfeDesc'),
    },
    {
      image: '/albums/brat.png',
      title: 'brat',
      artist: 'Charli XCX',
      genre: 'Electropop',
      releaseYear: 2024,
      rating: 9.5,
      description: t('bratDesc'),
    },
    {
      image: '/albums/untouchables.png',
      title: 'Untouchables',
      artist: 'KoЯn',
      genre: 'Nu metal',
      releaseYear: 2002,
      rating: 9,
      description: t('untouchablesDesc'),
    },
    {
      image: '/albums/twostarandthedreampolice.png',
      title: 'Two Star & The Dream Police',
      artist: 'Mk.Gee',
      genre: 'Bedroom Pop',
      releaseYear: 2024,
      rating: 9,
      description: t('twoStarDesc'),
    },
    {
      image: '/albums/sooth.png',
      title: 'Sooth',
      artist: 'Disfiguring the Goddess',
      genre: 'Deathcore',
      releaseYear: 2020,
      rating: 10,
      description: t('soothDesc'),
    },
    {
      image: '/albums/timeandspace.png',
      title: 'Time & Space',
      artist: 'Turnstile',
      genre: 'Hardcore Punk',
      releaseYear: 2018,
      rating: 9,
      description: t('timeAndSpaceDesc'),
    },
    {
      image: '/albums/slimeball3.png',
      title: 'Slimeball 3',
      artist: 'Young Nudy',
      genre: 'Trap',
      releaseYear: 2018,
      rating: 8,
      description: t('slimeballThreeDesc'),
    },
    {
      image: '/albums/unsilentdeath.png',
      title: 'Unsilent Death',
      artist: 'Nails',
      genre: 'Hardcore Punk',
      releaseYear: 2010,
      rating: 10,
      description: ('unsilentDeathDesc'),
    },
    {
      image: '/albums/softscars.png',
      title: 'Softscars',
      artist: 'Yeule',
      genre: 'Alternative rock',
      releaseYear: 2023,
      rating: 9,
      description: t('softScarsDesc'),
    },
    {
      image: '/albums/ds2.png',
      title: 'DS2',
      artist: 'Future',
      genre: 'Hip Hop',
      releaseYear: 2015,
      rating: 9,
      description: ('dsTwoDesc'),
    },
    {
      image: '/albums/idisagree.png',
      title: 'I Disagree',
      artist: 'Poppy',
      genre: 'Metal',
      releaseYear: 2020,
      rating: 10,
      description: t('iDisagreeDesc'),
    },
    {
      image: '/albums/amo.png',
      title: 'amo',
      artist: 'Bring Me The Horizon',
      genre: 'Rock',
      releaseYear: 2019,
      rating: 8,
      description: t('amoDesc'),
    },
    {
      image: '/albums/homogenic.png',
      title: 'Homogenic',
      artist: 'Björk',
      genre: 'Electronic',
      releaseYear: 1997,
      rating: 10,
      description: t('homogenicDesc'),
    },
    {
      image: '/albums/nonesovile.png',
      title: 'None So Vile',
      artist: 'Cryptopsy',
      genre: 'Death Metal',
      releaseYear: 1996,
      rating: 9,
      description: t('nsvDesc'),
    },
    {
      image: '/albums/almightyso2.png',
      title: 'Almighty So 2',
      artist: 'Chief Keef',
      genre: 'Drill',
      releaseYear: 2024,
      rating: 8.5,
      description: t('almightySoTwoDesc'),
    },
    {
      image: '/albums/lookatyourself.png',
      title: 'Look at Yourself',
      artist: 'Emmure',
      genre: 'Metalcore',
      releaseYear: 2017,
      rating: 9,
      description: t('layDesc'),
    }
  ];
  useDocumentTitle(t('music'));

  return (
    <div>
      <h1>{t('music')}</h1>
      <p className='pageDescriptionMusic'>{t('musicDesc')}</p>
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
            description={t(album.description)}
          />
        ))}
      </div>
    </div>
  );
};

export default Music;
