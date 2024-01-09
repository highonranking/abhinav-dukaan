import React from "react";

const Search = () => {
  return (
    <div className=" py-[9px] px-[12px] flex items-center gap-x-[8px] w-full">
      <img src="/svg/search.svg" alt="searchIcon" />
      <input
        type="search"
        placeholder="Search features, tutorials, etc."
        className="w-full text-[15px] leading-[22px] non-italic bg-[#f2f2f2] text-[#808080] outline-none border-none placeholder-[#808080] placeholder-opacity-75 text-[Galano Grotesque] font-normal"
      />
    </div>
  );
};

export default Search;
