import React, { Component, component } from "react";
import { render } from "react-dom";
import Homepage from "./HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Router>
      <Routes>
        <Route path="/" element={<p>testing</p>}/>
        <Route path="/home" element={<Homepage/>}/>
      </Routes>
    </Router>
      </>
    );
  }
}
const AppDiv = document.getElementById("app");
render(<App />, AppDiv);
