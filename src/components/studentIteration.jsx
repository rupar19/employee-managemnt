import React from 'react';

export default class StudentIteration extends React.Component {
    constructor() {
        super();
        this.state = {
            stdId: "",
            stdName: "",
            stdClass: "",
            stdGrade: "",
            studentDetails: [{
                name: "Rupa",
                id: 1,
                class: "Year 9",
                grade: "A"
            },
            {
                name: "Ruma",
                id: 2,
                class: "Year 7",
                grade: "C"
            },
            {
                name: "Rishi",
                id: 3,
                class: "Year 10",
                grade: "A*"
            }],
            isLoggedIn: true
        }
        this.addStudentId = this.addStudentId.bind(this);
        this.addStudentName = this.addStudentName.bind(this);
        this.addStudentClass = this.addStudentClass.bind(this);
        this.addStudentGrade = this.addStudentGrade.bind(this);
        this.addNewStudent = this.addNewStudent.bind(this);

    }
    addStudentId(event) {
        this.setState({
            stdId: event.target.value
        })
    }

    addStudentName(event) {
        this.setState({
            stdName: event.target.value
        })
    }

    addStudentClass(event) {
        this.setState({
            stdClass: event.target.value
        })
    }
    addStudentGrade(event) {
        this.setState({
            stdGrade: event.target.value
        })

    }

    addNewStudent() {
        this.setState({
            studentDetails: [
                {
                    id: this.state.stdId,
                    name: this.state.stdName,
                    class: this.state.stdClass,
                    grade: this.state.stdGrade
                }, ...this.state.studentDetails
            ],
            stdName: "",
            stdClass: "",
            stdGrade: "",
            stdId: ""
        })
    }

    render() {
        let studentArray = this.state.studentDetails.map((student) => {
            return (
                <div key={student.id}>
                    <label> <b>Enter Subject:</b>
                        <input type="text" />
                    </label>
                    <div><b>Name :</b>{student.name}</div>
                    <div><b>Class:</b>{student.class}</div>
                    <div><b>Grade:</b>{student.grade}</div><br /> <br></br>
                </div>
            )
        })

        return (
            <>
                {this.state.isLoggedIn === true ? <ul>{studentArray}</ul> : <b>Please login the details</b>}
                {/* Add New student  */}
                <b>Enter Name : </b><input type="text" value={this.state.stdName} onChange={this.addStudentName} />
                <b>Enter Class : </b><input type="text" value={this.state.stdClass} onChange={this.addStudentClass} />
                <b>Enter ID : </b><input type="text" value={this.state.stdId} onChange={this.addStudentId} />
                <b>Enter Grade : </b><input type="text" value={this.state.stdGrade} onChange={this.addStudentGrade} /> <br /> <br />
                <input type="button" value="Add Student" onClick={this.addNewStudent} />

            </>





        )
    }
}