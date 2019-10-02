import React, { useState } from 'react';

export default function employeeDetail() {
    const [name] = useState("rupa");
    const [age, setAge] = useState(30);
    const [desig] = useState("developer");

    function updateAge() {
        setAge(age + 1);
    }
    return (
        <>
            <p>Name : {name}</p>
            <p>Age : {age} </p>
            <p>Dssignation : {desig}</p>
            <input type="button" value="Update Age" onClick={updateAge} />
        </>
    )

}

