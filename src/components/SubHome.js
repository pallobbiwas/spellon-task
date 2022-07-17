import React from "react";
import vdio from "../image/background video _ people _ walking _.mp4";

const SubHome = () => {
  return (
    <div className="container mx-auto py-48">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="mr-10">
          <video className="rounded-lg" autoPlays muted src={vdio} />
        </div>
        <div>
          <h1 className="text-6xl mb-16">Сonquer the Virus</h1>
          <p>
            Noze tracks the airborne markers (VOCs) associated with the
            Coronavirus family. Our AI uses that information to deliver a
            real-time risk index that will not only tell you if your space is
            prone to spreading the virus, but whether there’s a chance the virus
            is actually in the air.
          </p>
        </div>
      </div>
      {/* new one */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mt-52">
        <div>
          <h1 className="text-6xl mb-16">Сonquer the Virus</h1>
          <p>
            Noze tracks the airborne markers (VOCs) associated with the
            Coronavirus family. Our AI uses that information to deliver a
            real-time risk index that will not only tell you if your space is
            prone to spreading the virus, but whether there’s a chance the virus
            is actually in the air.
          </p>
        </div>
        <div className="mr-10">
          <video className="rounded-lg" autoPlays muted src={vdio} />
        </div>
      </div>
    </div>
  );
};

export default SubHome;
