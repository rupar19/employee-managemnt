import React from 'react';

const address = () => {
    return ({
        flatNo: 22,
        road: "Waye Avenue",
        zip: "TW5 9SG",
        city: "London",
        borough: "Middlesex"

    })
}

export default function highOrderFunction(Component1, Component2) {
    return class HigherOrderComponent extends React.Component {
        constructor() {
            super();
            this.state = {
                addressData: address()
            }
        }
        render() {
            return (
                <>
                    <h3>Address Detail</h3><br />
                    <Component1 address={this.state.addressData} />
                    <Component2 address={this.state.addressData} />

                </>
            )
        }

    }
}