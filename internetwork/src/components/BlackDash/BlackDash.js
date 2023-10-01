import React from 'react'
import './BlackDash.css';


function BlackDash({ value, field }) {
    return (
        <div className='blackcontainer'>
            <h1 className='conttext'>
                {value} {field}
            </h1>
        </div>
    )
}

export default BlackDash