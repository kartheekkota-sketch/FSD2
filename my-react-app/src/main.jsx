import React from "react";
import ReactDOM from "react-dom/client";

function WelcomeMessage(){
   return <h2>Welcome to react Components!</h2>;
}

class Footer extends React.Component{
  render(){
    return <p>{new Date().getFullYear()} MyWebsite</p>;
  }
}


function App(){
  return (
    <div>
      <WelcomeMessage/>
      <p>This is the main content area.</p>
      <Footer/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);