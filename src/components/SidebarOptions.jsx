import React from "react";
import  {useLocation} from "react-router-dom"
const SidebarOptions = ({ svg, title, path }) => {
  const {pathname}=useLocation()
  return (
    <div
      className={`flex w-[208px]  py-[8px] px-[16px]
      gap-[12px] rounded-[4px]  ${pathname===path?'bg-[#ffffff0d]':'bg-[none]'}  w-full`}
    >
      {svg}
      <p className="font-Inter  text-[14px] not-italic font-normal leading-5">
        {title}
      </p>
    </div>
  );
};

export default SidebarOptions;
