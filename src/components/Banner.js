import React from "react";
import img from "../image/img1.jpg";

const Banner = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:px-32 py-32 h-full items-center gap-4">
        <div className="mr-10 ">
          <h1 className="text-5xl mb-8 font-bold">
            There’s something new in the air
          </h1>
          <p>
            NOZE is an AI powered air quality monitor that works to keep you
            safe. Breathe easy.
          </p>
          <button className="btn btn-primary px-4 mt-8">
            Join the waitlist
          </button>
        </div>
        <div>
          <img className="rounded-lg" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
