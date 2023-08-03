import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const People = () => {
    const { id } = useParams();
    const [personDeatail, setPersonDeatail] = useState({});
    const [personMovies, setPersonMovies] = useState([]);

    // get person detail
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=7ce2d7ff5c416c9e9a1816f95de69abe&language=en-US`)
            .then(res => {
                setPersonDeatail(res.data)
                console.log("person data => ", res.data)
            }
            )
    }, [id])

    // get movies the perton act on

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=7ce2d7ff5c416c9e9a1816f95de69abe&language=en-US`)
            .then(res => {
                const arr = res.data
                setPersonMovies(res.data.cast.slice(0, 10))
                console.log("person movies => ", arr);
            })

    }, [id])
    // https://api.themoviedb.org/3/search/person?api_key=7ce2d7ff5c416c9e9a1816f95de69abe&query=jas

    function get_current_age(birth) {
        const year = new Date().getFullYear()
        // const age = year - parseInt(birth.slice(0, 4));
        // return age
    }

    return (
        <>

            <div className='person--cont padding'>


                <div>
                    <div className='person--img'>
                        <img src={`https://image.tmdb.org/t/p/w500/${personDeatail?.profile_path}`} alt="" />
                    </div>
                    <div>
                        <h3 style={{ fontSize: "1.4rem" }}>personal info</h3>
                        <div>
                            <span className='bold'>know for</span>
                            <div> {personDeatail?.known_for_department} </div>
                        </div>
                        <div>
                            <span className='bold'>gender</span>
                            <div> {personDeatail?.gender === 2 ? "male" : "female"} </div>
                        </div>

                        <div>
                            <span className='bold'>birthday</span>
                            <div> {personDeatail?.birthday} ({get_current_age(personDeatail?.birthday)} years old)  </div>
                        </div>

                        <div>
                            <span className='bold'>place of birth</span>
                            <div> {personDeatail?.place_of_birth}  </div>
                        </div>

                        <div>
                            <span className='bold'>also known as</span>
                            <div> {personDeatail?.also_known_as?.map((n, index) => <div key={index} > {n} </div>)}  </div>
                        </div>
                    </div>
                </div>

                <div>

                    <div>
                        <h1> {personDeatail?.name} </h1>
                    </div>
                    <div>
                        <h3>biography</h3>
                        <p> {personDeatail?.biography} </p>
                    </div>

                    <div>
                        <h3>known for</h3>

                        <div className='person--movies--cont'>
                            <div className='person--movies'>
                                {
                                    personMovies?.map((m, index) => <div key={index}>
                                        <div >
                                            <NavLink to={`/${m.id}`} >
                                                <img src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`} alt="" />
                                            </NavLink>
                                        </div>
                                        <span> {m.title} </span>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default People