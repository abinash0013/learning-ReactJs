import React, { useState } from "react";
function Login() {
    const [user, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [userErr, setUserErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    // prevent from reloading form while submit //
    function formHandle(e) {
        // if (user.length < 3 || password.length < 8) {
        //     alert("Please Enter Correct Caredential");
        // } else {
        //     alert("all good :)");
        // }
        e.preventDefault();
    }
    function userHandler(e) {
        let item = e.target.value;
        if (item.length < 3) {
            setUserErr(true);
        } else {
            setUserErr(false);
        }
        setUserName(item);
        // console.log(e.target.value.length);
    }
    function passHandler(e) {
        let item = e.target.value;
        if (item.length < 8) {
            setPassErr(true);
        } else {
            setPassErr(false);
        }
        setPassword(item);
        // console.log(e.target.value.length);
    }
    return (
        <div>
            <h1>Admin</h1>
            <form onClick={formHandle}>
                <input
                    type="text"
                    placeholder="Enter Username"
                    onChange={userHandler}
                />
                <br />
                {userErr ? <span>Username Should be atleast 3 digit</span> : ""}
                <br />
                <br />
                <input
                    type="text"
                    placeholder="Enter Username"
                    onChange={passHandler}
                />
                <br />
                {passErr ? <span>Username Should be atleast 8 digit</span> : ""}
                <br />
                <br />
                <button>Login</button>
            </form>
        </div>
    );
}

export default Login;
