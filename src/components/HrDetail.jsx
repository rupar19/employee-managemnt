import React from 'react';

export default class HrDetail extends React.Component {

    constructor() {
        super();
        this.state = { name: "AA", age:30, desig: "HR Manager" }
        setTimeout(() => {
            this.setState({ name: "BBB" })
        }, 2000)

    }
    render() {
        
        return (
            <div>
                <p>Her name is {this.state.name}, she is {this.state.age} years old and she is {this.state.desig}</p>
            </div>

        )
    }
}