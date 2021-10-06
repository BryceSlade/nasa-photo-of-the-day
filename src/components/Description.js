import React, {useState, useEffect} from 'react'
import axios from 'axios'

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
        <div className='desc_container'>
            <p>{desc}</p>
        </div>
    )

}