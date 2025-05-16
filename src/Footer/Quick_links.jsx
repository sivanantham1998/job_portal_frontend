import React from "react";
import "./quick_links.css";
import idm_logo from "../assets/idm_tech_logo.png";
import facebook_logo from "../assets/facebook-brands.svg";
import instagram_logo from "../assets/instagram-brands.svg";
import youtube_logo from "../assets/youtube-brands.svg";
import linkedin_logo from "../assets/linkedin-brands.svg";
import angel_right from "../assets/angles-right-solid.svg";
export default function Quick_links() {
  let socialMedia_logo = [
    facebook_logo,
    instagram_logo,
    linkedin_logo,
    youtube_logo,
  ];
  let categories = [
    "Work from Home",
    "Internship Jobs",
    "Freelancer Jobs",
    "Part Time Job",
    "Full time job",
  ];

  let jobType = [
    "Create Account",
    "Carrer Counselling",
    "My Offcionio",
    "FAO",
    "Report A problem",
  ];
  let resoure = [
    "My Account",
    "Support",
    "How it Works",
    "Underwriting",
    "Employers",
  ];

  let quick = [
    "Job Listing",
    "About us",
    "Contact us",
    "Privacy Policy",
    "Team & condition",
  ];
  return (
    <>
      <div className="container_quick_link">
        <div className="quick_link_content">
          <img src={idm_logo} alt="" />
          <p>
            Lorem Ipsum is simply dummy text of printing and type setting
            industry. Lorem Ipsum been industry standard dummy text ever since
          </p>
          <section className="social_media">
            {socialMedia_logo.map((item, index) => (
              <a href="#" key={index}>
                <img src={item} alt="" />
              </a>
            ))}
          </section>
        </div>
        <div className="quick_link_job_category">
          <h2>Job Categories</h2>
          <div className="category">
            {categories.map((item, index) => (
              <section key={index}>
                <img src={angel_right} alt="" />
                <p>{item}</p>
              </section>
            ))}
          </div>
        </div>
        <div className="">
          <h2>Job type</h2>
          <div className="category">
            {jobType.map((item, index) => (
              <section key={index}>
                <img src={angel_right} alt="" />
                <p>{item}</p>
              </section>
            ))}
          </div>
        </div>
        <div className="">
          <h2>Resoures</h2>
          <div className="category">
            {resoure.map((item, index) => (
              <section key={index}>
                <img src={angel_right} alt="" />
                <p>{item}</p>
              </section>
            ))}
          </div>
        </div>
        <div className="">
          <h2>Quick Links</h2>
          <div className="category">
            {quick.map((item, index) => (
              <section key={index}>
                <img src={angel_right} alt="" />
                <p>{item}</p>
              </section>
            ))}
          </div>
        </div>
      </div>
      <section className="copy">
        <hr />
        <p>Copyright © 2024 All Rights Reserved</p>
      </section>
    </>
  );
}
