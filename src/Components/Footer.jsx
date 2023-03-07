import React from 'react'
import ImageShow from './Header';

const footer = ({ images }) => {

  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image}/>;
  });

  return (
    <div className='columns-4 gap-5 py-5'>
      {renderedImages}
    </div>
  )
}

export default footer

