import React,{ Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Login from "./Login";
import User from "./User";
import Events from './examples/events';
import EventsState from './examples/eventsState';

function SayHello(){
  return <h1>Hello Priya!</h1>
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: ''
    }
  }

  onInputChange = (e) => {
    console.log('Yay! Input')
    console.log(e);

    this.setState({username: e.target.value});
  };

 render(){ return (
   <>
   <Login />
    {/* <SayHello />
    <User sample={() => console.log("Sample User")} user={this.state.username}/>
    <Events onInputChange={this.onInputChange}/>
    <EventsState /> */}
    </>  
  );
 }
}

export default App;
