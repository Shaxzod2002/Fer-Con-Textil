import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Fercontextil from "./Components/window/Fercontextil";
import AOS from 'aos';
import 'aos/dist/aos.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
    AOS.init({ duration: 2000 });
  }
  render() {
    return (
      <>
        <div className="container-fluid">
          <Fercontextil />
        </div>
      </>
    )
  }
}

export default App;