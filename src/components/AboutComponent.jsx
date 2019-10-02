import React from 'react';
import {Link,Router} from 'react-router-dom';

export default function AboutComponent() {
    return (

        <div>
            <h1>List of Employees: </h1>
            
            <Link to="/employee1">Employee1</Link><br /><br />
            <Link to="/employee2">Employee2</Link><br /><br />
            <Link to="/employee3">Employee3</Link><br /><br />
           
                     
        </div>



    )
}
