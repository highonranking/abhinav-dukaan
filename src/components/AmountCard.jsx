import React from "react";

const AmountCard = ({
  orderNumber,
  title,
  bg,
  color,
  nextPayout,
  orderColor,
}) => {
  return (
    <div
      style={{ backgroundColor: bg ? bg : "transparent" }}
      className="rounded-2xl w-full"
    >
      <div
        className={`h-[118px] p-5 } ${
          nextPayout ? "rounded-t-lg" : "rounded-lg"
        } shadow flex-col justify-start items-start gap-4 flex`}
        style={{ backgroundColor: bg ? bg : "white" }}
      >
        <div className="self-stretch h-[78px] flex-col justify-start items-start gap-4 flex">
          <div className="justify-start items-center gap-2 flex">
            <p
              className={`text-${
                color || "neutral-600"
              } text-base font-normal font-[Inter] leading-normal`}
            >
              {title}
            </p>
          
          </div>
          <div className="self-stretch justify-between items-center flex">
            <div
              className={`text-${
                color || "zinc-900"
              } text-[32px] font-[500] font-[Galano Grotesque] leading-[38px]`}
            >
              {orderNumber}
            </div>
            
             
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AmountCard;
