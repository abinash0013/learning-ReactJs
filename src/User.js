// import React, { Component, useEffect } from "react";

// sending data from child to parent with the lifting up state //
function User(props) {
    const data = "abinash name in user file or component";
    return (
        <div>
            <h2>lifting up state</h2>
            <button onClick={() => props.qqqq(data)}>Click Me</button>
        </div>
    );
}

// sending data from parent to child with lifting up state //
// function User(p) {
//     return (
//         <div>
//             <h2>User Name : {p.name}</h2>
//             <button>Click Me</button>
//         </div>
//     );
// }

// Reuse Component in loop //
// function User(props) {
//     return (
//         <div>
//             <span>User {props.data.name}</span>
//             <span>User {props.data.email}</span>
//             <span>User {props.data.contact}</span>
//         </div>
//     );
//     // return <h1>User Component {props.data.name}</h1>;
// }

// useEffect in functional component //
// function User(props) {
//     useEffect(() => {
//         console.log("useEffect count");
//     }, [props.count]);
//     useEffect(() => {
//         console.log("useEffect data");
//     }, [props.data]);
//     return (
//         <div className="App">
//             <h1>Count Props: {props.count}</h1>
//             <h1>Count Props: {props.data}</h1>
//         </div>
//     );
// }

// render using state in class component //
// class User extends Component {
//     constructor() {
//         super();
//         this.state = {
//             name: "Abinash",
//         };
//     }
//     render() {
//         console.log(this.state.name);
//         return (
//             <div>
//                 <h1>User Component {this.state.name}</h1>
//                 <button
//                     onClick={() => this.setState({ name: "Abinash Sonar" })}
//                 >
//                     Click Me
//                 </button>
//             </div>
//         );
//     }
// }

// class User extends Component {
//     render() {
//         //console.log(this.props);
//         return <h1>User Component for passing props {this.props.name}</h1>;
//     }
// }

// function User(p) {
//     return (
//         <div>
//             <h1>User Component</h1>
//             {/* first way to call with arrow function // */}
//             <button onClick={() => p.data()}>Call Data with Function</button>
//             {/* receiving data as a props */}

//             {/* second way to call without arrow function // */}
//             {/* <button onClick={p.data}>Call Data without Function</button> */}
//             {/* receiving data as a props */}
//         </div>
//     );
// }

// import React, { Component } from "react";
// class User extends Component {
//     render() {
//         // render is compulsory in class component while return is compulsory in return component
//         return <h1>Class Component from user file</h1>;
//     }
// }

export default User;
