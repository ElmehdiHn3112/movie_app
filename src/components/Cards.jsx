import React from 'react'
import Card from "./Card";

const Cards = (props) => {
    return (
        <div className='cards'>
            {
                props.data.map(m => <Card key={m.id} data={m} />)
            }

        </div>
    )
}

export default Cards    