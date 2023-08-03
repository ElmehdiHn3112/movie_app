import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from './Cards'

const Anime = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=7ce2d7ff5c416c9e9a1816f95de69abe&language=en-US&page=1&with_genres=16&with_keywords=210024|287501&with_text_query=death')
            .then(res => setData(res.data.results))
    }, [])
    console.log(data)
    return (
        <div>
            <Cards data={data} />
        </div>
    )
}

export default Anime