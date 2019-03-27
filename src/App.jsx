import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Button from '@material-ui/core/Button';
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
        <Button variant="contained" color="primary">
          Click Me
        </Button>
      </div>
    );
  }
}

export default hot(module)(App);
