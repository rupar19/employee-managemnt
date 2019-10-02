import React from 'react';

export default class ManagerDetail extends React.Component {
    constructor() {
        super();
        this.state = {};

        
        setInterval(()=>{
            this.setState({name: "RR",desig: "Manager",dept: "IT"})
        },2000)

    }

    render() {
        

        return (
            <div>
                <p>{this.state.name } is {this.state.desig} and she is from {this.state.dept} department</p>
            </div>

        )
    }
}