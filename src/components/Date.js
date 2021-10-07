import React, {useState, useEffect} from 'react'
import axios from 'axios'

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
        <div className='date_container'>
            <p>{date}</p>
        </div>
    )

}