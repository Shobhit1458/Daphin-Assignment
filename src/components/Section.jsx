import React from "react";
import Cards from "./Cards";
import SideBar from "./SideBar";

const Section = () => {
  return (
    <div>
      {/* BreadCrumb */}
      <div class="flex text-gray-700 py-2 px-3 rounded-lg mt-[70px]">
        <ol class="inline-flex items-center space-x-1">
          <li class="inline-flex items-center">
            <div class="text-sm text-gray-700 hover:text-gray-900 inline-flex items-center dark:text-gray-400 dark:hover:text-white">
              Medical Darpan
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <svg
                class="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div class="text-gray-700 hover:text-gray-900 ml-1 text-sm font-medium dark:text-gray-400 dark:hover:text-white">
                Search
              </div>
            </div>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <svg
                class="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="ml-1 text-sm font-medium text-black">
                Fabiflu Tablet
              </span>
            </div>
          </li>
        </ol>
      </div>
      {/* Search-Bar */}
      <div class="max-w-2xl pl-3 mt-1 ">
        <form>
          <div class="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <div className="flex">
              <input
                class="block px-4 py-3 pl-10 w-full text-sm text-gray-900 bg-white rounded-l-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500  placeholder-black placeholder:text-lg"
                placeholder="Paracetamol"
              />
              <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-base rounded-r-md text-lg px-6 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* Results */}
      <div class="flex text-gray-700 py-2 px-3 rounded-lg mt-2">
        <ol class="inline-flex items-center space-x-1">
          <li class="inline-flex items-center">
            <div class="text-xl text-black inline-flex items-center">
              Paracetamol
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <div class="ml-1 text-sm font-medium text-black">
                (128 Products)
              </div>
            </div>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <span class="ml-1 text-sm font-medium text-white px-2 py-1 bg-slate-500 rounded-md">
                Aceclofenac x
              </span>
              <span class="ml-1 text-sm font-medium text-white px-2 py-1 bg-slate-500 rounded-md">
                500 mg x
              </span>
              <span class="ml-4 text-xs font-medium text-black ">
                Remove all
              </span>
            </div>
          </li>
        </ol>
      </div>
      {/* Content */}
      <div className="flex flex-row">
        <SideBar />
        <Cards />
      </div>
    </div>
  );
};

export default Section;
