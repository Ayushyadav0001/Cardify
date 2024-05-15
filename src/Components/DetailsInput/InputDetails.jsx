import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function InputDetails(props) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/card");
  };

  return (
    <>
      <Navbar />
      <div className="m-5 text-2xl font-extrabold">Enter your details!</div>
      <form onSubmit={handleSubmit} class="mx-auto mt-10 max-w-md p-5 ">
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="group relative  mb-5 w-full ">
            <input
              type="text"
              name="first_name"
              id="floating_first_name"
              class="text-md peer block  w-full border-0 border-b-2 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0 dark:border-gray-600  dark:focus:border-blue-500"
              placeholder=" "
              required
              onChange={(e) => props.setName(e.target.value)}
            />
            <label
              for="floating_first_name"
              class="text- absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
            >
              First name
            </label>
          </div>
          <div class="group relative z-0 mb-5 w-full">
            <input
              type="text"
              name="last_name"
              id="floating_last_name"
              class="text-md peer block  w-full border-0 border-b-2 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0 dark:border-gray-600  dark:focus:border-blue-500"
              placeholder=" "
              required
              onChange={(e) => props.setLastName(e.target.value)}
            />
            <label
              for="last_name"
              class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
            >
              Last name
            </label>
          </div>
        </div>
        <div class="group relative z-0 mb-5 w-full">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            class="text-md peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-black  focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600  dark:focus:border-blue-500"
            placeholder=" "
            required
            onChange={(e) => props.setEmail(e.target.value)}
          />
          <label
            for="floating_email"
            class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            Email address
          </label>
        </div>
        <div class="group relative z-0 mb-5 w-full">
          <input
            type="text"
            name="floating_jobtitle"
            id="floating_jobtitle"
            class="text-md peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-black  focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600  dark:focus:border-blue-500"
            placeholder=" "
            required
            onChange={(e) => props.setJobtitle(e.target.value)}
          />
          <label
            for="floating_jobtitle"
            class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            Job title
          </label>
        </div>
        <div class="group relative z-0 mb-5 w-full">
          <input
            type="text"
            name="floating_Address"
            id="floating_password"
            class="text-md peer block  w-full border-0 border-b-2 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0 dark:border-gray-600  dark:focus:border-blue-500"
            placeholder=" "
            required
            onChange={(e) => props.setAddress(e.target.value)}
          />
          <label
            for="floating_Address"
            class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            Address
          </label>
        </div>

        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="group relative z-0 mb-5 w-full">
            <input
              type="text"
              name="floating_phone"
              id="floating_phone"
              class="text-md peer block  w-full border-0 border-b-2 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0 dark:border-gray-600  dark:focus:border-blue-500"
              placeholder=" "
              required
              onChange={(e) => props.setPhone(e.target.value)}
            />
            <label
              for="floating_phone"
              class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
            >
              Phone number
            </label>
          </div>
          <div class="group relative z-0 mb-5 w-full">
            <input
              type="text"
              name="floating_company"
              id="floating_company"
              class="text-md peer block  w-full border-0 border-b-2 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0 dark:border-gray-600  dark:focus:border-blue-500"
              placeholder=" "
              required
              onChange={(e) => props.setCompany(e.target.value)}
            />
            <label
              for="floating_company"
              class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
            >
              Company Name
            </label>
          </div>
        </div>

        <button
          type="submit"
          class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
}
