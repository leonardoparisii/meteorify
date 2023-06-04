import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import cities from '../../../data/shared/city.list.json'

function SearchBar({ fetchWeather, setCity, city }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    const { value } = e.target;
    setQuery(value);

    let matchingCities = [];

    if (value.length > 2) {
      for (let city of cities) {
        if (matchingCities.length >= 5) {
          break;
        }

        const match = city.name.toLowerCase().startsWith(value.toLowerCase());

        if (match) {
          matchingCities.push(city);
        }
      }
    }

    setResults(matchingCities);
  };

  const handleCityClick = (city) => {
    setCity(city);
    setQuery('');
    setResults([]);
    fetchWeather();
  };

  console.log(query)
  return (
    <div className='select-none'>
      <form onSubmit={() => handleCityClick(query)} className='mb-2 backdrop-blur-sm flex justify-between w-full px-3 py-2 bg-transparent border-[2px] border-gray-500 rounded-[6px]'>
        <div className='w-full'>
          <input
            onChange={onChange}
            value={query}
            type='text'
            placeholder='Search City'
            className='w-full bg-transparent focus:outline-none border-none box-border' />
        </div>
        <button onClick={() => handleCityClick(query)}><BsSearch /></button>
      </form>
      {query.length > 2 && (
        <ul className='bg-transparent border-[2px] border-gray-500 rounded-[6px] select-none'>
          {results.length > 0 ? (
            results.map((city, index) => (
              <li
                key={index}
                className='flex justify-between hover:bg-black/20 p-3 cursor-pointer'
                onClick={() => handleCityClick(city.name)}
              >
                {city.name}
                {city.state ? `, ${city.state}` : ''}
                <span>{city.country}</span>
              </li>
            ))
          ) : (
            <li className=''>No results found</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
