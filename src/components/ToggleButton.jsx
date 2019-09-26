import React from 'react';

export default class ToggleButton extends React.Component{
    constructor(){
        super();
        this.state={
            isToggleOn:true
        }

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(){
        this.setState({
            isToggleOn: !this.state.isToggleOn
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick} >
                {this.state.isToggleOn ? "ON" : "OFF"}
                </button>
            </div>
        )
    }
}