import React from "react";

function About() {
  return (
    <div>
      <div className=" lg:flex lg:mx-52 lg:my-10 mx-3">
        <div className="bg-neutral-400 lg:bg-neutral-400 lg:rounded-3xl lg:px-5 lg:py-5 px-5 py-5 rounded-3xl">
          <img
            className=" "
            src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
            alt=""
          />
        </div>
        <div>
          <div className=" text-6xl lg:text-7xl  font-bold lg:font-bold lg:ml-40 mt-4 lg:mt-0">
            {" "}
            SELF-SUMMERY
          </div>
          <div className="lg:bg-neutral-800 lg:mx-5">
          <img
              src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon2.png"
              alt="log"
            />
            <div>Subarna Keshari Sutar</div>
            <div>I am a San francisco-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience having worked across various fields and industries.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
