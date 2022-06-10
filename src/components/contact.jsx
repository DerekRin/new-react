import React from "react";
import phone from '../assets/Phone_icon.png'

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={phone}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Contact Me!</h1>
            <p>
              My email is Derekrin98@gmail.com!
            </p>
            <p>
              My phone number is (913)-209-5834!
            </p>
            <p> <a href={"https://github.com/DerekRin"}>
              My Github! </a>
            </p>
            <p> <a href={"https://www.linkedin.com/in/derek-rincones-90b2a5228/"}>
              My Linkdin!</a> 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;