import React, {
    Component,
    Fragment,
    PureComponent,
    useEffect,
    useState,
    useMemo,
} from "react";
// import { Button, Table } from "react-bootstrap";
// import logo from "./logo.svg";
import "./App.css";
// import Cols from "./Cols";
// import "./Style.css";
// import Login from "./Login";
import User from "./User";
// import Profile from "./Profile";
// import Student from "./Student";
// import style from "./Modular.module.css";

// use memo in functional component //
function App() {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10);

    const multiCountMemo = useMemo(
        function multiCount() {
            console.log("multicount");
            return count * 5;
        },
        [count]
    );
    return (
        <div className="App">
            <h1>useMemo Hook in functional component</h1>
            <h2>{count}</h2>
            <h2>{item}</h2>
            <h2>{multiCountMemo}</h2>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Update count
            </button>
            <button
                onClick={() => {
                    setItem(item * 10);
                }}
            >
                Update item
            </button>
        </div>
    );
}

// PureComponent with other component //
// *** pure component is only used by class component //
// *** functional component use memo as pure component //
// *** pure component stop the rerendering of the component//

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             count: 1,
//         };
//     }
//     render() {
//         return (
//             <div className="App">
//                 <User count={this.state.count} />
//                 <button
//                     onClick={() =>
//                         this.setState({ count: this.state.count + 1 })
//                     }
//                 >
//                     Update counter
//                 </button>
//             </div>
//         );
//     }
// }

// basic of pure component //
// class App extends PureComponent {
//     constructor() {
//         super();
//         this.state = {
//             count: 1,
//         };
//     }
//     render() {
//         console.log("check-re rendering");
//         return (
//             <div className="App">
//                 <h1>Pure Component in React {this.state.count}</h1>
//                 <button
//                     onClick={() =>
//                         // this.setState({ count: this.state.count + 1 } )
//                         // **pure component rerender when the value is updating //
//                         this.setState({ count: 1 })
//                     }
//                 >
//                     Update Count
//                 </button>
//             </div>
//         );
//     }
// }

// sending data from child to parent with the lifting up state //
// function App() {
//     function parentAlert(data) {
//         alert(data);
//     }
//     return (
//         <div className="App">
//             <User qqqq={parentAlert} />
//         </div>
//     );
// }

// sending data from parent to child with lifting up state //
// function App() {
//     const data = "abinash";
//     return (
//         <div className="App">
//             <h1>Lifting up State</h1>
//             <User name={data} />
//         </div>
//     );
// }

// using fragment in child component //
// function App() {
//     return (
//         <>
//             <h1>React Fragment</h1>
//             <table>
//                 <tbody>
//                     <tr>
//                         <Cols />
//                     </tr>
//                 </tbody>
//             </table>
//         </>
//     );
// }

// fragment in react using 2st way //
// function App() {
//     return (
//         <>
//             <h1>React fragment</h1>
//             <h1>React fragment</h1>
//         </>
//     );
// }

// fragment in react using 2st way //
// function App() {
//     return (
//         <Fragment>
//             <h1>React fragment</h1>
//             <h1>React fragment</h1>
//         </Fragment>
//     );
// }
// fragment in react using 1st way //
// function App() {
//     return (
//         <React.Fragment>
//             <h1>React fragment</h1>
//             <h1>React fragment</h1>
//         </React.Fragment>
//     );
// }

// Reuse Component in loop //
// function App() {
//     const users = [
//         { name: "Abinash", email: "abinash@gmail.com", contact: "123" },
//         { name: "Alok", email: "alok@gmail.com", contact: "234" },
//         { name: "Anjan", email: "anjan@gmail.com", contact: "345" },
//     ];
//     return (
//         <div className="App">
//             <h1>Reuse Component in loop</h1>
//             {users.map((item, i) => (
//                 <User data={item} />
//             ))}
//         </div>
//     );
// }

