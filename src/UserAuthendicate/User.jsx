import React, { useState } from "react";
import "./user.css";
import envelope from "../assets/envelope-solid.svg";
import lock from "../assets/lock-solid.svg";
import phone from "../assets/phone-solid.svg";
import user from "../assets/user-solid.svg";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const formdeatail = [
  { icon: user, info: "Name", type: "text", placeholder: "Name", name: "name" },
  {
    icon: envelope,
    info: "Email",
    type: "email",
    placeholder: "Email",
    name: "email",
  },
  {
    icon: lock,
    info: "Password",
    type: "password",
    placeholder: "........",
    name: "password",
  },
  {
    icon: lock,
    info: "Confirm Password",
    type: "password",
    placeholder: "........",
    name: "confirmPassword",
  },
  {
    icon: phone,
    info: "Phone",
    type: "text",
    placeholder: "Phone Number",
    name: "phone",
  },
];

export default function User() {
  const initialFormData = formdeatail.reduce(
    (acc, item) => ({ ...acc, [item.name]: "" }),
    {}
  );
  const page = useNavigate();
  const [formData, setFormData] = useState(initialFormData);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const register = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.get(
        "https://job-portal-85515-default-rtdb.firebaseio.com/user.json"
      );
      const users = res.data || {};
      const isEmailTaken = Object.values(users).some(
        (user) => user.email === formData.email
      );

      if (isEmailTaken) {
        alert("This email is already registered.");
        return;
      }

      await axios.post(
        "https://job-portal-85515-default-rtdb.firebaseio.com/user.json",
        formData
      );
      alert("User registered successfully!");
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        "https://job-portal-85515-default-rtdb.firebaseio.com/user.json"
      );
      const users = res.data || {};
      let found = false;

      for (let id in users) {
        const user = users[id];
        if (
          user.email === loginData.email &&
          user.password === loginData.password
        ) {
          // ✅ Save to sessionStorage and cookies
          sessionStorage.setItem("userId", id);
          sessionStorage.setItem("email", user.email);

          Cookies.set("userId", id, { expires: 7 });
          Cookies.set("email", user.email, { expires: 7 });

          alert("Login successful!");
          page("/dashboard");
          found = true;
          break;
        }
      }

      if (!found) {
        alert("Invalid credentials");
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="createaccount mt-8">
        <h1 className="text-3xl font-bold text-gray-800">Create an Account</h1>
      </div>
      <div className="register w-full max-w-md p-6 bg-white rounded-lg shadow-md mt-4">
        <div className="button flex gap-2 justify-center mb-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            User Register
          </button>
          <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">
            Recruiter Register
          </button>
        </div>
        <form onSubmit={register} className="flex flex-col gap-4">
          <div className="username flex flex-col gap-3">
            {formdeatail.map((item, index) => (
              <section
                key={index}
                className="info flex items-center gap-2 border-b border-gray-300 pb-2"
              >
                <img
                  src={item.icon}
                  alt={`${item.info} icon`}
                  className="w-5 h-5"
                />
                <span className="text-gray-600 w-28">{item.info}</span>
                <input
                  type={item.type}
                  name={item.name}
                  value={formData[item.name]}
                  onChange={handleChange}
                  placeholder={item.placeholder}
                  className="flex-1 p-2 text-gray-800 outline-none"
                />
              </section>
            ))}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            SIGN UP
          </button>
        </form>
      </div>

      <h1 className="mt-6 text-xl font-semibold">Login User</h1>
      <form
        onSubmit={login}
        className="mt-4 flex flex-col gap-3 w-full max-w-md bg-white p-6 rounded shadow"
      >
        <input
          type="email"
          name="email"
          value={loginData.email}
          onChange={handleLoginChange}
          placeholder="Enter email"
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleLoginChange}
          placeholder="Enter password"
          className="p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
}
