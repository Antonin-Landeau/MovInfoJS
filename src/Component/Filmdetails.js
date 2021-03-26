import React, { useEffect, useState } from 'react'
import {searchMovieById} from './../Service/TMDB_services'

function Filmdetails({match}) {
    const [item, setitem] = useState({})

    useEffect(async () => {
        let details = await searchMovieById(match.params.id)
        console.log(details);
        setitem(details);
    },[])
    return (
        <div>
            <h2>{item.title}</h2>
            <img src={`http://image.tmdb.org/t/p/w154${item.backdrop_path}`} alt=""/>
        </div>
    )
}

export default Filmdetails
