import React from "react";

function Home() {
  return (
    <div className="home">
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
            <h1 class="font-weight-light">Home!</h1>
            <p>
            Hi, my name is Derek and as a kid that lived most of their life in the small town of Dodge City, I've always had this fascination when it comes to technology and coding. Whether it was websites, systems, or video games I was always inthralled by them and wanted to know how they work and how to do it myself. 

During my six months of fullstack development, I spent everyday studying and learning to code, using HTML, JavaScript, CSS, and so on. However, I became more interested in development of the front-end of web development than the back-end. 

When I'm not busy with learning I'm either spending my free time drawing, writing, working on personal video game related projects, or relaxing by watching Ultraman. I hope we can get along and move forward to make something great.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;