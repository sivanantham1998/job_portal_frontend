import React from "react";
import envelope from "../assets/envelope-regular.svg";
import "./footer_main.css";
export default function FooterMain() {
  return (
    <>
      <div className="footer">
        <div className="subscribe_footer">
          <h1>Subscribe Our Newsletter</h1>
        </div>
        <div className="para_footer">
          <p>
            Lorem Ipsum is simply dummy text printing and type setting industry
            <br />
            Lorem Ipsum been industry standard dummy text ever since when
            unknown printer took a galle
          </p>
        </div>
        <div className="subscribe_form">
          <form action="">
            <img src={envelope} alt="" />
            <input type="email" placeholder="Enter your Email...." />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </>
  );
}
