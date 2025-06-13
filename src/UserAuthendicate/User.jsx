import React from "react";
import "./user.css";
import envelope from "../assets/envelope-solid.svg";
import lock from "../assets/lock-solid.svg";
import phone from "../assets/phone-solid.svg";
import user from "../assets/user-solid.svg";
export default function User() {
  let formdeatail = [
    { icon: user, info: "Name", type: "text", placeholder: "Name" },
    { icon: envelope, info: "Email", type: "email", placeholder: "Email" },
    { icon: lock, info: "Password", type: "password", placeholder: "........" },
    {
      icon: lock,
      info: "Confirm Password",
      type: "password",
      placeholder: "........",
    },
    { icon: phone, info: "Phone", type: "text", placeholder: "Phone Number" },
  ];
  return (
    <>
      <div className="createaccount">
        <h1>Create an Account</h1>
      </div>
      <div className="register">
        <div className="button">
          <button>User Register</button>
          <button>Recruiter Register</button>
        </div>
        <form>
          <div className="username">
            {formdeatail.map((item, index) => (
              <section className="info">
                <img src={item.icon} alt="" />
                <span>{item.info}</span>
                <input type={item.type} placeholder={item.placeholder} />
              </section>
            ))}
          </div>
          <button>SIGN UP</button>
        </form>
      </div>
    </>
  );
}
