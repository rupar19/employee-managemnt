import React from 'react';
import {Link} from 'react-router-dom';

export default function Employee1(props){
    debugger;
    return(
        <>
        <h2>This is about Employee1 :</h2>
        <b>Name : Rupa</b> <br/>
        <b> Desig : Developer</b> <br/>
        <b>Age : 30</b> <br /> <br />
        <Link to = "/about">Back</Link>

        </>
    )
}