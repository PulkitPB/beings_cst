import { Link } from "react-router-dom";
import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [phone_number, setphone_number] = useState("");
  return (
    <div className="h-[100vh] items-center flex justify-center px-5 lg:px-0">
      <div className="max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1">
        <div
          // className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
          className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://www.tailwindtap.com/assets/common/marketing.svg)`,
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <form className="space-y-6" method="post" action="/userregister">
            <p className="text-xl text-gray-600 text-center">Welcome!</p>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="email"
                name="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Phone Number
              </label>
              <input
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="number"
                name="phone_number"
                placeholder="xxxxxxxxxx"
                value={phone_number}
                onChange={(event) => setphone_number(event.target.value)}
                required
              />
            </div>
            <div className="mt-4 flex flex-col justify-between">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
              </div>
              <input
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="password"
                name="password"
                required
                value={password}
                onChange={(event) => setpassword(event.target.value)}
              />
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600"
              >
                Register
              </button>
            </div>
          </form>
          <GoogleOAuthProvider clientId="453766993731-l9ti6oagidienrmq3of5k6sluefaec7e.apps.googleusercontent.com">
            <div className="flex items-center justify-center mt-4">
              <GoogleLogin
                theme="outline"
                size="large"
                width="100%"
                shape="pill"
                text="continue_with"
                onSuccess={(credentialResponse) => {
                  // console.log(credentialResponse);
                  const token = credentialResponse.credential;

                  fetch("/google_login", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({ token }),
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      if (data.redirect) {
                        window.location.href = data.redirect;
                      }
                    });
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>
          </GoogleOAuthProvider>
          <div className="mt-4 flex items-center w-full text-center">
            <Link
              to="/login"
              className="text-xs text-gray-500 capitalize text-center w-full"
            >
              Already have an account?
              <span className="text-blue-700"> Log in</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
