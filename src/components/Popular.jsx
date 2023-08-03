import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from './Cards';

const Popular = () => {
    const [query, setQuery] = useState("")
    const [searedData, setSearchedData] = useState([]);
    const [data, setData] = useState([])
    /* popular movies */
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=7ce2d7ff5c416c9e9a1816f95de69abe`)
            .then(res => {
                setData([...res.data.results])
            }
            )
    }, [])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7ce2d7ff5c416c9e9a1816f95de69abe&query=${query}`)
            .then(res => {
                setSearchedData(res.data.results)
            })
    }, [query])

    return (
        <div>
            <div className='flex'>

                <span>

                </span>
                {/* <input type="text" placeholder='search...' onChange={(e) => setQuery(e.target.value)} /> */}
                {/*  */}
                <form className="form">
                    <button>
                        <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search" >
                            <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                    <input className="input" placeholder="Search..." required="" type="text" onChange={(e) => setQuery(e.target.value)} />
                    <button className="reset" type="reset">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </form>






                {/*  */}


            </div>
            {
                query === "" ?
                    <Cards data={data} />
                    :
                    <Cards data={searedData} />

            }
        </div>
    )
}

export default Popular