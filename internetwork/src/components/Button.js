import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export function Button({text, href}) {
    return (
        <div className='buttonContainer'>
            <Link to={href}>
                <button className='button'>{text}</button>
            </Link>
        </div>    
    )

}
