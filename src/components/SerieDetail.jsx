import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Trailer } from './exempleYoutube';

const SeriDetail = (props) => {
    const { id } = useParams();

    const [movieData, setMovieData] = useState({});
    const [movieCredits, setMovieCredits] = useState([]);
    const [movieCrew, setMovieCrew] = useState([]);
    const [movieCertif, setMovieCertif] = useState("");
    const [socialLinks, setSocialLinks] = useState({});
    const [movieTrailer, setMovieTrailer] = useState([]);
    const [isShownTrailer, setIsShownTrailer] = useState(false);
    const [keywords, setKeywords] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [recomandations, setRecomandations] = useState([]);

    // fetch the serie details
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=7ce2d7ff5c416c9e9a1816f95de69abe&language=en-US`)
            .then(res => {
                setMovieData(res.data)
                console.log("data =>", res.data);
            }

            );

    }, [id])

    // fetch certif
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/tv/${id}/content_ratings?api_key=7ce2d7ff5c416c9e9a1816f95de69abe&language=en-US`)
            .then(res => {
                const result = res.data.results.filter(c => c.iso_3166_1 === "US");
                setMovieCertif(result[0].rating)

            })
    }, [id])

    // get movie crew
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=7ce2d7ff5c416c9e9a1816f95de69abe&language=en-US`)
            .then(res => {

                return (
                    setMovieCredits(res.data.cast.slice(0, 10)),
                    setMovieCrew(res.data.crew.slice(0, 5))

                )

            }
            )
    }, [id]);



    // get reviews
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/tv/${id}/reviews?api_key=7ce2d7ff5c416c9e9a1816f95de69abe&language=en-US`)

            .then(res => {
                setReviews(res.data.results);
                console.log("reviews =>", res.data.results);
            })
    }, [id])

    // get recomandations
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=7ce2d7ff5c416c9e9a1816f95de69abe&language=en-US&page=1`)
            .then(res => {
                setRecomandations(res.data.results);
                console.log("recomandations =>", res.data.results);
            })
    }, [id])

    // get trailer
    // https://api.themoviedb.org/3/tv/119051/videos?api_key=7ce2d7ff5c416c9e9a1816f95de69abe&language=en-US
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=7ce2d7ff5c416c9e9a1816f95de69abe&language=en-US`)
            .then(res => {
                // console.log("tarilers =>", res.data.results)
                const trailers = res.data.results.filter(v => v.type === 'Trailer');
                console.log('trailer =>', trailers[0])
                setMovieTrailer(trailers[0]);
            })

    }, [id])



    const [randomIndex, setRandomIndex] = useState(0);
    const get_random_index = () => {
        const random = Math.ceil(Math.random() * reviews.length);
        setRandomIndex(random)
    }


    return (
        <>
            <div className='card--container'
                style={{
                    backgroundImage: `url(https:image.tmdb.org/t/p/original/${movieData.backdrop_path})`,
                    // backgroundRepeat: "no-repeat",
                    // backgroundImage: "linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.84) 30%, rgba(31.5, 31.5, 31.5, 0.84) 100%)"


                }}>
                <div className='row'>
                    <div className='moviedetail--card'>


                        <div className='img-top'>
                            <img src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} alt="" />
                        </div>


                    </div>

                    <div className='details'>
                        <div>
                            <h1 style={{ marginTop: "0" }}>{movieData.name}
                                <span className='movie--release_date'> ({movieData.first_air_date ? movieData['first_air_date'].slice(0, 4) : ""})</span>
                            </h1>
                        </div>

                        <div style={{ marginBottom: "15px" }}>

                            {
                                movieCertif ?
                                    <span className='movie--certif'>
                                        {movieCertif}
                                    </span>
                                    :
                                    ""
                            }

                            <span className='genres'>
                                {

                                    movieData.genres ?
                                        movieData.genres.map((g, index) => {

                                            return (
                                                <span key={index}>{g.name}{index !== movieData.genres.length - 1 ? "," : ""}</span>

                                            )

                                        }
                                        )
                                        : ""
                                }
                            </span>




                            <div
                                style=
                                {{ display: "flex", alignItems: "center", gap: "30px", marginTop: "10px" }}


                            >
                                <div className='movie--rate'>
                                    <span>{parseFloat(movieData.vote_average).toFixed(1)}/10  </span>
                                    <img style={{ width: "20px" }} src={require("../images/etoile.png")} alt="" />
                                </div>
                                <div className='trailer-btn' onClick={() => setIsShownTrailer(true)}>
                                    <img src={require('../images/play-btn.png')} alt="" />
                                    <span>Play Trailer</span>
                                </div>
                            </div>


                            <div className='movie--tagline'>
                                <h3>{movieData.tagline}</h3>
                            </div>

                            <div>
                                <h3>Overview</h3>
                                <p> {movieData.overview} </p>
                            </div>


                            <div className='movie--crew'>
                                {
                                    movieCrew.map(c => {
                                        return <div className='crew--person'>
                                            <span className='crew--person--name'> {c.original_name} </span>
                                            <span className='crew---person--job'> {c.job} </span>

                                        </div>

                                    }
                                    )
                                }
                            </div>

                        </div>
                    </div>


                </div>


            </div>

            <div className='section2'>

                <h2 className='cast--title'>Top Billed Cast</h2>
                <div className="section">


                    <div className="cast--container">
                        <div className="cast--container--row">


                            {

                                movieCredits ?
                                    movieCredits.map(c => {
                                        return (
                                            <div className='cast'>
                                                {
                                                    c.profile_path ?
                                                        <NavLink to={`/people/${c.id}`}>

                                                            <img src={`https://image.tmdb.org/t/p/w500/${c.profile_path}`} alt="" />
                                                        </NavLink>
                                                        :
                                                        <img src={require('../images/anonymous.jpg')} alt="" />

                                                }
                                                <div className='cast--footer'>
                                                    {c.name}

                                                </div>

                                            </div>
                                        )

                                    }
                                    )
                                    : ""
                            }
                        </div>

                    </div>

                    <div className="right-side">


                        {
                            socialLinks.facebook_id !== null ?

                                <div className='social-media--container'>
                                    <a href={`https://www.facebook.com/${socialLinks.facebook_id}`}> <img src={require("../images/facebook.png")} alt="" /> </a>
                                    <a href={`https://www.instagram.com/${socialLinks.instagram_id}`}> <img src={require("../images/instagram.png")} alt="" /> </a>
                                    <a href={`https://twitter.com/${socialLinks.twitter_id}`}> <img src={require("../images/twitter-sign.png")} alt="" /> </a>
                                    <a href={`${movieData.homepage}`}> <img src={require("../images/link.png")} alt="" /> </a>
                                </div>
                                :
                                ""
                        }
                        <div className="status">
                            <span>status</span>
                            <span> {movieData.status} </span>
                        </div>

                        <div className="language">
                            <span>Original Language</span>
                            <span> {movieData.original_language} </span>
                        </div>
                        <div className="budget">
                            <span>Budget</span>
                            <span> ${parseFloat(movieData.budget).toLocaleString()} </span>
                        </div>

                        <div className="revenue">
                            <span>revenue</span>
                            <span> ${parseFloat(movieData.revenue).toLocaleString()} </span>
                        </div>
                        <div className="keywords--container">
                            <span>keywords</span>
                            <div className='keywords'>
                                <ul>
                                    {keywords.map(k => <li className='keyword' key={k.id}> {k.name} </li>)}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className='reviews--container'>
                <h3 style={{ cursor: "pointer" }} onClick={get_random_index} >reviews</h3>
                <div className='review-box'>
                    <div>
                        <div className='review--name-rate'>
                            <h2>A review by
                                {
                                    reviews[randomIndex] ?

                                        <span> {reviews[randomIndex].author} </span>
                                        : ""
                                }
                            </h2>
                            <div className='review--rate'>

                                <img style={{ marginRight: "5px" }} width={15} src={require("../images/etoile.png")} alt="" />
                                <span>
                                    {
                                        reviews[randomIndex] ?
                                            reviews[randomIndex].author_details.rating : ""
                                    }/10

                                </span>

                            </div>
                        </div>
                    </div>
                    <div className='review--date'>
                        {
                            reviews[randomIndex] ?
                                <span>  written on {reviews[randomIndex].updated_at.slice(0, 10)}
                                </span>
                                : ""
                        }
                    </div>
                    <div className='review--content'>
                        {
                            reviews[randomIndex] ?
                                reviews[randomIndex].content
                                : "no content to show"

                        }
                    </div>
                </div>
            </div>



            <div className="padding">


                <h2>Recomandations</h2>
                <div className="recomandations">
                    <div className='recomandations--boxs'>


                        {
                            recomandations[0] ?
                                recomandations.map(r => <div className='recomandation'>
                                    <NavLink to={`/serie/${r.id}`}>

                                        <img src={`https://image.tmdb.org/t/p/w500/${r.backdrop_path}`} alt="" />
                                    </NavLink>
                                    <div className='recomandation--flex'>
                                        <span>{r.name}</span>
                                        <span>{parseFloat(r.vote_average).toFixed(1)}</span>
                                    </div>

                                </div>)
                                :
                                ""
                        }
                    </div>
                </div>
            </div>



            {
                isShownTrailer ?
                    <>

                        <div className='movie--trailer_video'>
                            <div className='trailer--container'>
                                {
                                    movieTrailer ?

                                        <Trailer youtube_key={movieTrailer.key} />
                                        :
                                        ""
                                }

                            </div>
                            <img className='close--trailer-btn' onClick={() => setIsShownTrailer(false)} src={require("../images/close.png")} alt="" />
                        </div>
                    </>
                    :
                    ""
            }



        </>

    )
}


export default SeriDetail