import React from 'react';
import { useState } from 'react';

const SearchBar = ( { onSubmit } ) => {

  const [term, setTerm] = useState('');

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term)
  };

  return (
    <div className='container-fluid flex flex-col justify-center items-center bg-amber-400 h-64'>
      <h1 className='text-5xl font-display'>find yourself in the chaos.</h1>
      <form onSubmit={onFormSubmit} className="flex items-center">   
          <label for="simple-search" className="sr-only">Search</label>
          <div className="relative w-full">
              <input placeholder='search' value={term} onChange={handleChange} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-20 pr-80 p-2.5 my-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
          </div>
      </form>
    </div>
    
  )
}

export default SearchBar