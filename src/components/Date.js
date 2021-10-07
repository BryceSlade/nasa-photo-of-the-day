import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components';

const StyleDate = styled.div`
    width: 45%;
    // border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        font-size: 1.6rem;
        color: white;
        font-family: 'Oswald', sans-serif;
    }
`;

export default function Date() {
    const [date, setDate] = useState('')

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=zvONk4SkLwDdTd3fMTNxZSbiQO4lL1JHIaFr5ZBp')
    .then(response => {
        setDate(response.data.date)
    })
    .catch(error => {
        console.error(error)
    })
}, [])

    return (
        <StyleDate className='date_container'>
            <p>{date}</p>
        </StyleDate>
    )

}