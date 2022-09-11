import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Fercontextil from "./Components/window/Fercontextil";
import Load from "./Components/Loading";

export default function App() {
  return (
    <>
      <div className="container-fluid">
        <Load />
        <Fercontextil />
      </div>
    </>
  )
}