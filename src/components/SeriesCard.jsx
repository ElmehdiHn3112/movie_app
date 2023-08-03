import React from 'react'
import { Link } from 'react-router-dom';

const SeriesCard = (props) => {
    const data = props.data
    return (
        <>
            <div className='card'>

                <Link to={`/serie/${data.id}`}>
                    <div className='img-top'>
                        {/* <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${props.data.poster_path}`} alt="" /> */}
                        <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" />
                    </div>
                </Link>

                <div className='details'>

                    <div>
                        <h3>{data.name} </h3>
                    </div>
                    <div>
                        {/* <p>{data.overview} </p> */}
                    </div>
                    <div>
                        <span>{data.vote_average}/10 </span>
                    </div>
                    <div>
                        <span>{data.first_air_date}/10 </span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SeriesCard;