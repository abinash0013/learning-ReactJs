import React from "react";

function User(p) {
    return (
        <div>
            <h1>User Component</h1>
            {/* first way to call with arrow function // */}
            <button onClick={() => p.data()}>Call Data with Function</button>
            {/* receiving data as a props */}

            {/* second way to call without arrow function // */}
            {/* <button onClick={p.data}>Call Data without Function</button> */}
            {/* receiving data as a props */}
        </div>
    );
}

export default User;

// import React, { Component } from "react";
// class User extends Component {
//     render() {
//         // render is compulsory in class component while return is compulsory in return component
//         return <h1>Class Component from user file</h1>;
//     }
// }
// export default User;
