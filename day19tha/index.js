// var React = require('react');
// var ReactDOM = require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App19.jsx";

// ReactDOM.render(<h1>Hello world!!!</h1>,document.getElementById('root'));
// ReactDOM.render(
//     <div>
//          <h1>hello world!!</h1>
//         <p>welcome to all over here</p>
//     </div>,
// document.getElementById("root")
// );

// function Navbar(){
//     return <h1>navbar</h1>;
// }

//function using render
// function App()
// {
//     return(

//     <div>
//         <Navbar />
//         <h1>hello world!!</h1>
//         <p>welcome to all over here</p>
//     </div>
// );}
ReactDOM.render(<App />,document.getElementById("root"));
