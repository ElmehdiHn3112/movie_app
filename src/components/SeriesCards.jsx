import React from 'react'
import SeriesCard from './SeriesCard';

const SeriesCards = (props) => {
    return (
        <div className='cards'>
            {
                props.data.map(m => <SeriesCard key={m.id} data={m} />)
            }

        </div>
    )
}

export default SeriesCards