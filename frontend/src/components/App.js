import React, { Component, component } from "react";
import { render } from "react-dom";
import Homepage from "./HomePage";
import Login from "./login";
import Register from "./register";
import Faculty from "./faculty";
import Ebooks from "./ebooks";
import Notes from "./notes";
import Videos from "./videos";
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
          {/* <Route path="/" element={} /> */}
          <Route path="/home/:isLogin/" element={<Homepage />} />
          <Route path="/faculty/:isLogin/" element={<Faculty />} />
          <Route path="/notes/:isLogin/" element={<Notes />} />
          <Route path="/ebooks/:isLogin/" element={<Ebooks />} />
          <Route path="/videos/:isLogin/" element={<Videos />} />
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
