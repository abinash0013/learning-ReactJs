import React, {
    Component,
    Fragment,
    PureComponent,
    useEffect,
    useState,
    useMemo,
    createRef,
    useRef,
} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,
} from "react-router-dom";
import { Button, Table } from "react-bootstrap";
// import logo from "./logo.svg";
import "./App.css";
// import Cols from "./Cols";
// import "./Style.css";
// import Login from "./Login";
import User from "./User";
// import Profile from "./Profile";
// import Student from "./Student";
// import style from "./Modular.module.css";
// import Nav from "./Nav";
// import Home from "./Home";
// import About from "./About";
// import Services from "./Services";
// import Contact from "./Contact";

// update form data
function App() {
    const [data, setData] = useState([]);
    const [userId, setUserId] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [id, setId] = useState("");
    useEffect(() => {
        getList();
    }, []);
    console.log(data);
    function getList() {
        fetch("https://jsonplaceholder.typicode.com/posts").then((result) => {
            result.json().then((resp) => {
                // console.log("result", resp);
                setData(resp);
                setUserId(resp[0].userId);
                setTitle(resp[0].title);
                setBody(resp[0].body);
                setId(resp[0].id);
            });
        });
    }
    function deleteUser(id) {
        // alert(id);
        // console.log(id);
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "DELETE",
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp);
                getList();
            });
        });
    }
    function updateUser(id) {
        console.log(data[id - 1]);
        let item = data[id - 1];
        setUserId(item.userId);
        setTitle(item.title);
        setBody(item.body);
        setId(item.id);
    }
    function updateCurrentUser() {
        let item = { userId, title, body, id };
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp);
                getList();
            });
        });
    }
    return (
        <div className="App">
            <h1>Get API Call</h1>
            <Table>
                <tbody>
                    <tr>
                        <td>Id</td>
                        <td>Title</td>
                        <td>Body</td>
                        <td>Action</td>
                    </tr>
                    {data.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                            <td>
                                <button onClick={() => deleteUser(item.id)}>
                                    Delete
                                </button>
                            </td>
                            <td>
                                <button onClick={() => updateUser(item.id)}>
                                    Update
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div>
                <input
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <br />
                <button onClick={updateCurrentUser}>Update User</button>
            </div>
        </div>
    );
}

// prefilled form
// function App() {
//     const [data, setData] = useState([]);
//     const [userId, setUserId] = useState("");
//     const [title, setTitle] = useState("");
//     const [body, setBody] = useState("");
//     useEffect(() => {
//         getList();
//     }, []);
//     console.log(data);
//     function getList() {
//         fetch("https://jsonplaceholder.typicode.com/posts").then((result) => {
//             result.json().then((resp) => {
//                 // console.log("result", resp);
//                 setData(resp);
//                 setUserId(resp[0].userId);
//                 setTitle(resp[0].title);
//                 setBody(resp[0].body);
//             });
//         });
//     }
//     function deleteUser(id) {
//         // alert(id);
//         // console.log(id);
//         fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//             method: "DELETE",
//         }).then((result) => {
//             result.json().then((resp) => {
//                 console.log(resp);
//                 getList();
//             });
//         });
//     }
//     function updateUser(id) {
//         console.log(data[id - 1]);
//         let item = data[id - 1];
//         setUserId(item.userId);
//         setTitle(item.title);
//         setBody(item.body);
//     }
//     return (
//         <div className="App">
//             <h1>Get API Call</h1>
//             <Table>
//                 <tbody>
//                     <tr>
//                         <td>Id</td>
//                         <td>Title</td>
//                         <td>Body</td>
//                         <td>Action</td>
//                     </tr>
//                     {data.map((item) => (
//                         <tr>
//                             <td>{item.id}</td>
//                             <td>{item.title}</td>
//                             <td>{item.body}</td>
//                             <td>
//                                 <button onClick={() => deleteUser(item.id)}>
//                                     Delete
//                                 </button>
//                             </td>
//                             <td>
//                                 <button onClick={() => updateUser(item.id)}>
//                                     Update
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>
//             <div>
//                 <input type="text" value={userId} /> <br />
//                 <input type="text" value={title} /> <br />
//                 <input type="text" value={body} /> <br />
//                 <button>Update User</button>
//             </div>
//         </div>
//     );
// }

