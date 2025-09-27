import { Link } from "react-router-dom";
import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
export default function Login() {
  const [phone_number, setphone_number] = useState("");
  const [password, setpassword] = useState("");
  return (
    <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
      <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
        <div
          className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
          style={{
            backgroundImage: `url(https://www.tailwindtap.com//assets/components/form/userlogin/login_tailwindtap.jpg)`,
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <form className="space-y-6" method="post" action="/userlogin">
            <p className="text-xl text-gray-600 text-center">Welcome back!</p>
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
              <a
                href="#"
                className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
              >
                Forgot Password?
              </a>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600"
              >
                Login
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
              to="/register"
              className="text-xs text-gray-500 capitalize text-center w-full"
            >
              Don&apos;t have any account yet?
              <span className="text-blue-700"> Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
