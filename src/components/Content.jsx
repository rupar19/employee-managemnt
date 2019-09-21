import React from 'react';

export default function Content(props) {

    return (<div style={applicationStyling.container}>
        <div style={applicationStyling.content} >
            <h3>The Content section ... Name is {props.name} and
               she is {props.age} years old. By profession she is {props.desig}</h3>
            <p>It is a long established fact that a reader will be distracted
           by the readable content of a page when looking at its layout. The point
           of using Lorem Ipsum is that it has a more-or-less normal distribution
           of letters, as opposed to using 'Content here, content here', making it
           look like readable English. Many desktop publishing packages and web
           page editors now use Lorem Ipsum as their default model text, and a
           search for 'lorem ipsum' will uncover many web sites still in their infancy
             </p>

        </div>

    </div>
    )
}

let applicationStyling = {
    "content": {
        "color": "#000000",
        "backgroundColor": "#f4f4f4",
        "height": "200px",
        "padding": "20px",
        "marginTop": "-9px"
    },
    "container": {
        "width": "80%",
        "margin": "auto",
        "padding": "5px"
    }
}