import React from 'react';

export default class Lifecycle extends React.Component {

    constructor() {
        super()

        this.state = {
            name:"RR",
            date: new Date()
        }
        console.log("Constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        setInterval(() => {
            this.setState({ date: new Date()})
        }, 1000)
        this.setState({ name: "Rupa" });
        this.setState({ name: "Roy" });
        
            
        

            }

    componentDidUpdate() {
        console.log("component did update");
    //    setTimeout(() => {
    //         this.setState({ name: "rrrrr" });
    //     }, 5000) 
        

    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("componentshouldupdate");
        if (nextState.date !== this.state.date) {
            return true;
        }
        return false;

    }

    render() {
        console.log("render")
        return (
            <div>
                {this.state.date.toTimeString().toString()}
                <br />
                {this.state.name}
            </div>
        )

    }
}