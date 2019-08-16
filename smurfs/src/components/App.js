import React, { Component } from "react";
import "./App.css";
import { getSmurfData } from "../actions";
import SmurfList from "./SmurfList";


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfList />
        <div className="smurf-form">ENTER FORM DATA HERE</div>
      </div>
    );
  }
}

export default App;
