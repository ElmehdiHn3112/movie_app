import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';

const PopularPeople = () => {
    const [popularPeople, setpopularPeople] = useState([]);
    const [searchedData, setSearchedData] = useState([]);
    const [query, setQuery] = useState("")

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/person/popular?api_key=7ce2d7ff5c416c9e9a1816f95de69abe&language=en-US&page=1`)
            .then(res => {
                setpopularPeople(res.data.results)
                console.log("popular peoples => ", res.data.results)
            })
    }, [])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/person?api_key=7ce2d7ff5c416c9e9a1816f95de69abe&query=${query}`)
            .then(res => {
                setSearchedData(res.data.results)
            })
    }, [query])


    return (
        <>
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

            <div className='cards'>
                {
                    query === "" ?
                        popularPeople?.map(p => <div key={p.id} className="card">
                            <NavLink to={`/people/${p.id}`}>
                                <img className='people--img' src={`https://image.tmdb.org/t/p/w500/${p.profile_path}`} alt="" />
                            </NavLink>
                            <div style={{ padding: "10px" }}>

                                <h4> {p.name} </h4>
                                {
                                    p.known_for?.map(mv => <>
                                        {
                                            mv.name ?
                                                <span className='person--mv-title' key={mv.id}> {mv.name},</span>
                                                : ""
                                        }
                                        {
                                            mv.title ?
                                                <span className='person--mv-title'> {mv.title},</span>

                                                : ""
                                        }
                                    </>
                                    )
                                }
                            </div>


                        </div>)
                        :
                        searchedData?.map(p => <div key={p.id} className="card">
                            <NavLink to={`/people/${p.id}`}>
                                <img className='people--img' src={`https://image.tmdb.org/t/p/w500/${p.profile_path}`} alt="" />
                            </NavLink>
                            <div style={{ padding: "10px" }}>

                                <h4> {p.name} </h4>
                                {
                                    p.known_for?.map(mv => <>
                                        {
                                            mv.name ?
                                                <span className='person--mv-title' key={mv.id}> {mv.name},</span>
                                                : ""
                                        }
                                        {
                                            mv.title ?
                                                <span className='person--mv-title'> {mv.title},</span>

                                                : ""
                                        }
                                    </>
                                    )
                                }
                            </div>


                        </div>)
                }
            </div>

        </>
    )
}

export default PopularPeople