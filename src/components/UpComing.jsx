import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from './Cards';

const UpComing = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=7ce2d7ff5c416c9e9a1816f95de69abe&language=en-US&page=1")
            .then(res => {

                setData(res.data.results)
                console.log("data=> ", res.data)

            })
    }, [])

    return (
        <div>
            <Cards data={data} />
        </div>
    )
}

export default UpComing