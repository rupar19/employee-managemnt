import React from 'react';

function empDetails() {
    return ([{
        name: "RR",
        age: 20,
        desig: "developer"

    },
    {
        name: "RR",
        age: 20,
        desig: "developer"

    }
]
    )
}

export default class Practise extends React.Component {
    constructor() {
        super();
        this.state = {
            empData: empDetails()
        }
    }

    render() {
        var data = this.state.empData.map((emp)=>{
            return(
                <div>
                   <div>{emp.name}</div>
                   <div>{emp.age}</div>
                   <div>{emp.desig}</div>
                </div>
            )
        })
        return (
            <div>
               {data}
            </div>
        )
    }
}