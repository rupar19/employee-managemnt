import React from 'react';
import {Link} from 'react-router-dom';

export default function Employee2(){
    return(
        <>
        <h2>This is about Employee2 :</h2>
        <b>Name : Rishi</b> <br/>
        <b> Desig :Student</b> <br/>
        <b>Age : 10</b><br /><br />
        <Link to = "/about">Back</Link>

        </>
    )
}