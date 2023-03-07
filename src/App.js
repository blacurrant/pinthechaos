import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SearchBar from './Components/Nav';
import searchImages from './Components/Api';
import './index.css'


const App = () => {

  const [images, setImages] = useState([]);

  const handleSubmit = async(term) => {
    const result = await searchImages(term);

    setImages(result);
  }

  return (
    <div className='container mx-auto'>
      <SearchBar onSubmit={handleSubmit} />
      <Footer images={images} />
    </div>
  )
}

export default App
