import React, { useState, useEffect } from "react";
import "./job_container.css";
import check from "../assets/check_solid.svg";
export default function Job_container() {
  let jobs = [
    {
      job_type: "full time",
      company_logo:
        "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",
      role: "Product Design",
      salary: "3 - 4L",
      location: "Bengaluru",
    },
    {
      job_type: "part time",
      company_logo:
        "https://img.freepik.com/premium-psd/png-fantasy-flower-neon-art-illustration_53876-607319.jpg?semt=ais_hybrid&w=740",
      role: "Frontend Developer",
      salary: "2 - 3L",
      location: "Hyderabad",
    },
    {
      job_type: "internship",
      company_logo:
        "https://w7.pngwing.com/pngs/895/199/png-transparent-spider-man-heroes-download-with-transparent-background-free-thumbnail.png",
      role: "Marketing Intern",
      salary: "10K - 15K",
      location: "Chennai",
    },
    {
      job_type: "full time",
      company_logo:
        "https://w7.pngwing.com/pngs/819/837/png-transparent-isolated-transparent-background-transparent-diamond-isolated-diamond-png-images-png-diamond-thumbnail.png",
      role: "Backend Engineer",
      salary: "6 - 9L",
      location: "Pune",
    },
    {
      job_type: "contract",
      company_logo:
        "https://raw.githubusercontent.com/hdpngworld/HPW/main/uploads/6506123c24e8a-Lord%20Ganesha.png",
      role: "Data Analyst",
      salary: "4 - 6L",
      location: "Noida",
    },
    {
      job_type: "remote",
      company_logo:
        "https://png.pngtree.com/png-clipart/20190515/original/pngtree-instagram-social-media-icon-png-image_3572487.jpg",
      role: "UI/UX Designer",
      salary: "3 - 5L",
      location: "Remote",
    },
    {
      job_type: "full time",
      company_logo:
        "https://allpngfree.com/apf-prod-storage-api/storage/thumbnails/mahatma-gandhi-png-thumbnail-1643466110.jpg",
      role: "DevOps Engineer",
      salary: "5 - 8L",
      location: "Mumbai",
    },
    {
      job_type: "freelance",
      company_logo:
        "https://png.pngtree.com/element_our/png/20180928/beautiful-hologram-water-color-frame-png_119551.png",
      role: "Content Writer",
      salary: "15K - 25K per month",
      location: "Remote",
    },
    {
      job_type: "part time",
      company_logo:
        "https://png.pngtree.com/element_our/png/20180928/beautiful-hologram-water-color-frame-png_119551.png",
      role: "Graphic Designer",
      salary: "20K - 30K",
      location: "Delhi",
    },
    {
      job_type: "full time",
      company_logo:
        "https://www.pngarts.com/files/3/Walking-Leopard-Free-PNG-Image.png",
      role: "Machine Learning Engineer",
      salary: "8 - 12L",
      location: "Bengaluru",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const [visibleJobs, setVisibleJobs] = useState([]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const toShow = showAll ? jobs : jobs.slice(0, 4);
    setVisibleJobs(toShow);

    // Delay animation trigger
    setTimeout(() => setAnimate(true), 100);
  }, [showAll]);
  return (
    <>
      <div className="latest_job">
        <h1>Latest Jobs</h1>
      </div>
      <div className="job_category">
        {visibleJobs.map((item, index) => (
          <div className={`jobs ${animate ? "show" : ""}`} key={index}>
            <div className="job_top">
              <p>{item.job_type.toUpperCase()}</p>
              <img src={check} alt="check" />
            </div>
            <div className="job_img">
              <img src={item.company_logo} alt={item.job_type} />
            </div>
            <div className="job_title">
              <h4>{item.role}</h4>
              <p>{item.salary}</p>
              <p>{item.location}</p>
            </div>
            <div className="job_apply">
              <button>Apply Now</button>
            </div>
          </div>
        ))}
      </div>
      {!showAll && (
        <div className="job_browse">
          <button
            onClick={() => {
              setShowAll(true);
              setAnimate(false);
            }}
          >
            BROWSE ALL JOBS
          </button>
        </div>
      )}
    </>
  );
}
