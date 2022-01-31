import React, { Component } from "react";

class Student extends Component {
    componentWillUnmount() {
        alert("componentWillUnmount Called");
    }
    render() {
        return (
            <div className="App">
                <h1>Student Component</h1>
            </div>
        );
    }
}

// export default class Student extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>props in class component</h1>
//                 <p>Student Name is : {this.props.name} </p>
//             </div>
//         );
//     }
// }

// export default Student;

// first way of using export //
// export function Student() {
//     return (
//         <div>
//             <h1>Student Component</h1>
//         </div>
//     );
// }

// second way of using export //
// function Student(props) {
//     console.log(props);
//     return (
//         <div style={{ backgroundColor: "red", color: "white" }}>
//             <h1>Full Name of Student is : {props.name}</h1>
//             <h1>and Email is : {props.email}</h1>
//         </div>
//     );
// }

export default Student;
