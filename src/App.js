import React, { Component } from 'react';
import './App.css';
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

class App extends Component {

  state = {
    user : [
      {username: "@AlexMachin97"},
    ]
  }


  usernameChangedHandler = (newName) => {
    {/*
       sets the username to the newName argument which is set when the method is
       called
    */}
    
    this.setState({
      user : [
       {username: newName}
      ]
    }); 
  }

  inputHandler = (event) => {
    this.setState({ user : [{username: event.target.value}]})
  }
  
  render() {
    return (
      <div className="App">

        {/* Displaying The Username With No Changes Such As Click */}
        {/* props.username is the username referenced when the component is referenced*/}
        <p> The Below Username Will Not Change : </p>
        <UserOutput username = "Alex Machin"> 
        </UserOutput>
        
        {/* On Click Of The Paragraph Change It From Alex Macin to AlexMachin1997 */}
        {/* To Change The Name The usernameChangedHandler Along With The Bind Method Was Used*/}
        <p> This User Name Will Change On Click Of The Paragraph </p>
        <UserOutput username = {this.state.user[0].username}
        click = {this.usernameChangedHandler.bind(this,"AlexMachin1997")}> 
        </UserOutput>

        {/* The prop changed calls the inputHandler method to use the value in the input */}
        {/* The Value Is The Current Username Which Is Stored In The State*/}
        <UserInput username={this.state.user[0].username} changed={this.inputHandler}> 
        </UserInput>


      </div>
    );
  }
}

export default App;
