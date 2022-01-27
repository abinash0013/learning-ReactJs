// export function Student() {
//     return (
//         <div>
//             <h1>Student Component</h1>
//         </div>
//     );
// }

function Student(props) {
    console.log(props);
    return (
        <div style={{ backgroundColor: "red", color: "white" }}>
            <h1>Full Name of Student is : {props.name}</h1>
            <h1>and Email is : {props.email}</h1>
        </div>
    );
}

export default Student;
