import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Smurfs from "./Smurfs";
import SmurfForm from "./SmurfForm";

import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <nav>
          <NavLink>Home</NavLink>
        </nav> */}
        <Smurfs />
        <SmurfForm />
      </div>
    );
  }
}

export default App;
