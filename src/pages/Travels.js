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
    const countryData = [
      { name: 'France', link: 'https://en.wikipedia.org/wiki/France', cities: ['Paris', 'Reims', 'Lyon', 'Brest', 'Montpellier'], flag: `${process.env.PUBLIC_URL}/flags/fr.svg` },
      { name: 'Canada', link: 'https://en.wikipedia.org/wiki/Canada', cities: ['Québec', 'Montréal', 'Saguenay'], flag: `${process.env.PUBLIC_URL}/flags/ca.svg` },
      { name: 'Germany', link: 'https://en.wikipedia.org/wiki/Germany', cities: ['Munich'], flag: `${process.env.PUBLIC_URL}/flags/de.svg` },
      { name: 'Spain', link: 'https://en.wikipedia.org/wiki/Spain', cities: ['Madrid', 'Toledo', 'Valencia', 'Alicante'], flag: `${process.env.PUBLIC_URL}/flags/es.svg` },
      { name: 'Italy', link: 'https://en.wikipedia.org/wiki/Italy', cities: ['Roma', 'Firenze', 'Verona', 'Pisa'], flag: `${process.env.PUBLIC_URL}/flags/it.svg` },
      { name: 'Vatican', link: 'https://en.wikipedia.org/wiki/Vatican_City', cities: ['Vatican City'], flag: `${process.env.PUBLIC_URL}/flags/va.svg` },
      { name: 'Cyprus', link: 'https://en.wikipedia.org/wiki/Cyprus', cities: ['Nicosia', 'Limassol', 'Paphos'], flag: `${process.env.PUBLIC_URL}/flags/cy.svg` },
      { name: 'USA', link: 'https://en.wikipedia.org/wiki/United_States', cities: ['New York City', 'Albany'], flag: `${process.env.PUBLIC_URL}/flags/us.svg` },
      { name: 'United Kingdom', link: 'https://en.wikipedia.org/wiki/United_Kingdom', cities: ['Canterbury', 'Dover'], flag: `${process.env.PUBLIC_URL}/flags/gb.svg` },
      { name: 'Czech Republic', link: 'https://en.wikipedia.org/wiki/Czech_Republic', cities: ['Praha', 'Kutná Hora'], flag: `${process.env.PUBLIC_URL}/flags/cz.svg` },
      { name: 'Croatia', link: 'https://en.wikipedia.org/wiki/Croatia', cities: ['Split', 'Trogir'], flag: `${process.env.PUBLIC_URL}/flags/hr.svg` },
      { name: 'Bosnia', link: 'https://en.wikipedia.org/wiki/Bosnia_and_Herzegovina', cities: ['Mostar'], flag: `${process.env.PUBLIC_URL}/flags/ba.svg` },
      { name: 'Switzerland', link: 'https://en.wikipedia.org/wiki/Switzerland', cities: ['Zurich', 'Geneva', 'Basel'], flag: `${process.env.PUBLIC_URL}/flags/ch.svg` },
      { name: 'Belgium', link: 'https://en.wikipedia.org/wiki/Belgium', cities: ['Antwerp', 'Bouillon'], flag: `${process.env.PUBLIC_URL}/flags/be.svg` }
    ];

    const translatedCountryData = countryData.map(country => ({
      ...country,
      name: t(country.name),
      cities: country.cities.map(city => t(city))
    }));

    setCountries(translatedCountryData);
  }, [t]);

  return (
    <div>
      <Map />
      <div className="travels-container">
        <h1 className='travelsTitle'>{t('travels')}</h1>
        <div className="scroll-indicator">
          <span>&#x25BC;</span> {/* Down arrow */}
        </div>
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