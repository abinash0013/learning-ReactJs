import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import User from "./User";

function App() {
    // function apple() {
    //     alert("Working on Click Function");
    // }

    return (
        <div className="App">
            <h1>Hello World.!</h1>
            {/* first way */}
            {/* <button onClick={apple}>Click Me</button> */}
            {/* second way */}
            <button onClick={() => alert("alert text button")}>Click Me</button>
            {/* <User /> */}
        </div>
    );
}

// class User extends Component {
//     render() {
//         // render is compulsory in class component while return is compulsory in return component
//         return <h1>Class Component from user file</h1>;
//     }
// }

// functional component in one fie //
// function User() {
//     return <h1>User Component another way of using export</h1>;
// }

export default App;
