import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
    const data = props.data
    return (
        <>
            <div className='card'>



                <Link to={`/${data.id}`}>
                    <div className='img-top'>
                        {/* <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${props.data.poster_path}`} alt="" /> */}
                        <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" />
                    </div>
                </Link>

                <div className='details'>

                    <div>
                        <h3>{data.title} </h3>
                    </div>
                    <div>
                        {/* <p>{data.overview} </p> */}
                    </div>
                    <div className='vote_rate'>

                        <span >{parseFloat(data.vote_average)} </span>
                        <img src={require("../images/etoile.png")} alt="" />
                    </div>


                    <span className='release_date'>{data?.release_date?.slice(0, 4)} </span>

                </div>


            </div>
        </>
    )
}

export default Card;