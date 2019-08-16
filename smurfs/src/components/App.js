import React, { Component } from "react";
import "./App.css";
import { getSmurfData } from "../actions";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfList />
        <div className="smurf-form">
          <SmurfForm />
        </div>
      </div>
    );
  }
}

export default App;
