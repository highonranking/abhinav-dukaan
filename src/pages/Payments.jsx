import React, { useState } from "react";
import AmountCard from "../components/AmountCard";
import Table from "../components/Table";
const Payments = () => {
  const [selectedTab, setSelectedTab] = useState("payments");
  const activeTableStyle = (tab) => {
    return {
      color: selectedTab === tab ? "white" : "gray",
      backgroundColor: selectedTab === tab ? "#146eb4" : "#ccc",
    };
  };
  const handleTabClick = (tab) => {
    // setSelectedTab(tab);
  };
  return (
    <div className="m-[32px] max-h-svh overflow-scroll-y">
      <div className="flex justify-between items-center">
        <p className="leading-[28px] font-medium text-[20px] text-[#1a181e] ">
          Overview
        </p>
        <div className="w-[137px] h-[36px] rounded-[4px] flex items-center  px-[14px] py-[6px] gap-x-[6px] bg-[#ffffff] border-[1px] border-[#d9d9d9]">
          <p className="leading-[24px] text-[16px] font-normal text-[#4D4D4D]   ">
             Last month
          </p>
          <img src="/svg/iconarrow.svg" alt="dropdown" />
        </div>
      </div>
      <div className="mt-[24px] flex justify-between gap-x-[20px] w-full">
       
        <AmountCard
          title={"Online Orders"}
          orderNumber={213}
          orderColor={"#146eb4"}
        />
        <AmountCard title={"Amount Received"} 
        orderNumber={"₹23,92,312.19"}/>
      </div>
      <div className=" mt-[32px] ">
        <div>
          <p className="text-[20px] text-[Galano Grotesque] leading-[28px] font-medium text-[#1a181e]">
            Transactions | This Month
          </p>
         

          <div className=" mt-[24px] p-[12px] rounded-[8px]  bg-custom-white-800">
            <div className="flex items-center justify-between  ">
              <div className="px-[16px] py-[10px] border border-custom-gray-300 rounded flex gap-[8px]  w-60  text-custom-gray-600 items-center ">
                <img src="/svg/search.svg" alt="search-icon" />
                <input
                  className="font-[Galano Grotesque]  w-full bg-inherit placeholder-[#999]
                  text-[14px] leading-[20px]
                  "
                  type="text"
                  placeholder="Order ID or transaction ID"
                />
              </div>
              <div className="flex gap-[20px] ">
                <div className="flex items-center gap-[6px] py-[6px] px-[10px] border border-custom-gray-300 rounded bg-white text-custom-gray-700">
                  <p>Sort</p>

                  <img src="/svg/sort.svg" alt="sort svg" />
                </div>
                <div className="flex items-center gap-[6px] py-[6px] px-[10px] border border-custom-gray-300 rounded bg-white text-custom-gray-700">
                  <img src="/svg/download.svg" alt="download svg" />
                </div>
              </div>
            </div>

            <div className=" mt-[10px]">
              <Table
                payments={selectedTab === "payments" ? true : false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
