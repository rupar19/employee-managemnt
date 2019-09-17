import React from 'react';
import ReactDOM from 'react-dom';

function Header(){
    return (<div style={applicationStyling.container}>
             <div  style={applicationStyling.header}>
             <h1 style={{"marginTop":"40px", "fontSize":"40px"}}>Employee Management</h1>
             </div>
    
    </div>)
}
function Content(props){
    props.detail.desig= "teacher";
    return (<div style={applicationStyling.container}>
              <div style={applicationStyling.content} >
              <h3>The Content section ... Name is {props.name} and she is {props.detail.desig}</h3>
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

    )}
function Footer(){
    return (<div style={applicationStyling.container}>
        <div style={applicationStyling.footer}>
    <h1 style={applicationStyling.footerContent}>Copyright @ 2019</h1>
    </div>
    </div>
        )
}

let user = {
    name:"Mukta",
    desig: "Student"
}

let applicationStyling = {
    "header":{
        "color": "white",
        "backgroundColor":"#35424a",
        "height" : "150px",
        "textAlign": "center",
        "padding":"20px",
        "marginTop":"10px",
        "borderBottom": "#e8491d 3px solid"
    },
    "footer":{
        "color": "white",
        "backgroundColor":"#35424a",
        "height" : "50px",
        "textAlign": "center",
        "padding":"20px",
        "marginTop":"-9px",
    },
    "content":{
        "color":"#000000",
        "backgroundColor": "#f4f4f4",
        "height" : "200px",
        "padding":"20px",
        "marginTop":"-9px"
    },
    "container":{
        "width": "80%",
        "margin": "auto",
        "padding": "5px"
    },
    "footerContent":{
        "fontSize":"16px"
    }
}
ReactDOM.render(<div>
    <Header /> 
    <Content name = "Rupa" desig = "Developer" detail={user}  />
    <Content name = "Ruma" detail = {user}  />
     <Footer />
     </div>,
    document.getElementById("root"));

