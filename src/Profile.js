import React, { useState } from "react";

function Profile() {
    // const [loggedIn, setLoggedIn] = useState(false); // <--------- if caredental incorrect //
    const [loggedIn, setLoggedIn] = useState(true); // <--------- if caredental correct //
    //recommended way of using conditional rendering
    if (loggedIn) {
        return (
            <div>
                {loggedIn ? (
                    <h1>Logged Successfully</h1>
                ) : (
                    <h1>login Failed</h1>
                )}
            </div>
        );
    }
}

export default Profile;
