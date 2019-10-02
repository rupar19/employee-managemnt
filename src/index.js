import React from 'react';
import ReactDOM from 'react-dom';
//import higherOrderFunction from './components/higherOrderComponent';
//import highOrderFunction from './components/higherOrderComponentPractise';
//import FormFunction from './components/formFunctions';
//import employeeDetail from './components/hookComponent';
import ApplicationComponent from './components/shallowRendering';
// class GeneralDept extends React.Component {
//     render() {
//         return (
//             <>
//                 <b> Name : {this.props.stdData.name} </b>
//                 <br />
//                 <b> Subject : {this.props.stdData.subject}</b>
//             </>
//         )
//     }
// }

// class GradeDept extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             class: "Year 12"
//         }
//     }
//     render() {
//         return (
//             <>
//                 <b> Grade : {this.props.stdData.grade} </b> <br />
//                 <b>Class : {this.state.class}</b>
//             </>
//         )
//     }
// }

// class Address extends React.Component {
//     render() {
//         return (
//             <>
//                 Flat Number :{this.props.address.flatNo} <br />
//                 Road Name: {this.props.address.road} <br />

//             </>
//         )
//     }
// }

// class PostalAddress extends React.Component {
//     render() {
//         return (
//             <>
//                 Zip Code :{this.props.address.zip}<br />
//                 City : {this.props.address.city} <br />
//                 Borough : {this.props.address.borough} <br />
//             </>
//         )
//     }
// }

// var ShowAddress = highOrderFunction(Address, PostalAddress);

// var FirstComponent = higherOrderFunction(GeneralDept, GradeDept)

ReactDOM.render(<ApplicationComponent  />, document.getElementById("root"));


















// function Clock() {

//     var timeInfo = new Date().toTimeString();

//     setInterval(() => {
//         timeInfo = new Date().toTimeString()
//     }, 1000);

//     return <b>{timeInfo}</b>;

// }

// function userName(user) {
//     return user.firstName + " " + user.lastName;
// }

// const user = {
//     firstName: "Rupa",
//     lastName: "Roy"
// };

// const fullName = (
//     <div>
//         <h1> Hello ,{userName(user)}! </h1>
//         <br />
//     </div>

// )





















