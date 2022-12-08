import React from "react";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  return (
    <nav class="px-2 sm:px-2 py-1 bg-red-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <div class="flex items-center">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/002/685/731/small/medical-caduceus-symbol-design-illustration-eps-format-suitable-for-your-design-needs-logo-illustration-animation-etc-vector.jpg"
            class="h-6 mr-3 sm:h-9"
            alt="Medical-Darpan"
          />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Medical Darpan
          </span>
        </div>
        <div class="flex md:order-2">
          <button
            type="button"
            class="text-white focus:ring-4 focus:outline-none text-lg rounded-lg font-medium px-5 py-2.5 text-center mr-3 md:mr-8"
          >
            Login
          </button>
          <CgProfile size={40} className="text-white" />
        </div>
        <div class="items-center justify-between w-full md:flex md:w-auto ">
          <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0 md:bg-white dark:bg-red-900 md:dark:bg-red-900 dark:border-gray-700 cursor-pointer">
            <li>
              <div class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:text-white">
                Home
              </div>
            </li>
            <li>
              <div class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Products
              </div>
            </li>
            <li>
              <div class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Distributors
              </div>
            </li>
            <li>
              <div class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Manufactures
              </div>
            </li>
            <li>
              <div class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                About Us
              </div>
            </li>
            <li>
              <div class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Blog
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
