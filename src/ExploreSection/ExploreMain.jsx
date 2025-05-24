import React from "react";
import explore from "../assets/exploreImage-removebg-preview.png";
import "./exploreMain.css";
export default function ExploreMain() {
  const options = [
    "Expert Speak",
    "Contests",
    "NCAT",
    "Pathfinder",
    "Jobs & Internships",
  ];
  return (
    <>
      <div className="exploreMain">
        <section className="exploreContent">
          <div className="exploreImage">
            <img src={explore} alt="" />
          </div>
          <div className="exploreDemo">
            <h4>
              Introduction a career oriented courses for college student & fresh
              grads
            </h4>
            <p>
              Explore contests, webinars, take aptitude test, prepare for your
              dream career & find jobs & internships
            </p>
            <ul>
              {options.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="explorebtn">
            <button>Explore Now</button>
          </div>
        </section>
      </div>
    </>
  );
}
