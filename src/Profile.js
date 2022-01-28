import React, { useState } from "react";

function Profile() {
    // if else if conditional rendering //

    const [loggedIn, setLoggedIn] = useState(0);
    return (
        <div>
            {loggedIn == 1 ? (
                <h1>Welcome First User</h1>
            ) : loggedIn == 2 ? (
                <h1>Welcome Second User</h1>
            ) : (
                <h1>Welcome third User</h1>
            )}
        </div>
    );
    //not-recommended way of using conditional rendering //
    // const [loggedIn, setLoggedIn] = useState(false); // <--------- if caredental incorrect //
    // const [loggedIn, setLoggedIn] = useState(true); // <--------- if caredental correct //if (loggedIn) {
    // if (loggedIn) {
    //     return (
    //         <div>
    //             <h1>LoggedIn Successfully</h1>
    //         </div>
    //     );
    // } else {
    //     return (
    //         <div>
    //             <h1>LoggedIn Failed</h1>
    //         </div>
    //     );
    // }
    //recommended way of using conditional rendering //
    // const [loggedIn, setLoggedIn] = useState(false); // <--------- if caredental incorrect //
    // const [loggedIn, setLoggedIn] = useState(true); // <--------- if caredental correct //
    // if (loggedIn) {
    //     return (
    //         <div>
    //             {loggedIn ? (
    //                 <h1>Logged Successfully</h1>
    //             ) : (
    //                 <h1>login Failed</h1>
    //             )}
    //         </div>
    //     );
    // }
}

export default Profile;
