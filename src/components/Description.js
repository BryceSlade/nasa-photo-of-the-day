import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components';

const StyleDesc = styled.div`
    display: flex;
    justify-content: center;

    p {
        border: 1px solid black;
        width: 50%;
        padding: 2vh;
    }
`;

export default function Description() {
    const [desc, setDesc] = useState('')

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=zvONk4SkLwDdTd3fMTNxZSbiQO4lL1JHIaFr5ZBp')
    .then(response => {
        setDesc(response.data.explanation)
    })
    .catch(error => {
        console.error(error)
    })
}, [])

    return (
        <StyleDesc className='desc_container'>
            <p>{desc}</p>
        </StyleDesc>
    )

}