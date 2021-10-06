import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Title() {
  const [title, setTitle] = useState('')

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=zvONk4SkLwDdTd3fMTNxZSbiQO4lL1JHIaFr5ZBp')
    .then(response => {
      // console.log(response);
      setTitle(response.data.title)
    })
    .catch(error => {
      console.error(error);
    })
  }, [])

  return (
    <div className='title_container'>
      <h1>{title}</h1>
    </div>
  )

}