// Using fetch API //
// function App() {
//     const [data, setData] = useState([]);
//     useEffect(() => {
//         getList();
//     }, []);
//     console.log(data);
//     function getList() {
//         fetch("https://jsonplaceholder.typicode.com/posts").then((result) => {
//             result.json().then((resp) => {
//                 // console.log("result", resp);
//                 setData(resp);
//             });
//         });
//     }
//     function deleteUser(id) {
//         // alert(id);
//         // console.log(id);
//         fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//             method: "DELETE",
//         }).then((result) => {
//             result.json().then((resp) => {
//                 console.log(resp);
//                 getList();
//             });
//         });
//     }
//     return (
//         <div className="App">
//             <h1>Get API Call</h1>
//             <Table>
//                 <tbody>
//                     <tr>
//                         <td>Id</td>
//                         <td>Title</td>
//                         <td>Body</td>
//                         <td>Action</td>
//                     </tr>
//                     {data.map((item) => (
//                         <tr>
//                             <td>{item.id}</td>
//                             <td>{item.title}</td>
//                             <td>{item.body}</td>
//                             <td>
//                                 <button onClick={() => deleteUser(item.id)}>
//                                     Delete
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>
//         </div>
//     );
// }

// Using Post API //
// function App() {
//     const [userId, setUserId] = useState("");
//     const [title, setTitle] = useState("");
//     const [body, setBody] = useState("");
//     function saveUser() {
//         // console.log({ userId, title, body });
//         let data = { userId, title, body };
//         fetch("https://jsonplaceholder.typicode.com/posts", {
//             method: "POST",
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(data),
//         }).then((result) => {
//             // console.log("result", result);
//             result.json().then((resp) => {
//                 console.log("resp", resp);
//             });
//         });
//     }
//     return (
//         <div className="App">
//             <h1>Post API Example</h1>
//             <input
//                 type="text"
//                 value={userId}
//                 onChange={(e) => {
//                     setUserId(e.target.value);
//                 }}
//                 name="userId"
//             />
//             <br /> <br />
//             <input
//                 type="text"
//                 value={title}
//                 onChange={(e) => {
//                     setTitle(e.target.value);
//                 }}
//                 name="title"
//             />
//             <br /> <br />
//             <input
//                 type="text"
//                 value={body}
//                 onChange={(e) => {
//                     setBody(e.target.value);
//                 }}
//                 name="body"
//             />
//             <br /> <br />
//             <Button type="button" onClick={saveUser}>
//                 Save
//             </Button>
//         </div>
//     );
// }

// Using fetch API //
// function App() {
//     const [data, setData] = useState([]);
//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/posts").then((result) => {
//             result.json().then((resp) => {
//                 // console.log("result", resp);
//                 setData(resp);
//             });
//         });
//     }, []);
//     console.log(data);
//     return (
//         <div className="App">
//             <h1>Get API Call</h1>
//             <Table>
//                 <tbody>
//                     <tr>
//                         <td>Id</td>
//                         <td>Title</td>
//                         <td>Body</td>
//                     </tr>
//                     {data.map((item) => (
//                         <tr>
//                             <td>{item.id}</td>
//                             <td>{item.title}</td>
//                             <td>{item.body}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>
//         </div>
//     );
// }

// Dynamic routing in react js //
// function App() {
//     let Users = [
//         { id: 1, name: "Abinash", email: "abinash@gmail.com" },
//         { id: 2, name: "Alok", email: "alok@gmail.com" },
//         { id: 3, name: "Ajit", email: "ajit@gmail.com" },
//         { id: 4, name: "Kartik", email: "kartik@gmail.com" },
//     ];
//     return (
//         <div className="App">
//             <Router>
//                 <h1>Dynamic Routing</h1>
//                 {Users.map((item) => (
//                     <div>
//                         <Link to={"/user/" + item.id}>
//                             <h3>{item.name}</h3>
//                         </Link>
//                     </div>
//                 ))}
//                 <Routes>
//                     <Route path="/user/:id" element={<User />} />
//                 </Routes>
//             </Router>
//         </div>
//     );
// }

// 404 page using routing in react //
// function App() {
//     return (
//         <div className="App">
//             <Router>
//                 <Link to="/">Home</Link>
//                 <br />
//                 <Link to="/about">About</Link>
//                 <br />
//                 <Link to="/services">Services</Link>
//                 <Routes>
//                     <Route path="/" exact={true} element={<Home />} />
//                     <Route path="/about" element={<About />} />
//                     <Route path="/services" element={<Services />} />
//                     <Route path="*" element={<pageNotFound />} />
//                 </Routes>
//             </Router>
//         </div>
//     );
// }

// function Home() {
//     return (
//         <div>
//             <h1>Home Page</h1>
//             <p>This is Home page</p>
//         </div>
//     );
// }

// function About() {
//     return (
//         <div>
//             <h1>About Page</h1>
//             <p>This is About page</p>
//         </div>
//     );
// }

// function Services() {
//     return (
//         <div>
//             <h1>Services Page</h1>
//             <p>This is Services page</p>
//         </div>
//     );
// }

// function pageNotFound() {
//     return (
//         <div>
//             <h1>404 Page</h1>
//             <p>Page Not Found</p>
//         </div>
//     );
// }

