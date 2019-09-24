import React from 'react';

export default class HandlingEvents extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            text: "Hello"
        }
        this.incrementCounter = this.incrementCounter.bind(this);
        this.changeText = this.changeText.bind(this);
    }

    incrementCounter() {
        this.setState({
            counter: this.state.counter + 1
        })
        this.refs.uncontrolledButton.focus();
        this.refs.uncontrolledElemenet.value = "Hello Rupa";
    }

    changeText(event) {
        this.setState({
            text: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Counter : {this.state.counter}</h1>
                <input type="text" value={this.state.text} onChange={this.changeText} /> <br /><br />
                <input type = "text" ref="uncontrolledElemenet" /> <br /><br />
                <input type="button"  value="Update Counter"  ref="uncontrolledButton" onClick={this.incrementCounter} /> <br /> <br />
                
            </div>
        )
    }
}


