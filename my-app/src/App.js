import logo from './logo.svg';
import './App.css';
import React from 'react';


function greet(time){
  return <h4>Good {time}</h4>
}

function App() {
  // var x = React.createElement("p",{id:"test"},"Some content");
  var name="Nithin";
  var age=18
  return (
    <React.Fragment>
      <p>Hai</p>
      <ul>
        <li>item1</li>
        <li>item2</li> 
      </ul>
      {2+3}
      <div>
        <h3>
          Welcome {name}
        </h3>
        {greet("Morning")}
        <p>You are {age>=18?"eligible":"not eligible"}</p>
        {/* {document.write("<p>new content</p>")} */}
      </div>
    </React.Fragment>
     
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       {/* Edit <code>src/App.js</code> and save to reload. */}
    //       Welcome to ReactJS
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
