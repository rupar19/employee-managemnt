import React from 'react';

export default class LoginComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            loginDetail: [{
                name: "",
                pwd: ""
            }
            ],
            isLoggedIn: true
        }
        this.addName = this.addName.bind(this);
        this.addPwd = this.addPwd.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        //this.showLogin = this.showLogin.bind(this);
    }
    addName(event) {
        this.setState({
            name: event.target.value.toUpperCase()
        })
    }
    addPwd(event) {
        this.setState({
            pwd: event.target.value
        })
    }

    handleLogin() {
        alert("Login details entered :" + this.state.name);
    }

    // showLogin(){
    //     var userDetail = this.state.loginDetail.map((user) => {
    //         return (
    //             <div >
    //                 {user.name}
    //             </div>

    //     )
    //     })

    // }


    render() {
        let formStyling = {
            input: {
                width: "200px",
                height: "20px",
                backgroundColor: "#ffffff",
                color: "grey",
                marginLeft: "10px",
                paddingLeft: "10px",
                marginTop: "10px"

            },
            button: {
                width: "100px",
                height: "30px",
                backgroundColor: "black",
                color: "white",
                marginLeft: "150px",
                marginTop: "30px",
                border: "none"
            },
            border: {
                border: "1px solid grey",
                width: "400px",
                height: "200px",
                margin: "auto",
                marginTop:"30px",
                backgroundColor: "#ede7b6"
            },
            label: {
                paddingLeft: "10px",
                marginTop: "20px"
            }
        }

        return (
            <>
                {/* <div>
                    {this.state.isLoggedIn === true ? <ul>{this.userDetail}</ul> : <b>Please enter your login detail</b>}
                </div> */}
                <form onSubmit={this.handleLogin} style={formStyling.border}>
                    <label style={formStyling.label}>Enter name:
         <input type="text" style={formStyling.input} value={this.state.name} onChange={this.addName} />
                    </label>
                    <br /><br />
                    <label style={formStyling.label}>Enter Password:
         <input type="password" style={formStyling.input} value={this.state.pwd} onChange={this.addPwd} />
                    </label>
                    <br /><br />
                    <input type="submit" value="Login" style={formStyling.button} />
                </form>

            </>

        )
    }
}