import React, { Component, useState, useEffect } from "react";
import { Card } from "flowbite-react";
// import Image from "next/image";
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
import axios from "axios";

export default function Faculty() {
  const islogin = useParams()["isLogin"];
  const [input, setinput] = useState("");
  const [faculties, setfaculties] = useState([]);
  useEffect(() => {
    const fetchFacultyDetails = async () => {
      try {
        const response = await axios.get("/api/faculty/");
        // console.log(response.data);
        setfaculties(response.data);
      } catch (error) {
        console.error("Error fetching faculty details:", error);
      }
    };

    fetchFacultyDetails();
  }, []);
  return (
    <>
      <Header islogin={islogin} />
      <Sidebar islogin={islogin} />

      <div className="md:ml-64 flex justify-center items-centers">
        <ul>
          <li>
            <ul>
              <li>
                <form className=" mt-14 p-4 w-96">
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search Faculty"
                      required=""
                      // value={input}
                      onInput={(e) => setinput(e.target.value)}
                    />
                    <button
                      type="submit"
                      onClick={(e) => setinput(e.target.value)}
                      className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </li>
            </ul>
          </li>
          <li>
            <ul className="grid grid-cols-2">
              {faculties.map((item) => {
                if (
                  item["name"].toLowerCase().includes(input.toLowerCase()) ||
                  input === ""
                ) {
                  return (
                    <li>
                      <Card className="mt-4 w-96 ml-4 bg-slate-100">
                        <div className="flex flex-col items-center pb-10">
                          <img
                            alt="gotchu"
                            height="96"
                            src={item["image"]}
                            width="96"
                            className="mb-3 rounded-full shadow-lg"
                          />
                          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                            {item["name"]}
                          </h5>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {item["phone_number"]}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {item["email"]}
                          </span>
                        </div>
                      </Card>
                    </li>
                  );
                }
              })}
            </ul>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
