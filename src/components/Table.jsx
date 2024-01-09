import React, { useState, useEffect } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

const Table = () => {
  const [rowsData, setRowsData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; 

  // Sample data generation
  useEffect(() => {
    const data = Array.from({ length: 20 }, (_, index) => ({
      orderId: `#${index + 1}`,
      orderDate: `7 July, 2023`,
      orderAmount: `₹1,278.23`,
      transactionFee: `₹22`,
    }));
    setRowsData(data);
  }, []);

  // Sort by date function
  const sortByDate = () => {
    const sortedData = [...rowsData].sort((a, b) => {
      const dateA = new Date(a.orderDate);
      const dateB = new Date(b.orderDate);
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });
    setRowsData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Pagination
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = rowsData.slice(firstIndex, lastIndex);

  // Calculate total number of pages
  const totalPages = Math.ceil(rowsData.length / itemsPerPage);

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="w-full">
      <table className="w-full text-[14px] text-[Galano Grotesque] leading-[20px] font-normal text-['#1a181e]">
        <thead className="bg-[#f2f2f2] text-[14px] text-[Galano Grotesque] leading-[20px] font-normal text-['#1a181e] text-left">
          <tr>
            <th className="py-[10px] px-[12px] font-medium text-[#4d4d4d] rounded-l-[4px]">
              Order ID
            </th>
            <th
              className="py-[10px] px-[12px] font-medium text-[#4d4d4d] cursor-pointer"
              onClick={sortByDate}
            >
              Order Date
            </th>
            <th className="py-[10px] px-[12px] font-medium text-[#4d4d4d]">
              Order Amount
            </th>
            <th className="py-[10px] px-[12px] font-medium text-[#4d4d4d] rounded-r-[4px]">
              Transaction Fee
            </th>
          </tr>
        </thead>

        <tbody>
          {currentItems.map((item, index) => (
            <tr
              key={index}
              className={`${
                index === currentItems.length - 1
                  ? "border-b-0"
                  : "border-b-2 border-custom-gray-100"
              }`}
            >
              <td className="py-[14px] px-[12px] text-custom-blue-400 font-medium">
                {item.orderId}
              </td>
              <td className="py-[14px] px-[12px] text-[#4d4d4d]">
                {item.orderDate}
              </td>
              <td className="py-[14px] px-[12px] text-[#1a181e]">
                {item.orderAmount}
              </td>
              <td className="py-[14px] px-[12px] text-[#1a181e] rounded-r-[4px]">
                {item.transactionFee}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="flex justify-center mt-4 pt-6">
        <button className="border p-1 px-3 mx-4 rounded-md flex flex-row justify-center text-center "
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
         <CaretLeft size={20} className="mx-1"/> Previous
        </button>
        <div className="flex">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={currentPage === number ? "selected  mx-4" : " mx-4"}
            >
              {number}
            </button>
          ))}
        </div>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="border p-1 px-3 mx-4 rounded-md flex flex-row justify-center text-center"
        >Next
                   <CaretRight size={20} className="mx-1"/> 

          
        </button>
      </div>
    </div>
  );
};

export default Table;
