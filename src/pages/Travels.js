import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Map from '../components/Map';
import Country from '../components/Country'; // Import the Country component
import 'leaflet/dist/leaflet.css';
import '../styles/travels.css';

const Travels = () => {
  const { t } = useTranslation();
  useDocumentTitle(t('travels'));

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const countryData = [
        { name: 'France', link: 'https://en.wikipedia.org/wiki/France', cities: ['Paris', 'Reims', 'Lyon', 'Brest', 'Montpellier'] },
        { name: 'Canada', link: 'https://en.wikipedia.org/wiki/Canada', cities: ['Québec', 'Montréal', 'Saguenay'] },
        { name: 'Germany', link: 'https://en.wikipedia.org/wiki/Germany', cities: ['Munich'] },
        { name: 'Spain', link: 'https://en.wikipedia.org/wiki/Spain', cities: ['Madrid', 'Toledo', 'Valencia', 'Alicante'] },
        { name: 'Italy', link: 'https://en.wikipedia.org/wiki/Italy', cities: ['Roma', 'Firenze', 'Verona', 'Pisa'] },
        { name: 'Vatican', link: 'https://en.wikipedia.org/wiki/Vatican_City', cities: ['Vatican City'] },
        { name: 'Cyprus', link: 'https://en.wikipedia.org/wiki/Cyprus', cities: ['Nicosia', 'Limassol', 'Paphos'] },
        { name: 'USA', link: 'https://en.wikipedia.org/wiki/United_States', cities: ['New York City', 'Albany'] },
        { name: 'United Kingdom', link: 'https://en.wikipedia.org/wiki/United_Kingdom', cities: ['Canterbury', 'Dover'] },
        { name: 'Czech Republic', link: 'https://en.wikipedia.org/wiki/Czech_Republic', cities: ['Praha', 'Brno'] },
        { name: 'Croatia', link: 'https://en.wikipedia.org/wiki/Croatia', cities: ['Split', 'Trogir'] },
        { name: 'Bosnia', link: 'https://en.wikipedia.org/wiki/Bosnia_and_Herzegovina', cities: ['Mostar'] },
        { name: 'Switzerland', link: 'https://en.wikipedia.org/wiki/Switzerland', cities: ['Zurich', 'Geneva', 'Basel'] },
        { name: 'Belgium', link: 'https://en.wikipedia.org/wiki/Belgium', cities: ['Antwerp', 'Bouillon'] }
      ];

      const fetchFlag = async (countryName) => {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        const data = await response.json();
        return data[0].flags.png;
      };

      const countriesWithFlags = await Promise.all(
        countryData.map(async (country) => {
          const flag = await fetchFlag(country.name);
          return { ...country, flag };
        })
      );

      setCountries(countriesWithFlags);
    };

    fetchCountries();
  }, []);

  return (
    <div>
      <Map />
      <div className="travels-container">
        
      <h1 className='travelsTitle'>{t('travels')}</h1>
        <p className="travelsDesc">{t('travelsDescription')}</p>
        <div className="countries-wrapper">
          {countries.map((country, index) => (
            <Country key={index} {...country} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Travels;