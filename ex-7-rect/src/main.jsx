import React, {useState} from "react";
import ReactDOM from "react-dom/client";

//7a
// function App(){
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <div>
//       <h1>Conditional Rendering Example</h1>

//       {isLoggedIn ? (
//         <h2>Welcome back , User!</h2>
//         ) : (<h2>Please login to continue</h2>)}

//         <button onClick = {() => setIsLoggedIn(!isLoggedIn)}>
//           {isLoggedIn ? "Logout" : "Login"}
//         </button>
//     </div>
//   );
// } 
//7b
function App(){
  const students = ["Raju","Arun","Preethi","Kiran","Sita"];

  return(
    <div>
      <h1>Rendering Lists Example</h1>

      <ul>
        {students.map((student, index)=>(
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
}






const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);