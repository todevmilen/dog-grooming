import React from "react";

// import icons
import PhoneIcon from "../assets/img/phone.svg";

const Program = () => {
  return (
    <div>
      <div className="flex lg:gap-x-[10px] items-baseline justify-end">
        <img
          className="w-[28px] h-[28px] lg:w-[34px] lg:h-[34px]"
          src={PhoneIcon}
          alt=""
        />
        <div className="lg:text-[23px] text-blue font-extrabold">
          + 359 897 590 266
        </div>
      </div>
      <div className="text-sm">
        <div className="hidden lg:flex">
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>{" "}
          Пон - Пет: 09:30 - 18:30
        </div>
        <div className="lg:hidden text-right">Пон - Пет: 09:30 - 18:30</div>
        <div className="text-xs text-blue">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ул.
          Братя Свещарови 5, Пловдив
        </div>
      </div>
    </div>
  );
};

export default Program;
