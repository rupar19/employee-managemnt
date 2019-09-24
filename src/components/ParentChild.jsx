import React from 'react';

export default class Parent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Rupa"
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: this.state.name + "."
            })
        }, 1000)
    }
    render() {
        console.log("Re-rendred ")
        return (
            <div>
                <b>User name : {this.state.name}</b>
                <Child name={this.state.name} />

            </div>


        )
    }
}

export class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newName: props.name + "----"
        }
    }

    // static getDerivedStateFromProps(props) {
    //     return {
    //         newName: props.name + " !!!!"
    //     }
    // }
    render() {
        console.log("child component re-render")
        return (
            <div>
                <b> The data from Parent component : {this.state.newName} </b>

            </div>
        )
    }
}