import React from "react";

const SideBar = () => {
  return (
    <div class="h-full w-1/6 flex flex-col px-3 py-8 space-y-4">
      <div class="bg-white md:block w-30 md:w-60 lg:w-48 transition-transform duration-300 ease-in-out rounded-md">
        <div className="bg-teal-300 py-2 font-semibold">
          <span>Related Category</span>
        </div>
        <div class="flex flex-col">
          <div class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
            <span class="">Paracetamol Tablets</span>
          </div>
          <div class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
            <span class="">Paracetamol Syrup</span>
          </div>
          <div class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
            <span class="">Paracetamol Powder</span>
          </div>
          <div class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
            <span class="">Aceclofenac</span>
          </div>
          <div class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
            <span class="">Magaladrate Simethicone Oral Suspension</span>
          </div>
          <div class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
            <span class="">Mefanamic Paracetamol Syrup</span>
          </div>
        </div>
      </div>
      <div class="bg-white md:block w-30 md:w-60 lg:w-48 transition-transform duration-300 ease-in-out rounded-md">
        <div className="bg-teal-300 py-2 font-semibold">
          <span>Buisness Type</span>
        </div>
        <div class="flex flex-col">
          <div class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
            <span class="">Wholesaler</span>
          </div>
          <div class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
            <span class="">Manufacturer</span>
          </div>
          <div class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
            <span class="">Exporter</span>
          </div>
          <div class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
            <span class="">Retailer</span>
          </div>
        </div>
      </div>
      <div class="bg-white md:block w-30 md:w-60 lg:w-48 transition-transform duration-300 ease-in-out rounded-md">
        <div className="bg-teal-300 py-2 font-semibold">
          <span>Strength</span>
        </div>
        <div class="flex flex-col">
          <div class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
            <span class="">500 mg</span>
          </div>
          <div class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
            <span class="">600 mg</span>
          </div>
        </div>
      </div>
      <div class="bg-white md:block w-30 md:w-60 lg:w-48 transition-transform duration-300 ease-in-out rounded-md">
        <div className="bg-teal-300 py-2 font-semibold">
          <span>Manufacturer</span>
        </div>
        <div class="flex flex-col">
          <div class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
            <span class="">Intas Pharmeutical Ltd</span>
          </div>
          <div class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
            <span class="">Alken Laboratories Ltd</span>
          </div>
        </div>
      </div>
      <div class="bg-white md:block w-30 md:w-60 lg:w-48 transition-transform duration-300 ease-in-out rounded-md">
        <div className="bg-teal-300 py-2 font-semibold">
          <span>Prescription/Non Prescription</span>
        </div>
        <div class="flex flex-col">
          <div class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
            <span class="">Intas Pharmeutical Ltd</span>
          </div>
          <div class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
            <span class="">Alken Laboratories Ltd</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