// map function //
// function App() {
//     // array
//     // const StudentName = ["Abinash", "kartik", "alok", "satyen"];
//     // array of array
//     const StudentName = [
//         { name: "Abinash", email: "Abinash@gmail.com", phone: 12367890 },
//         { name: "kartik", email: "kartik@gmail.com", phone: 234678901 },
//         { name: "alok", email: "alok@gmail.com", phone: 346789012 },
//         { name: "satyen", email: "satyen@gmail.com", phone: 4567890123 },
//     ];
//     return (
//         <div className="App">
//             <h1>Handle Array from the list</h1>
//             <Table striped bordered hover>
//                 <tbody>
//                     <tr>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Phone</th>
//                     </tr>
//                     {StudentName.map((data, i) =>
//                         data.phone === 12367890 ? (
//                             <tr key={i}>
//                                 <td>{data.name}</td>
//                                 <td>{data.email}</td>
//                                 <td>{data.phone}</td>
//                             </tr>
//                         ) : null
//                     )}
//                 </tbody>
//             </Table>
//         </div>
//     );
// }

// work on button using react
// function App() {
//     return (
//         <div className="App">
//             <h1>using bootstrap button</h1>
//             <Button onClick={() => alert("Checking alright")}>Primary</Button>
//         </div>
//     );
// }

// 3 modular style in react //
// function App() {
//     return (
//         <div className="App">
//             <h1 className={style.success}>Modular css in react</h1>
//         </div>
//     );
// }

// 2 internal style in react //
// function App() {
//     return (
//         <div className="App">
//             <h1 style={{ backgroundColor: "red", color: "white" }}>
//                 Internal css
//             </h1>
//         </div>
//     );
// }

// 1 external style in react //
// function App() {
//     return (
//         <div className="App">
//             <h1 className="primary">External css</h1>
//         </div>
//     );
// }

// Conditional useEffect in functional component //
// function App() {
//     const [data, setData] = useState(10);
//     const [count, setCount] = useState(100);

//     return (
//         <div className="App">
//             <User count={count} data={data} />
//             <button onClick={() => setData(data + 1)}>Update Data</button>
//             <button onClick={() => setCount(count + 1)}>Update Counter</button>
//         </div>
//     );
// }

// basic useEffect in functional component //
// as a life cycle method
// function App() {
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//         console.log("useEffect");
//         // alert("adadaf");
//     });
//     return (
//         <div className="App">
//             <h1>useEffect in React {count}</h1>
//             <button onClick={() => setCount(count + 1)}>Counter</button>
//         </div>
//     );
// }

// Hooks in react with functional component //
// function App() {
//     const [data, setData] = useState("Abinash");
//     return (
//         <div className="App">
//             <h1>Hello {data}.!</h1>
//             <button onClick={() => setData("Abinash Sonar")}>
//                 Update Data
//             </button>
//         </div>
//     );
// }

// component will unmount //
// class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             show: true,
//         };
//     }
//     render() {
//         return (
//             <div className="App">
//                 {this.state.show ? (
//                     <Student />
//                 ) : (
//                     <h1>Child Component Remove alert will show</h1>
//                 )}
//                 <button
//                     onClick={() => this.setState({ show: !this.state.show })}
//                 >
//                     Toggle Child Component
//                 </button>
//             </div>
//         );
//     }
// }

// Should component update //
// class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             count: 0,
//         };
//     }
//     // should component update block rendering //
//     shouldComponentUpdate() {
//         console.log("Should Component Update", this.state.count);
//         // return "true" remove the blocking rendering //
//         // return true;
//         if (this.state.count > 5 && this.state.count < 10) {
//             return true;
//         }
//     }
//     render() {
//         return (
//             <div className="App">
//                 <h1>Should Component Update {this.state.count}</h1>
//                 <button
//                     onClick={() => {
//                         this.setState({ count: this.state.count + 1 });
//                     }}
//                 >
//                     Update Counter
//                 </button>
//             </div>
//         );
//     }
// }
// preState in Component did update//
// class App extends Component {
//     constructor() {
//         super();
//         console.log("constructor");
//         this.state = {
//             count: 0,
//         };
//     }
//     componentDidUpdate(preProps, preState, snapshots) {
//         console.log("componentDidUpdate", preState.count, this.state.count);
//         // yes, we can update from here also but with condition otherwise it will go with infinite loop //

//         // simple with condition //
//         // if (preState.count === this.state.count) {
//         //     alert("Data is Same");
//         /// }

//         // counter without condition //
//         // this.setState({ count: this.state.count + 1 });

