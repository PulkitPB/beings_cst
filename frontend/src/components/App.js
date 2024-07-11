import React, { Component, component } from "react";
import { render } from "react-dom";
import Homepage from "./HomePage";
import Login from "./login";
import Register from "./register";
// import Login from "./login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<p>testing</p>} />
          <Route path="/home" element={<Homepage islogin={false} />} />
          <Route path="/home/:isLogin/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userlogin" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userregister" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}
const AppDiv = document.getElementById("app");
render(<App />, AppDiv);
