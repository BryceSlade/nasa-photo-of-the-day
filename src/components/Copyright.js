import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components';

const StyleCopyright = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
`;

export default function Description() {
    const [copyright, setCopyright] = useState('')

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=zvONk4SkLwDdTd3fMTNxZSbiQO4lL1JHIaFr5ZBp')
    .then(response => {
        setCopyright(response.data.copyright)
    })
    .catch(error => {
        console.error(error)
    })
}, [])

    return (
        <div className='copyright_container'>
            <StyleCopyright> Credit: {copyright}</StyleCopyright>
        </div>
    )

}