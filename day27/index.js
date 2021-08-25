import React from 'react';
import ReactDOM from 'react-dom';
// import Heading from './Heading';
// import Para from './Para';
// import List from './List';
// import Appp from './Appp';
// import * as zx from './App2'; 
import App from  "./Day27App.jsx";
import store from "./store";
import { Provider } from "react-redux";



ReactDOM.render(
<>

{/* <ol>
  <li>
    and
  </li>
  <li>{zx.default}</li>
  <li>{zx.favpro}</li>
  <li>{zx.myname()}</li>
  <li>{zx.mynames()}</li>
</ol> */}
<React.StrictMode>
  <Provider store = {store}><App/></Provider>
</React.StrictMode>



</>,document.getElementById('root')
);




// var React=require('react');
// var ReactDOM=require('react-dom');
// ReactDOM.render(<React.StrictMode><App/>
// </React.StrictMode>,
//   document.getElementById("root"));

