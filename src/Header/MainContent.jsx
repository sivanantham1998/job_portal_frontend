import React from "react";
import "./Maincontent.css";
import { FaBuilding } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";
export const MainContent = () => {
  const trending_job = [
    "web designer",
    "web developer",
    "IOS developer",
    "Andriod Developer",
  ];

  const job_category = [
    "Software developer",
    "Software developer",
    "Software developer",
    "Software developer",
    "Software developer",
    "Software developer",
    "Software developer",
    "Software developer",
  ];
  function job_search(e) {
    e.preventDefault();
  }
  return (
    <>
      <div className="headerContent">
        <h1>India's No 1 Jobs Portal</h1>
        <h1>Then 50,000 Open Jobs.</h1>
        <p>
          Trending Job Key Words:
          {trending_job.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </p>
        <form onSubmit={job_search} className="job-form">
          <input type="search" placeholder="Search Keywords..." />
          <select>
            <option value="">Location</option>
          </select>
          <select>
            <option value="">Category</option>
          </select>
          <input type="submit" value="SEARCH" />
        </form>

        <section className="category">
          {job_category.map((item, index) => (
            <section className="category_item" key={index}>
              <div className="icon-wrapper">
                <FaBuilding className="icon" />
              </div>
              <div className="category">
                <p>{item}</p>
              </div>
              <div>
                <MdChevronRight className="job_icon" />
              </div>
            </section>
          ))}
        </section>
      </div>
    </>
  );
};
