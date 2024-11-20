import React from 'react'

export const ImageItem = ( {id,title,url} ) => {
    //console.log(url);
  return (
    <>
    <div className='card'>
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
    </>
    
  )
}
