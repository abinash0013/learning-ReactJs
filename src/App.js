import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import { Student } from "./Student";
// import User from "./User";
import Student from "./Student";

// Hide and show //
function App() {
    const [status, setStatus] = useState(true);
    return (
        <div className="App">
            <button onClick={() => setStatus(!status)}>Toggle</button>
            {status ? <h1>Hello Abinash</h1> : null}
        </div>
    );
}

// Hide and show //
// function App() {
//     const [status, setStatus] = useState(true);
//     return (
//         <div className="App">
//             <button onClick={() => setStatus(false)}>Hide</button>
//             <button onClick={() => setStatus(true)}>Show</button>
//             {status ? <h1>Hello World</h1> : null}
//         </div>
//     );
// }

// props in class component //
// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             name: "Abinash",
//         };
//         console.log("dadsfa");
//     }
//     render() {
//         return (
//             <div className="App">
//                 <h1>Props in class component.. !</h1>
//                 <Student name={this.state.name} />
//                 {/* props always change on sender not by receiver */}
//                 <button
//                     onClick={() => this.setState({ name: "Abinash Sonar" })}
//                 >
//                     Update
//                 </button>
//             </div>
//         );
//     }
// }

// Props in function component //
// function App() {
//     const [name, setName] = useState("Abinash");
//     return (
//         <div className="App">
//             <Student name={name} />
//             <button
//                 onClick={() => {
//                     setName("Abinash Sonar");
//                 }}
//             >
//                 Update
//             </button>
//             {/* sending pros in functional component */}
//         </div>
//     );
// }

// state in class component //
// class App extends Component {
//     //class component does not use useState it always us constructor and constructor use super to get this form its drive class //
//     constructor() {
//         super();
//         this.state = {
//             data: 1,
//         };
//     }
//     apple() {
//         this.setState({ data: this.state.data + 1 });
//     }
//     render() {
//         return (
//             <div className="App">
//                 <h1>{this.state.data}</h1>
//                 <button onClick={() => this.apple()}>update data</button>
//             </div>
//         );
//     }
// }

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
