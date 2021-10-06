import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Image() {
  const [image, setImage] = useState('')

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=zvONk4SkLwDdTd3fMTNxZSbiQO4lL1JHIaFr5ZBp')
    .then(response => {
      // console.log(response);
      setImage(response.data.url)
    })
    .catch(error => {
      console.error(error);
    })
  }, [])

  return (
    <div className='img_container'>
      <img src={image} alt='Nasa Image'></img>
    </div>
  )

}
