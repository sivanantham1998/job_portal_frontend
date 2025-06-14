import React, { useEffect, useState } from "react";
import "./Menbar.css";
import home from "../assets/home.png";
import work from "../assets/work.png";
import call from "../assets/call.png";
import corporate from "../assets/corporate.png";
import account from "../assets/account.png";
import dashboard from "../assets/dashboard.png";
import profile from "../assets/person.png";
import view_profile from "../assets/id_card.png";
import job_applied from "../assets/laptop.png";
import logout from "../assets/logout.png";
import Cookies from "js-cookie";
export default function Menubar() {
  let [toggle, setToggle] = useState(false);
  let [email, setEmail] = useState("");
  let navLinks = [
    { logo: home, title: "Home" },
    { logo: work, title: "Jobs" },
    { logo: corporate, title: "Companies" },
    { logo: call, title: "Contact" },
  ];

  let options = [
    { logo: dashboard, title: "Dashboard" },
    { logo: profile, title: "Profile" },
    { logo: view_profile, title: "View Profile" },
    { logo: job_applied, title: "Job Applied" },
    { logo: logout, title: "Loguot" },
  ];
  let authendicate = ["Sign In", "Resigter"];

  useEffect(() => {
    setEmail(sessionStorage.getItem("email"));
  }, []);

  return (
    <>
      <header style={{ backgroundColor: "blue", color: "black" }}>
        <div className="logo">
          <h2>Logo</h2>
        </div>
        <nav className="main_nav">
          <ul>
            {navLinks.map((item, index) => (
              <li key={index}>
                <img src={item.logo} alt={item.title} />
                {item.title}
              </li>
            ))}
          </ul>
        </nav>
        <nav className="authendicate">
          <div className="login">
            {email === true ? (
              authendicate.map((item, index) => <p key={index}>{item}</p>)
            ) : (
              <h3>{email}</h3>
            )}
          </div>
          <div className="account_details">
            <div className="account" onClick={() => setToggle(!toggle)}>
              <img src={account} alt="account_cirlce" />
            </div>
            {toggle && true ? (
              <section className="options fade-in">
                <ul className="multiple_options">
                  {options.map((item, index) => (
                    <li key={index}>
                      <img src={item.logo} alt="" /> &nbsp; {item.title}
                    </li>
                  ))}
                </ul>
              </section>
            ) : (
              ""
            )}
          </div>
        </nav>
      </header>
      <button
        onClick={() => {
          sessionStorage.removeItem("email");
          sessionStorage.removeItem("userId");
          Cookies.remove("email");
          Cookies.remove("userId");
        }}
      >
        logout
      </button>
    </>
  );
}
