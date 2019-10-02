import React,{lazy,Suspense} from 'react';
var LoadedComponent = null;

export default class LazyLoading extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Rupa"
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                name:"Rishi"
            })

        },5000)
    }

render(){
    if(this.state.name === "Rupa"){
        LoadedComponent = lazy(()=> import ('./HomeComponent'))
    }else{
        LoadedComponent = lazy(()=>import('./ContactComponent'))
    }
    return (
        <Suspense fallback={<b>Loading...</b>}>
        <LoadedComponent />
        </Suspense>
    )
}
}