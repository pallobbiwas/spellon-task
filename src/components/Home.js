import React from "react";
import img from "../image/img1.jpg";
import "./Header.css";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto md:px-20 gap-4 py-20 items-center">
        <div>
          <h1 className="text-5xl font-bold">
            Anything but <br /> ordinary.
          </h1>
          <p className="mb-10 mt-6">
            Some would say it's out of this world. That’s not far off.
          </p>
          <div className="left-border py-5">
            <div className="ml-4">
              <h1 className="mb-3 text-3xl font-bold">ENGINEERED TO THINK</h1>
              <p>
                NOZE uses artificial intelligence to decode the air around you
                in real-time, all the time. It actively samples the air every
                second and breaks things down into specifics so that you can act
                while it matters.
              </p>
            </div>
          </div>
          <div className="left-border py-5 mt-4">
            <div className="ml-4">
              <h1 className="mb-3 text-3xl font-bold">ENGINEERED TO THINK</h1>
              <p>
                NOZE uses artificial intelligence to decode the air around you
                in real-time, all the time. It actively samples the air every
                second and breaks things down into specifics so that you can act
                while it matters.
              </p>
            </div>
          </div>
        </div>
        <div className="md:ml-20">
          <img className="rounded-full" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
