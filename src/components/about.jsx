import React from "react";
import project from '../assets/project.png'

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={project}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Projects!</h1>
            <p><a href={"https://show-selector.herokuapp.com/"}>
              Bootcamp Final Project - Show Stars!</a>
            </p>
            <p><a href={"https://morning-dawn-99645.herokuapp.com/"}> 
              Bootcamp Second Project - Quest Board!</a>
            </p>
            <p> <a href={"https://mickieburch.github.io/Calorie-counter/"}>
              Bootcamp First Project - Calorie Counter!</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;