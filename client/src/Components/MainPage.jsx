import React from "react";
import Navbar from "./Navbar";

export default function MainPage() {
  return (
    <>
      <Navbar />
      <div className="navbarContainer">
        <h1>Sign In To ManageYourProjects</h1>
        <p># Your Projects Our Responsibility</p>
      </div>

      <div className="sectionContainer">
        <div className="sections">
          <img
            className="sectionImg"
            src="https://img.freepik.com/free-vector/data-center-information-cartoon-style-isometric-vector-database-system_100456-9243.jpg?w=2000"
            alt=""
          />
          <div className="sectionHeading">
            <h1>Store Your Project Data Very Accurately </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              reiciendis nesciunt impedit! Atque ut vitae minus, distinctio
              assumenda quam officiis qui maxime tempore optio dolorum!
            </p>
          </div>
        </div>

        <div className="sections">
          <div className="sectionHeading">
            <h1>Dont Get Confused Regarding Your Projects</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              reiciendis nesciunt impedit! Atque ut vitae minus, distinctio
              assumenda quam officiis qui maxime tempore optio dolorum!
            </p>
          </div>
          <img
            className="sectionImg"
            src="https://img.myloview.com/posters/patient-vector-icon-isolated-on-white-background-outline-thin-line-patient-icon-for-website-design-and-mobile-app-development-thin-line-patient-outline-icon-vector-illustration-400-215651491.jpg"
            alt=""
          />
        </div>
        <div className="sections">
          <img
            className="sectionImg"
            src="https://previews.123rf.com/images/pyatkevichdenis/pyatkevichdenis1912/pyatkevichdenis191200408/135596456-doodle-sketch-girl-points-hand-down-cartoon-illustration-for-your-layout-website-on-a-white-backgrou.jpg"
            alt=""
          />
          <div className="sectionHeading">
            <h1>Connect With Us More </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              reiciendis nesciunt impedit! Atque ut vitae minus, distinctio
              assumenda quam officiis qui maxime tempore optio dolorum!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
