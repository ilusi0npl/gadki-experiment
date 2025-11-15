import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-[1728px] mx-auto">
        <div className="flex items-center justify-between px-[110px] py-16">
          <Link to="/">
            <img
              className="w-[164px] h-[71px]"
              alt="Frame"
              src="https://c.animaapp.com/mhyvw56jKmrjx6/img/frame-13.svg"
            />
          </Link>

          <Link to="/menu">
            <img
              className="w-[60px] h-[46px] cursor-pointer"
              alt="Menu"
              src="https://c.animaapp.com/mhyvw56jKmrjx6/img/layer-1.svg"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};
