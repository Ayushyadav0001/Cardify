import React from "react";
import "./landing.css";
import { Link } from "react-router-dom";

export default function LandingPage() {

  return (
    <>
      <div className="LandingColor min-h-screen  rounded-xl border-8 pt-6">
        {/* Heading */}
        <h1 className="m-5 text-4xl font-bold text-white">
          Capture your <span className="text-black">visit's here</span>
        </h1>
        {/* image container */}
        <div
          className="relative m-2 rounded-2xl  bg-cover bg-center "
          style={{
            backgroundImage: `url('Images/businessCard.jpg')`,
            height: "400px",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity hover:opacity-50">
            {/* Empty div to create the hover effect */}
          </div>

          <p className="absolute bottom-0 right-0 p-4 text-2xl font-bold text-stone-900">
            <span className="text-white">Let's design something</span> beautiful
          </p>
        </div>
        {/* image container */}

        {/* Button */}
        <div className="mt-16 text-center">
          <Link to={"/details"}>
            <button className="m-1 w-52 rounded border-2 p-0.5 text-xl font-bold text-white hover:bg-blue-400">
              Let's start
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
