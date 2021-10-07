import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';

const StyleTitleDiv = styled.div`
  padding-top: 7vh;
  padding-bottom: 3vh;
  display: flex;
  justify-content: center;
`;

const StyleTitle = styled.h2`
  width: 50%;
`;

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
    <StyleTitleDiv className='title_container'>
      <StyleTitle>{title}</StyleTitle>
    </StyleTitleDiv>
  )

}