// recommended way to use react router //
// function App() {
//     return (
//         <div className="App">
//             <Nav />
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/services" element={<Services />} />
//                 <Route path="/contact" element={<Contact />} />
//             </Routes>
//         </div>
//     );
// }

// Routing in React Component //
// function App() {
//     return (
//         <div className="App">
//             <Router>
//                 <h1>Routing Setup</h1>
//                 <Link to="/home">Home Page</Link>
//                 <br />
//                 <Link to="/about">About Page</Link>
//                 <Routes>
//                     <Route path="home" element={<Home />} />
//                 </Routes>

//                 <Routes>
//                     <Route path="about" element={<About />} />
//                 </Routes>
//             </Router>
//         </div>
//     );
// }

// function Home() {
//     return (
//         <div>
//             <h1>Home page</h1>
//         </div>
//     );
// }
// function About() {
//     return (
//         <div>
//             <h1>About page</h1>
//         </div>
//     );
// }

// Using HOC
// function App() {
//     return (
//         <div className="App">
//             <h1>HOC</h1>
//             <HOCRed cmp={Counter} />
//         </div>
//     );
// }
// function HOCRed(props) {
//     return (
//         <h2 style={{ backgroundColor: "red" }}>
//             <props.cmp />
//         </h2>
//     );
// }
// function Counter() {
//     const [count, setCount] = useState(0);
//     return (
//         <div>
//             <h3>{count}</h3>
//             <button onClick={() => setCount(count + 1)}>Update</button>
//         </div>
//     );
// }

// uncontroll componet //
// function App() {
//     const inputRefOne = useRef(null);
//     const inputRefTwo = useRef(null);

//     function submitForm(e) {
//         e.preventDefault();
//         console.log("input field one value", inputRefOne.current.value);
//         console.log("input field two value", inputRefTwo.current.value);
//     }
//     return (
//         <div className="App">
//             <h1>Uncontrolled component</h1>
//             <form onSubmit={submitForm}>
//                 <input type="text" ref={inputRefOne} />
//                 <br />
//                 <br />
//                 <input type="text" ref={inputRefTwo} />
//                 <br />
//                 <br />
//                 <input type="submit" value="Submit" />
//                 <br />
//                 <br />
//             </form>
//         </div>
//     );
// }
// controlled component //
// function App() {
//     let [val, setVal] = useState();
//     return (
//         <div className="App">
//             <h1>Controlled Component</h1>
//             <input
//                 type="text"
//                 value={val}
//                 onChange={(e) => setVal(e.target.value)}
//             />
//         </div>
//     );
// }

// forward ref in functional component //
// function App() {
//     let inputRef = useRef(null);
//     function updateInput() {
//         inputRef.current.value = "100";
//     }
//     return (
//         <div className="App">
//             <h1>Forward Ref in fnctional component</h1>
//             <User ref={inputRef} />
//             <button onClick={updateInput}>Update Input Box</button>
//         </div>
//     );
// }

// ref in functional component with useRef //
// function App() {
//     const inputRef = useRef(null);
//     function handleInput() {
//         console.log("handle input in function");
//         // inputRef.current.value = "100";
//         // inputRef.current.style.backgroundColor = "red";
//         inputRef.current.style.color = "red";
//     }
//     return (
//         <div className="App">
//             <h1>useRef in functional component</h1>
//             <input type="text" ref={inputRef} />
//             <button onClick={handleInput}>Handle Input</button>
//         </div>
//     );
// }

// ref in class component //
// class App extends Component {
//     constructor() {
//         super();
//         this.inputRef = createRef();
//     }
//     componentDidMount() {
//         // we can directly menuplate by using the ref
//         // console.log((this.inputRef.current.value = "1000"));
//     }
//     getValue() {
//         console.log(this.inputRef.current.value);
//         this.inputRef.current.style.color = "red";
//     }
//     render() {
//         return (
//             <div className="App">
//                 <h1>Ref in class component</h1>
//                 <input type="text" ref={this.inputRef} />
//                 <button onClick={() => this.getValue()}> Check Ref</button>
//             </div>
//         );
//     }
// }

// use memo in functional component //
// function App() {
//     const [count, setCount] = useState(0);
//     const [item, setItem] = useState(10);

//     const multiCountMemo = useMemo(
//         function multiCount() {
//             console.log("multicount");
//             return count * 5;
//         },
//         [count]
//     );
//     return (
//         <div className="App">
//             <h1>useMemo Hook in functional component</h1>
//             <h2>{count}</h2>
//             <h2>{item}</h2>
//             <h2>{multiCountMemo}</h2>
//             <button
//                 onClick={() => {
//                     setCount(count + 1);
//                 }}
//             >
//                 Update count
//             </button>
//             <button
//                 onClick={() => {
//                     setItem(item * 10);
//                 }}
//             >
//                 Update item
//             </button>
//         </div>
//     );
// }

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
