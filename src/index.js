import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeDetail from './components/EmployeeDetail';
import HrDetail from './components/HrDetail';
import ManagerDetail from './components/ManagerDetail';

// function Clock() {

//     var timeInfo = new Date().toTimeString();

//     setInterval(() => {
//         timeInfo = new Date().toTimeString()
//     }, 1000);

//     return <b>{timeInfo}</b>;

// }

setInterval(()=>{
    new Date().toTimeString()
    ReactDOM.render(

        <div>
            {/* <Clock /><br></br> */}
            <EmployeeDetail name="Rupa" />
            <HrDetail />
            <ManagerDetail />
    
        </div>, document.getElementById("root"));

},1000)
    






