import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <User />
        </div>
    );
}
function User() {
    return <h1>User Component another way of using export</h1>;
}

export default App;
