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
      link: "https://open.spotify.com/intl-fr/album/46NjYrJ5v5ZTIHMb1DrAgl?si=bnrQWF9pRh-F_9HmNbA7TA",
    },
    {
      image: '/albums/imaginaldisk.png',
      title: 'Imaginal Disk',
      artist: 'Magdalena Bay',
      genre: 'Synthpop',
      releaseYear: 2024,
      rating: 10,
      description: t('imaginalDiscDesc'),
      link: "https://open.spotify.com/intl-fr/album/4HTy9WFTYooRjE9giTmzAF?si=1pvDjAWeQi-_dfhTjTny6Q"
    },
    {
      image: '/albums/wormwood.png',
      title: 'Wormwood',
      artist: 'The Acacia Strain',
      genre: 'Metalcore',
      releaseYear: 2010,
      rating: 10,
      description: t('wormwoodDesc'),
      link: "https://open.spotify.com/intl-fr/album/5pZD06jMRqNicKO4AlcK06?si=4f2eff2b0c964487"
    },
    {
      image: '/albums/pop2.png',
      title: 'POP 2',
      artist: 'Charli XCX',
      genre: 'Hyperpop',
      releaseYear: 2017,
      rating: 10,
      description: t('popTwoDesc'), 
      link: "https://open.spotify.com/intl-fr/album/2HIwUmdxEl7SeWa1ndH5wC?si=e1d198ad900544da"
    },
    {
      image: '/albums/dielit.png',
      title: 'Die Lit',
      artist: 'Playboi Carti',
      genre: 'Trap',
      releaseYear: 2018,
      rating: 9.5,
      description: t('dieLitDesc'),
      link: "https://open.spotify.com/intl-fr/album/7dAm8ShwJLFm9SaJ6Yc58O?si=-HDgzrrITE-e4vUL3xl0tA"
    },
    {
      image: '/albums/afterlyfe.png',
      title: 'Aftërlyfe',
      artist: 'Yeat',
      genre: 'Trap',
      releaseYear: 2020,
      rating: 9,
      description: t('afterlyfeDesc'),
      link: "https://open.spotify.com/intl-fr/album/25Uddgldy3slnChqKqHsIM?si=74b9e583c46e4f82"
    },
    {
      image: '/albums/brat.png',
      title: 'brat',
      artist: 'Charli XCX',
      genre: 'Electropop',
      releaseYear: 2024,
      rating: 9.5,
      description: t('bratDesc'),
      link: "https://open.spotify.com/intl-fr/album/2lIZef4lzdvZkiiCzvPKj7?si=_ZzzU66BTYSQDtrWumkZhA"
    },
    {
      image: '/albums/oohrapiya.png',
      title: 'Ooh Rap I Ya',
      artist: 'George Clanton',
      genre: 'Electronic',
      releaseYear: 2023,
      rating: 8.5,
      description: t('oohRapIYaDesc'),
      link: "https://open.spotify.com/intl-fr/album/2kvz9frUn3LUK83imD2BQS"
    },
    {
      image: '/albums/untouchables.png',
      title: 'Untouchables',
      artist: 'KoЯn',
      genre: 'Nu metal',
      releaseYear: 2002,
      rating: 9,
      description: t('untouchablesDesc'),
      link: "https://open.spotify.com/intl-fr/album/32H8ZczfX12FWWODVVr6NQ?si=819c612414054769"
    },
    {
      image: '/albums/twostarandthedreampolice.png',
      title: 'Two Star & The Dream Police',
      artist: 'Mk.Gee',
      genre: 'Bedroom Pop',
      releaseYear: 2024,
      rating: 9,
      description: t('twoStarDesc'),
      link: "https://open.spotify.com/intl-fr/album/6DlLdXBGCsSDPOV8R2pCl7?si=-fm44P2tRUKkKNMNy40ZDQ"
    },
    {
      image: '/albums/agreatchaos.png',
      title: 'A Great Chaos',
      artist: 'Ken Carson',
      genre: 'Rage',
      releaseYear: 2023,
      rating: 9,
      description: t('aGreatChaosDesc'),
      link: "https://open.spotify.com/intl-fr/album/0HS8aknH0JQdMIiBVhyOCW?si=eBG02-VBQi2B_fwb1Qkhog"
    },
    {
      image: '/albums/youwontgobeforeyouresupposedto.png',
      title: "You Won't Go Before You're Supposed To",
      artist: 'Knocked Loose',
      genre: 'Metalcore',
      releaseYear: 2024,
      rating: 10,
      link: "https://open.spotify.com/intl-fr/album/2sLBMdUF5HYNB0voqWs4K3?si=vbPQTTHMRa-Q2KbCFRWeBA"
    },
    {
      image: '/albums/sooth.png',
      title: 'Sooth',
      artist: 'Disfiguring the Goddess',
      genre: 'Deathcore',
      releaseYear: 2020,
      rating: 10,
      description: t('soothDesc'),
      link: "https://open.spotify.com/intl-fr/album/7sC7y81LiXPqPjQmfBEE3p?si=0b2224714a544561"
    },
    {
      image: '/albums/timeandspace.png',
      title: 'Time & Space',
      artist: 'Turnstile',
      genre: 'Hardcore Punk',
      releaseYear: 2018,
      rating: 9,
      description: t('timeAndSpaceDesc'),
      link: "https://open.spotify.com/intl-fr/album/7bZveW9UQfYbkPH9pkpaQx?si=HVjDbb6YRAegNTw4MYKHZA"
    },
    {
      image: '/albums/slimeball3.png',
      title: 'Slimeball 3',
      artist: 'Young Nudy',
      genre: 'Trap',
      releaseYear: 2018,
      rating: 8,
      description: t('slimeballThreeDesc'),
      link: "https://open.spotify.com/intl-fr/album/6NNqD3Z4ETW7AgEKjV6iII?si=b0c8159ca8ad4dbc"
    },
    {
      image: '/albums/unsilentdeath.png',
      title: 'Unsilent Death',
      artist: 'Nails',
      genre: 'Powerviolence',
      releaseYear: 2010,
      rating: 10,
      description: ('unsilentDeathDesc'),
      link: "https://open.spotify.com/intl-fr/track/25FpSc8mWexwXo3X42rduw?si=190e8e36924b4b73"
    },
    {
      image: '/albums/softscars.png',
      title: 'Softscars',
      artist: 'Yeule',
      genre: 'Alternative rock',
      releaseYear: 2023,
      rating: 9,
      description: t('softScarsDesc'),
      link: "https://open.spotify.com/intl-fr/album/7t01lwQRDjtEvwiAm88ACH?si=06406396363c460d"
    },
    {
      image: '/albums/ds2.png',
      title: 'DS2',
      artist: 'Future',
      genre: 'Hip Hop',
      releaseYear: 2015,
      rating: 9,
      description: ('dsTwoDesc'),
      link: "https://open.spotify.com/intl-fr/album/0fUy6IdLHDpGNwavIlhEsl?si=dc4db6fb1ff04a21"
    },
    {
      image: '/albums/idisagree.png',
      title: 'I Disagree',
      artist: 'Poppy',
      genre: 'Metal',
      releaseYear: 2020,
      rating: 10,
      description: t('iDisagreeDesc'),
      link: "https://open.spotify.com/intl-fr/album/4uTce2w80loIu3oLnW0irN?si=3318361ce8c24404"
    },
    {
      image: '/albums/amo.png',
      title: 'amo',
      artist: 'Bring Me The Horizon',
      genre: 'Rock',
      releaseYear: 2019,
      rating: 8,
      description: t('amoDesc'),
      link: "https://open.spotify.com/intl-fr/album/04mkS7FooK8fRbB626T9NR?si=c68b2487bcfc49d5"
    },
    {
      image: '/albums/homogenic.png',
      title: 'Homogenic',
      artist: 'Björk',
      genre: 'Electronic',
      releaseYear: 1997,
      rating: 10,
      description: t('homogenicDesc'),
      link: "https://open.spotify.com/intl-fr/album/0h19Ty9F2Ma8pKkRdx17UT?si=fa616a943b114f93"
    },
    {
      image: '/albums/nonesovile.png',
      title: 'None So Vile',
      artist: 'Cryptopsy',
      genre: 'Death Metal',
      releaseYear: 1996,
      rating: 9,
      description: t('nsvDesc'),
      link: "https://open.spotify.com/intl-fr/album/0mZUAsioioz1zKB2ll6jFt?si=d48cdb68e2b24514"
    },
    {
      image: '/albums/almightyso2.png',
      title: 'Almighty So 2',
      artist: 'Chief Keef',
      genre: 'Drill',
      releaseYear: 2024,
      rating: 8.5,
      description: t('almightySoTwoDesc'),
      link: "https://open.spotify.com/intl-fr/album/6xw2hoSzBYynn2dGmERunp?si=d584dced45954781"
    },
    {
      image: '/albums/lookatyourself.png',
      title: 'Look at Yourself',
      artist: 'Emmure',
      genre: 'Metalcore',
      releaseYear: 2017,
      rating: 9,
      description: t('layDesc'),
      link: "https://open.spotify.com/intl-fr/album/5d904eRcMkUSIipPixswNM?si=9ffc5808fb0f42a7"
    },
    {
      image: '/albums/mercurialworld.png',
      title: 'Mercurial World',
      artist: 'Magdalena Bay',
      genre: 'Synthpop',
      releaseYear: 2021,
      rating: 10,
      description: t('mercurialWorldDesc'),
      link: "https://open.spotify.com/intl-fr/album/1ERrUvG31thFCxdwWUoJrY?si=6UTDg4ClSv23p_4-BvOUvw"
    },

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
            link={album.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Music;
