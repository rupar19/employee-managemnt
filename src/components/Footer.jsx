import React from 'react';

export default function Footer() {
    return (<div style={applicationStyling.container}>
        <div style={applicationStyling.footer}>
            <h1 style={applicationStyling.footerContent}>Copyright @ 2019</h1>
        </div>
    </div>
    )
}

let applicationStyling = {
    "footer": {
        "color": "white",
        "backgroundColor": "#35424a",
        "height": "50px",
        "textAlign": "center",
        "padding": "20px",
        "marginTop": "-9px",
    },
    "container": {
        "width": "80%",
        "margin": "auto",
        "padding": "5px"
    },

    "footerContent": {
        "fontSize": "16px"
    }
}