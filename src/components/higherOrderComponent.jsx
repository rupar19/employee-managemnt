import React from 'react';

function studentDetail() {
    return (
        {
            name: "Rupa",
            subject: "IT",
            grade: "A"
        }
    )
}

export default function higherOrderFunction(StudentComponent,GradeComponent) {
    return class HigherOrderComponent extends React.Component {
        constructor() {
            super();
            this.state = {
                studentData: studentDetail()
            }
        }
        render() {
            return (
                <>
                    <h3>Details of student : </h3>
                   {StudentComponent  && <StudentComponent stdData={this.state.studentData} />} 
                    <br />
                    {GradeComponent && <GradeComponent stdData = {this.state.studentData} />}
                </>
            )
        }
    }
}
