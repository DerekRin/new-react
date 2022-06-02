import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Projects!</h1>
            <p>
              Bootcamp Final Project - Show Stars!
            </p>
            <p>
            https://show-selector.herokuapp.com/
            </p>
            <p>
              Bootcamp Second Project - Quest Board!
            </p>
            <p>
            https://morning-dawn-99645.herokuapp.com/
            </p>
            <p>
              Bootcamp First Project - Calorie Counter!
            </p>
            <p>
            https://mickieburch.github.io/Calorie-counter/
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;