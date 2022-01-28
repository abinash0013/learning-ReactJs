import React, { useState } from "react";

function Profile() {
    // const [loggedIn, setLoggedIn] = useState(false); // <--------- if caredental incorrect //
    const [loggedIn, setLoggedIn] = useState(true); // <--------- if caredental correct //
    //not recommended way of using conditional rendering
    if (loggedIn) {
        return (
            <div>
                <h1>Logged Successfully</h1>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Invalid User</h1>
            </div>
        );
    }
}

export default Profile;
