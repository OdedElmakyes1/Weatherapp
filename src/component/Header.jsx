import React, {useState} from 'react'
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';

export default function Header(props) {
    return (
        <div>
            <h1>Weather App</h1>
            <Link style={{textDecoration:'none',border:'solid 2px black'}} to ='/'><Button className='border'>home</Button></Link>
            <Link style={{textDecoration:'none',border:'solid 2px black'}} to ='/Favorites'><Button className='border' onClick={props.telAvivCallFunc}>favorites</Button></Link>
        </div>
    )
}
