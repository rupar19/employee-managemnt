import React from 'react';

export default class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: " ",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value.toUpperCase()
        })
    }

    handleSubmit(event) {
        alert("A name is submitted : " + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <br /> <br />
                    <label> Pick your favorite Flower:
                    <select >
                            <option value="rose" >Rose</option>
                            <option value="tulip">Tulip</option>
                            <option value="dalia">Dalia</option>
                            <option value="cherryblossom">CherryBlossom</option>
                        </select>
                    </label>
                    <br /> <br />
                    <textarea>{this.state.value}</textarea>
                    <br /> <br />
                    <input type="submit" value="Submit Form" />
                </form>
            </div>
        )
    }
}