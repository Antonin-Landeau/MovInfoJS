import React, { useEffect, useState } from 'react'
import {searchMovieById} from './../Service/TMDB_services'
import "./../App.scss"

function Filmdetails({match}) {
    const [item, setitem] = useState({})

    useEffect(async () => {
        let details = await searchMovieById(match.params.id)
        setitem(details);
    },[item])


    return (
        <div className='main'>
            <h2>{item.title}</h2>
            <img src={`http://image.tmdb.org/t/p/w154${item.backdrop_path}`} alt="img"/>
        </div>
    )
}

export default Filmdetails
