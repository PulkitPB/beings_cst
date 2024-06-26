import React, { Component, component } from "react";
import { render } from "react-dom";
import homepage from "./HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
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
            <Route exact path="/">
              <p>Testing</p>
            </Route>
            <Route path="/home" component={homepage}></Route>
          </Routes>
        </Router>
      </>
    );
  }
}
const AppDiv = document.getElementById("app");
render(<App />, AppDiv);
