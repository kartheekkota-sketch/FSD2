import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Home(){
  return <h2>Welcome to Home Page</h2>;
}
function About(){
  return <h2>Welcome to About Page</h2>;
}
function Contact(){
  return <h2>Contact us at: contact@example.com</h2>;
}

function App(){
  return(
    <BrowserRouter>
    <div>
      <h1>React Router Example  </h1>
      
      </div>
      </BrowserRouter>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);