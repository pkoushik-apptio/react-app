import React,{ Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Login from "./Login";
import User from "./User";
function SayHello(){
  return <h1>Hello Priya!</h1>
}

class App extends Component {
 render(){ return (
   <>
   <SayHello />
   <User />
</>  );
 }
}

export default App;
