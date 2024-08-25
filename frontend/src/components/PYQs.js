import React, { Component, useState, useEffect } from "react";
import { Card } from "flowbite-react";
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

export default function PYQs() {
  const islogin = useParams()["isLogin"];
  const [subject, setsubject] = useState("");
  const [pyqs, setpyqs] = useState([]);
  useEffect(() => {
    const fetchPYQsDetails = async () => {
      try {
        const response = await axios.get("/api/pyqs/");
        // console.log(response.data);
        setpyqs(response.data);
      } catch (error) {
        console.error("Error fetching pyqs details:", error);
      }
    };

    fetchPYQsDetails();
  }, []);
  return (
    <>
      <Header islogin={islogin} />
      <Sidebar islogin={islogin} />
      <div className="md:ml-64 flex justify-center pr-32 pt-24">
        <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          <section
            style={{
              backgroundImage:
                "url('https://www.iiests.ac.in/assets/images/gallery/image_(10)8.jpg')",
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "400px",
            }}
          >
            <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
              <h1 className="text-4xl text-white font-bold">
                Previous Year Questions
              </h1>
            </div>
          </section>

          <form className="max-w-sm mx-auto">
            <h1
              htmlFor="Subjects"
              className="block mb-2 text-gray-900 dark:text-white text-4xl font-bold mt-4"
            >
              Select a Subject
            </h1>
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
                placeholder="Search Subject"
                required=""
                // value={input}
                onInput={(e) => setsubject(e.target.value)}
              />
              <button
                type="submit"
                onClick={(e) => setsubject(e.target.value)}
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>

          {pyqs.map((item) => {
            if (
              item["subject"].toLowerCase().includes(subject.toLowerCase()) ||
              subject === ""
            ) {
              return (
                <div className="container mx-auto p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-md">
                      <h2 className="text-2xl font-semibold mb-2">
                        Semester {item["semester"]}
                      </h2>
                      <h3 className="text-xl font-semibold mb-2">
                        {item["subject"]}
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 border border-gray-200 rounded-lg shadow-sm">
                          <h4 className="text-lg font-semibold mb-2">
                            {item["name"]}
                          </h4>
                          <a
                            href={item["fileLink"]}
                            target="_blank"
                            className="bg-blue-900 text-white px-4 py-2 mx-2 rounded inline-block"
                          >
                            View
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </main>
      </div>
      <Outlet />
    </>
  );
}
