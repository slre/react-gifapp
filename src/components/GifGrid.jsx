import React, { useEffect, useState } from 'react'
import { ImageItem } from './ImageItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid  = ({category}) => {
  
   
    
    const { images, isLoading  } = useFetchGifs(category);
    return (
        <>
            <h1>{category}</h1>
            {
                // isLoading === true
                // ? ( <h2>Loading...</h2> )
                // : null

                isLoading && ( <h2>Loading...</h2> )
            }
            <h2></h2>
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