//         // counter with condition //
//         if (this.state.count < 10) {
//             this.setState({ count: this.state.count + 1 });
//         }
//     }
//     render() {
//         console.log("render");
//         return (
//             <div className="App">
//                 <h1>Component Did Update {this.state.count} </h1>
//                 <button
//                     onClick={() => {
//                         this.setState({ count: 1 });
//                     }}
//                 >
//                     Update Counter
//                 </button>
//             </div>
//         );
//     }
// }

// component did update //
// class App extends Component {
//     constructor() {
//         super();
//         console.log("Constructor");
//         this.state = {
//             name: "Abinash",
//         };
//     }
//     componentDidUpdate() {
//         console.log("Component Did update");
//     }
//     render() {
//         console.log("render");
//         return (
//             <div className="App">
//                 <h1>Component Did Update</h1>
//                 <button
//                     onClick={() => {
//                         this.setState({ name: "Abniash Sonar" });
//                     }}
//                 >
//                     Update Name
//                 </button>
//             </div>
//         );
//     }
// }

// component did mount //
// class App extends Component {
//     constructor() {
//         super();
//         console.log("Constructor");
//         this.state = {
//             name: "Abinash",
//         };
//     }
//     componentDidMount() {
//         console.log("Component Did Mount");
//     }
//     render() {
//         console.log("Render");
//         return (
//             <div className="App">
//                 <h1>Component Did Mount {this.state.name}</h1>
//                 <button
//                     onClick={() => this.setState({ name: "Abinash Sonar" })}
//                 >
//                     Update Name
//                 </button>
//             </div>
//         );
//     }
// }

// render life cycle method using state in class component //
// function App() {
//     return (
//         <div className="App">
//             {/* <h1>Render life cycle method using state in class component</h1> */}
//             <User />
//         </div>
//     );
// }

// render life cycle method in class component //
// function App() {
//     const [name, setName] = useState("Abinash");
//     return (
//         <div className="App">
//             <h1>Render life cycle method in class component</h1>
//             <User name={name} />
//             <button onClick={() => setName("Abinash Sonar")}>Click</button>
//         </div>
//     );
// }

// constructor life cycle method class component //
// class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             data: "constructor first life cycle method using class component",
//         };
//     }
//     render() {
//         return (
//             <div className="App">
//                 <h1>{this.state.data}</h1>
//             </div>
//         );
//     }
// }

// Basic Form Validation //
// function App() {
//     return (
//         <div className="App">
//             <Login />
//         </div>
//     );
// }

// function App() {
//     function getData() {
//         alert("hello from app");
//     }
//     return (
//         <div className="App">
//             <User data={getData} /> {/* using data as a props */}
//         </div>
//     );
// }

// Conditional rendering //
// function App() {
//     return (
//         <div className="App">
//             <Profile />
//         </div>
//     );
// }

// Form handling in react js //
// function App() {
//     const [name, setName] = useState("");
//     const [gender, setGender] = useState("");
//     const [tnc, setTnc] = useState(false);
//     function getFormData(e) {
//         console.log(name, gender, tnc);
//         e.preventDefault();
//     }
//     return (
//         <div className="App">
//             <h1>Form Handling in React</h1>
//             <form onSubmit={getFormData}>
//                 <input
//                     type="text"
//                     placeholder="Enter Full Name"
//                     onChange={(e) => setName(e.target.value)}
//                 />
//                 <br />
//                 <br />
//                 <label>Select Gender</label>
//                 <select onChange={(e) => setGender(e.target.value)}>
//                     <option>Select Gender</option>
//                     <option>Male</option>
//                     <option>Female</option>
//                 </select>
//                 <br />
//                 <br />
//                 <input
//                     type="checkbox"
//                     onChange={(e) => setTnc(e.target.checked)}
//                 />
//                 <span>Accept Term and condition</span>
//                 <br />
//                 <br />
//                 <button type="Submit">Submit</button>
//             </form>
//         </div>
//     );
// }

// Hide and show //
// function App() {
//     const [status, setStatus] = useState(true);
//     return (
//         <div className="App">
//             <button onClick={() => setStatus(!status)}>Toggle</button>
//             {status ? <h1>Hello Abinash</h1> : null}
//         </div>
//     );
// }

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
