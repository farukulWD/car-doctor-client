import React from "react";
import { FcCalendar,FcCallback } from "react-icons/fc";
import { GoLocation } from "react-icons/go";

const CallToAction = () => {
  return (
    <div className="bg-black rounded-xl  my-24">
      <div className=" py-24 px-10  grid md:grid-cols-3 gap-6 ">
        <div className="flex items-center justify-center gap-3">
          <div>
            <FcCalendar className="text-4xl text-white"></FcCalendar>
          </div>
          <div className="text-white ">
            <small>We are open monday-friday</small>
            <h3 className="text-xl font-bold">7:00 am - 9:00 pm</h3>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 ">
          <div>
            <FcCallback className="text-4xl text-white"></FcCallback>
          </div>
          <div className="text-white ">
            <small>Have a question?</small>
            <h3 className="text-xl font-bold">+2546 251 2658</h3>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3">
          <div>
            <GoLocation className="text-4xl text-white"></GoLocation>
          </div>
          <div className="text-white ">
            <small>Need a repair? our address</small>
            <h3 className="text-xl font-bold">Liza Street, New York</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
