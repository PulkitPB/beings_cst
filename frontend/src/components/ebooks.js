import React, { Component, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
  Redirect,
  Outlet,
  useParams,
} from "react-router-dom";
import "flowbite";
import Header from "./header";
import Sidebar from "./sidebar";

export default function Ebooks() {
  const islogin = useParams()["isLogin"];

  return (
    <>
      <Header islogin={islogin} />
      <Sidebar islogin={islogin} />
      <Outlet />
    </>
  );
}
