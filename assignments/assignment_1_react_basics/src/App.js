import React, { Component } from 'react';
import './App.css';
import Userinput from "./User/UserInput";
import UserOutput from "./User/UserOutput";


class App extends Component {
  state = {
    users: [
      {username: "LauraPo"},
      {username: "Marcus"},
      {username: "Lorenzo"}
    ]
  };

switchUserHandler = (newUser) => {
  this.setState({
    users: [
      {username: newUser},
      {username: "Maurizio"},
      {username: newUser}
    ]
  })
};


userChangeHandler = (event) => {
  this.setState({
    users: [
      {username: "LauraPo"},
      {username: "Marcus"},
      {username: event.target.value}
    ]
  });
};


  render() {
    const style = {
      backgroundColor: "light",
      border: "2px solid grey",
      padding: "8px",
      cursor: "pointer",
      boxShadow: "0 2px 3px #ccc"
    };


    return (
      <div className="App">
        <h1>This is my first Assignment!!!</h1>
        <Userinput inputText={this.state.users[0].username}></Userinput>
        <UserOutput username={this.state.users[0].username} text="This is the text of my choise"></UserOutput>
        <Userinput inputText={this.state.users[1].username}></Userinput>
        <UserOutput username={this.state.users[1].username} text="This is the other text"></UserOutput>
        <Userinput changed={this.userChangeHandler} inputText={this.state.users[2].username}></Userinput>
        <UserOutput username={this.state.users[2].username} text=" One more text line."></UserOutput>
        <button  style={style} onClick={this.switchUserHandler.bind(this, "Lau")}>Switch All User Names</button>
      </div>
    );
  }
}

export default App;
