import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

export function Button({text, href, onClick=null}) {
    return (
        <div className='buttonContainer'>
            <Link to={href}>
                <button className='button' onClick={onClick}>{text}</button>
            </Link>
        </div>    
    )

}
