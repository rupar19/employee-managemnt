import React from 'react';
export default function Header() {
    return (<div style={applicationStyling.container}>
        <div style={applicationStyling.header}>
            <h1 style={{ "marginTop": "40px", "fontSize": "40px" }}>Employee Management</h1>
        </div>

    </div>)
}

let applicationStyling = {
    "header": {
        "color": "white",
        "backgroundColor": "#35424a",
        "height": "150px",
        "textAlign": "center",
        "padding": "20px",
        "marginTop": "10px",
        "borderBottom": "#e8491d 3px solid"
    },
    "container": {
        "width": "80%",
        "margin": "auto",
        "padding": "5px"
    }


}