import React from 'react'
import PropTypes from 'prop-types';

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
ImageItem.propTypes = {
    title:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired

}