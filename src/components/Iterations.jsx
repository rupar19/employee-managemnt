import React from 'react';

export default class Iterations extends React.Component {
    constructor() {
        super();
        this.state = {
            empName: "",
            empAge: "",
            employeeDetails: [{
                name: "RR",
                age: 30,
                desig: "developer",
                salary: 1000,
                bonus: 500
            },
            {
                name: "BB",
                age: 30,
                desig: "developer",
                salary: 1000,
                bonus: 500
            },
            {
                name: "PP",
                age: 30,
                desig: "developer",
                salary: 1000,
                bonus: 500
            }
            ],
            isLoggedIn: true
        }
    }

    addNewEmployee() {
        this.setState({
            employeeDetails: [{
                name: this.state.empName,
                age: this.state.empAge,
                desig: "teacher",
                salary: 2000,
                bonus: 300
            }, ...this.state.employeeDetails],
            empName: "",
            empAge: ""
        })
    }

    addNewEmpName(event) {
        this.setState({
            empName: event.target.value
        })

    }

    addNewEmpAge(event){
        this.setState({
            empAge:event.target.value
        })
    }



    render() {
        const empArray = this.state.employeeDetails.map((employee) => {
            return (
                <div key={employee.name}>
                    <input type="text " />
                    <div><b>Employee Name:</b>{employee.name}</div>
                    <div><b>Employee Age:</b>{employee.age} </div>
                    <div><b>Employee Desig:</b>{employee.desig} </div>
                    <div><b>Employee Salary:</b> {employee.salary} </div>
                    <div><b>Employee Bonus:</b> {employee.bonus}</div><br /><br /><br /><br />
                </div>
            )
        })


        return (
            <div>
                {this.state.isLoggedIn === true && <ul>{empArray} </ul>}
                {this.state.isLoggedIn === false && <h2>Please login employee details</h2>}
                <label>New Employee Name :
                <input type="text" value={this.state.empName} onChange={this.addNewEmpName.bind(this)} /><br /><br />
                </label>
                <label>New Employee Age :
                <input type="text" value={this.state.empAge} onChange={this.addNewEmpAge.bind(this)} /><br /><br />
                </label>
                <input type="button" value="Add New Employee" onClick={this.addNewEmployee.bind(this)} />
            </div>


        )
    }
}