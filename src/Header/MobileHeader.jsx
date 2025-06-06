import React, { useState } from "react";
import "./Mobileheader.css";
import home from "../assets/home_mobile.png";
import work from "../assets/work_mobile.png";
import call from "../assets/call_mobile.png";
import corporate from "../assets/apartment_mobile.png";
import menu from "../assets/menu_40.png";
import user_logo from "../assets/account.png";
import dashboard from "../assets/dashboard_Mobile.png";
import profile from "../assets/person_mobile.png";
import view_profile from "../assets/id_card_mobile.png";
import job_applied from "../assets/laptop_mobile.png";
import logout from "../assets/logout_mobile.png";
import search_mobile from "../assets/search_mobile.png";
import { MainContent } from "./MainContent";
import { Link } from "react-router-dom";
export const MobileHeader = () => {
  let navLinks = [
    { logo: home, title: "Home" },
    { logo: work, title: "Jobs" },
    { logo: corporate, title: "Companies" },
    { logo: call, title: "Contact" },
  ];
  let options = [
    { logo: dashboard, title: "Dashboard", path: "/dashboard" },
    { logo: profile, title: "Profile" },
    { logo: view_profile, title: "View Profile" },
    { logo: job_applied, title: "Job Applied" },
    { logo: logout, title: "Loguot" },
  ];
  let [visible, setVisible] = useState(false);
  let [dashboard_demo, setDashboard] = useState(false);
  return (
    <>
      <div className="mobile_menubar">
        <nav className="mobile_nav">
          <section className="mobile_menu">
            <img
              src={menu}
              alt={menu}
              onClick={() => {
                setVisible(!visible);
                setDashboard(false);
              }}
            />
            {visible === true ? (
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
            ) : (
              ""
            )}
          </section>
          <section className="mobile_search">
            <form>
              <label htmlFor="">
                <img src={search_mobile} alt="" />
              </label>
              <input type="search" placeholder="Enter your job..." />
            </form>
          </section>
          <section className="mobile_user">
            <img
              src={user_logo}
              alt={user_logo}
              onClick={() => {
                setDashboard(!dashboard_demo);
                setVisible(false);
              }}
            />
          </section>

          {dashboard_demo === true ? (
            <section className="options fade-in">
              <ul className="multiple_options">
                {options.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path}>
                      <img src={item.logo} alt="" /> &nbsp; {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : (
            ""
          )}
        </nav>

        <MainContent />
      </div>
    </>
  );
};
