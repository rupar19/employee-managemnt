import React from 'react';

export default class FormFunction extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            flower: "tulip",
            isGoing: true,
            numberOfGuest: 2
        }

        this.changeText = this.changeText.bind(this);
        this.enterName = this.enterName.bind(this);
        this.changeSelect = this.changeSelect.bind(this);
        this.changeInput = this.changeInput.bind(this);
        this.changeGuestCount = this.changeGuestCount.bind(this);
    }

    changeText(event) {
        this.setState({
            name: event.target.value,
        })
    }

    enterName() {
        alert("Name is entered : " + this.state.name);
    }

    changeSelect(event) {
        this.setState({
            flower: event.target.value
        })
    }
    changeInput(event) {

        this.setState({
            isGoing: event.target.checked,
        })

    }
    changeGuestCount(event) {
        this.setState({
            numberOfGuest: event.target.value
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.enterName}>
                    <label >Enter Name :
                <input type="text" value={this.state.name} onChange={this.changeText} />
                    </label>
                    <br /> <br />
                    <label> Enter Password :
                <input type="password" />
                    </label>
                    <br /> <br />
                    Choose your favorite flower:
                        <select value={this.state.flower} onChange={this.changeSelect} >
                        <option value="rose">Rose</option>
                        <option value="marygold">Marygold</option>
                        <option value="tulip">Tulip</option>
                        <option value="dalia">Dalia</option>
                    </select>
                    <br /> <br />
                    <label>Is Going:
                      <input
                            type="checkbox"
                            name="isgoing"
                            checked={this.state.isGoing}
                            onChange={this.changeInput} />
                    </label>
                    <br /> <br />
                    <label>No of guests:
                        <input


                            type="number"
                            name="numberofguests"
                            value={this.state.numberOfGuest}
                            onChange={this.changeGuestCount} />
                    </label>
                    <br /> <br />
                    <input type="submit" value="Enter" />

                </form>
            </div>

        )
    }

}
