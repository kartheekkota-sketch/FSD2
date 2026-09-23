import React, {useState} from "react";
import ReactDOM from "react-dom/client";
//6a
// function Greeting(props) {
//   return <h1>Hello, {props.name}!</h1>;
// }

// function App() {
//   const  [count, setCount] = useState(0);

//   return (
//     <div>
//       <Greeting name="UCEN" />

//       <p>You clicked {count} times</p>

//       <button onClick={() => setCount(count + 1)}>Click Me </button>
//     </div>
//   );
// }

//6b

// function App(){
//   const MyStyle = {
//     color: "blue",
//     backgroundColor: "lightyellow",
//     padding: "10px",
//     borderRadius: '8px'
//   };
//   const fruits = ["Apple", "Banana", "Mango","Orange"];
//   return(
//    <div style={MyStyle}>
//     <h1>Fruits List</h1>

//     <ul>
//       {fruits.map((fruit, index) =>(
//         <li key={index}>{fruit}</li>
//       ))
//       }
//     </ul>
//    </div>
//   )
// }

//6c
function App(){
    const [message, setMessage] = useState("Click a button");


    function handleGreet(){
    setMessage("Hello from React Event ! ");
    }
  function handelReset(){
    setMessage("Click a button");
     }

  return(
    <div>
        <h1>{message}</h1>

        <button onClick={handleGreet}>Greet</button>
        
        <button onClick={handelReset}>Reset</button>

        <input 
          type="text"
          placeholder="Type something"
          onChange={(e) => setMessage(e.target.value)} />


    </div>
   );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);