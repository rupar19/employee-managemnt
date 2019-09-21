import React from 'react';

export default class EmployeeDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: this.props.name, age:20 , desig : "student" }

        setInterval(() => {
            this.setState({ age: this.state.age +1 , desig :"developer" })
        }, 1000);

    }

    render() {
        

        return (
            <div>
                <b> Employee Details :</b>
                <p>Employee name is {this.state.name}, age is {this.state.age} and she is  {this.state.desig} </p>
            </div>
        )
    }
}