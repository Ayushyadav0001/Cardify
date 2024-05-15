import React from "react";
import Navbar from "../Navbar/Navbar";
import "./visitingcard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function VisitingCard(props) {
  return (
    <>
      <Navbar /> {/* Rendering the Navbar component */}
      <div className="m-10 flex justify-center gap-5">
        {/* Container for the card, using Flexbox */}
        <div className="card backgroundimg flex items-center justify-center rounded-xl text-white shadow-2xl">
          {/* Front of the visiting card */}
          <div className="text-md font-serif font-bold">
            {props.company} {/* Defaulting company name */}
          </div>
        </div>

        {/* Back of the visiting card */}
        <div className="card backgroundimg rounded-xl p-3  text-white shadow-2xl">
          <div className="text-3xl font-semibold">{`${props.name} ${props.lastname}`}</div>
          {/* Displaying name and last name */}

          <div className="font-semibold">{props.jobtitle}</div>
          {/* Displaying job title */}

          {/* Using grid for address, phone, and email */}
          <div className="mt-5 grid justify-center">
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span className="ms-2">{props.address}</span>
            </div>
            {/* Displaying address */}

            <div>
              <FontAwesomeIcon icon={faPhone} /> {props.phone}
            </div>
            {/* Displaying phone number */}

            <div>
              <FontAwesomeIcon icon={faEnvelope} /> {props.email}
            </div>
            {/* Displaying email */}
          </div>
        </div>
      </div>
    </>
  );
}
