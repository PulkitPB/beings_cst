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

export default function HomePage() {
  const islogin = useParams()["isLogin"];

  return (
    <>
      <Header islogin={islogin} />
      <Sidebar islogin={islogin} />
      <>
        {/* Parallax Section */}
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
            <h1 className="text-4xl text-white font-bold">BEings CST</h1>
          </div>
        </section>
        {/* Main Content Wrapper */}
        <div className="flex mt-6">
          {/* Main Content Area */}
          <main className="flex-1 p-6 bg-gray-50 ml-64">
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">
                Explore Study Materials
              </h2>
              <p className="text-gray-700 mb-6">
                Access a variety of resources designed to help you succeed in
                your courses at IIEST Shibpur.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Resource Card */}
                <div className="bg-blue-100 p-4 rounded-lg shadow-md hover:bg-blue-200">
                  <h3 className="text-lg font-semibold text-blue-900">
                    Faculty Directory
                  </h3>
                  <p className="text-gray-600">
                    Find contact information and details about your professors.
                  </p>
                  <a
                    href="/faculty/true/"
                    className="text-blue-900 hover:underline"
                  >
                    Learn more →
                  </a>
                </div>
                {/* Another Resource Card */}
                <div className="bg-green-100 p-4 rounded-lg shadow-md hover:bg-green-200">
                  <h3 className="text-lg font-semibold text-green-900">
                    Notes
                  </h3>
                  <p className="text-gray-600">
                    Access notes for all semesters and subjects.
                  </p>
                  <a
                    href="/notes/true/"
                    className="text-green-900 hover:underline"
                  >
                    Learn more →
                  </a>
                </div>
                {/* Another Resource Card */}
                <div className="bg-yellow-100 p-4 rounded-lg shadow-md hover:bg-yellow-200">
                  <h3 className="text-lg font-semibold text-yellow-900">
                    Previous Year Questions
                  </h3>
                  <p className="text-gray-600">
                    Review past exam questions to prepare better.
                  </p>
                  <a
                    href="/pyqs/true/"
                    className="text-yellow-900 hover:underline"
                  >
                    Learn more →
                  </a>
                </div>
                {/* Another Resource Card */}
                <div className="bg-red-100 p-4 rounded-lg shadow-md hover:bg-red-200">
                  <h3 className="text-lg font-semibold text-red-900">
                    Video Lectures
                  </h3>
                  <p className="text-gray-600">
                    Watch recorded lectures from various subjects.
                  </p>
                  <a
                    href="/videos/true/"
                    className="text-red-900 hover:underline"
                  >
                    Learn more →
                  </a>
                </div>
                {/* Add more cards as needed */}
              </div>
            </section>
          </main>
        </div>
      </>

      <Outlet />
    </>
  );
}
