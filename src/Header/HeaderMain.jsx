import React, { useState } from "react";
import "./Headermain.css";
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
import { MainContent } from "./MainContent";
import { Link } from "react-router-dom";
export default function HeaderMain() {
  let [toggle, setToggle] = useState(false);

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
  let authendicate = [
    { text: "Sign In", path: "userauthendicate" },
    { text: "Register", path: "" },
  ];
  return (
    <div className="headerMain">
      <header>
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
            {authendicate.map((item, index) => (
              <Link to={item.path}>
                <p key={index}>{item.text}</p>
              </Link>
            ))}
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

      <MainContent />
    </div>
  );
}
