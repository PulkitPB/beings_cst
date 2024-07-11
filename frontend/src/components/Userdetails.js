import axios from "axios";
import React, { useEffect, useState } from "react";
import "flowbite";
export default function Userdetails({ isLogin }) {
  const [useremail, setUseremail] = useState("");
  const [userphone_number, setUserphone_number] = useState("");

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/");
        console.log(response.data);
        setUseremail(response.data["email"]);
        setUserphone_number(response.data["phone_number"]);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  useEffect(() => {
    console.log("User email:", useremail);
    console.log("User phone number:", userphone_number);
  }, [useremail, userphone_number]);
  // window.onload = function () {
  // var z = document.getElementById("profile");
  if (isLogin == "true") {
    // console.log(useremail, userphone_number);
    if (!useremail) {
      return <div>Loading...</div>;
    }

    return (
      <>
        <div className="flex items-center" id="profile">
          <div className="flex items-center ms-3">
            <div>
              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                aria-expanded="false"
                data-dropdown-toggle="dropdownuser"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://th.bing.com/th?id=OIP.mIpwecyVykzZOt0J3C8rsgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
                  alt="user photo"
                />
              </button>
            </div>
            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
              id="dropdownuser"
            >
              <div className="px-4 py-3" role="none">
                <p
                  className="text-sm text-gray-900 dark:text-white"
                  role="none"
                >
                  {userphone_number}
                </p>
                <p
                  className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                  role="none"
                >
                  {useremail}
                </p>
              </div>
              <ul className="py-1" role="none">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }

  // console.log(x.style.display);
}
// return null;
// }
