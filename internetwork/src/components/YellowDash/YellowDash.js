import React from 'react'
import './YellowDash.css';


function YellowDash({value, field}) {
  return (
    <div className='ycontainer'>
            <h1 className='bconttext'>
                {value} {field}
            </h1>
        </div>
  )
}

export default YellowDash