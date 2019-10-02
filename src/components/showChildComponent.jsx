import React from 'react';

class ChildComponent extends React.Component{
    render(){
        return(
            <>
            {this.props.name}
            {this.props.children}
            {this.props.children[0]}
            {this.props.children[1]}
            </>
        )
    }
}
export default class ShowChildComponent extends React.Component{
render(){
    return(
        <>
        <ChildComponent name ="Rupa">
            <h1>Hello World</h1>
            <h2>Hello Rupa</h2>
        </ChildComponent>
        </>
    )
}
}

