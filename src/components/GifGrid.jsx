import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { ImageItem } from './ImageItem';

const GifGrid  = ({category}) => {
  
    const [images, setImages] = useState([]);

    const getImages = async()=>{
        const newImages = await getGifs( category );
        setImages(newImages);
    }
    useEffect(() => {
        getImages();
    }, [])
    
    //console.log(images);
    return (
    <>
      <h5>{category}</h5>
      <div className='card-grid'>
        {images.map((img) => (
        <ImageItem 
            key={img.id} 
            //title={img.title} 
            //url={img.url.url}
            { ...img}  
        />
      ))}
      </div>
      
    </>
  );
}

export default GifGrid