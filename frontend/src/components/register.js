import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import React, { useState } from "react";

export default function Register({
  openModal,
  onCloseModal,
  // phone_number,
  // email,
  // password,
}) {
  const [email, setEmail] = useState("");
  const [phone_number, setphone_number] = useState("");
  const [password, setpassword] = useState("");
  return (
    <>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <form className="space-y-6" method="post" action="/userregister">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Register to our platform
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput
                  name="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
              {/* <input
                type="hidden"
                name="csrfmiddlewaretoken"
                value=""
              /> */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="phone number" value="Your phone number" />
                </div>
                <TextInput
                  name="phone_number"
                  // placeholder="name@company.com"
                  value={phone_number}
                  onChange={(event) => setphone_number(event.target.value)}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(event) => setpassword(event.target.value)}
                />
              </div>
              <div className="w-full" type="submit">
                <Button type="submit">Register</Button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
