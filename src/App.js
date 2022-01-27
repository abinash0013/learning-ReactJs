import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import User from "./User";

// state in class component //
class App extends Component {
    //class component does not use useState it always us constructor and constructor use super to get this form its drive class
    constructor() {
        super();
        this.state = {
            data: 1,
        };
    }
    apple() {
        this.setState({ data: this.state.data + 1 });
    }
    render() {
        return (
            <div className="App">
                <h1>{this.state.data}</h1>
                <button onClick={() => this.apple()}>update data</button>
            </div>
        );
    }
}

// state in functional component //
// function App() {
//     const [data, setData] = useState("Abinash");

//     function updateData() {
//         setData("Abinash_Sonar");
//     }
//     console.log("______________________");
//     return (
//         <div className="App">
//             <h1>{data}</h1>
//             <button onClick={updateData}>Update Data</button>
//         </div>
//     );
// }

// function App() {
//     function apple() {
//         alert("Working on Click Function");
//     }

//     return (
//         <div className="App">
//             <h1>Hello World.!</h1>
//             {/* first way */}
//             {/* <button onClick={apple}>Click Me</button> */}
//             {/* second way */}
//             {/* <button onClick={() => alert("alert text button")}>Click Me</button> */}
//             {/* <button onClick={() => apple()}>Click Me</button> */}
//             {/* <User /> */}
//         </div>
//     );
// }

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
