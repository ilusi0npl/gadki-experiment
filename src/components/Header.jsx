import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMenu } from "../context/MenuContext";

export const Header = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { isMenuOpen, openMenu, closeMenu } = useMenu();

  const handleMenuClick = (e) => {
    e.preventDefault();
    setIsTransitioning(true);
    setTimeout(() => {
      openMenu();
      setIsTransitioning(false);
    }, 300);
  };

  const handleCloseClick = (e) => {
    e.preventDefault();
    closeMenu();
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-[1728px] mx-auto">
        <div className="flex items-center justify-between px-[110px] py-16">
          <a href="https://fdds.pl/" target="_blank" rel="noopener noreferrer">
            <img
              className="w-[164px] h-[71px]"
              alt="Fundacja Dajemy Dzieciom Siłę"
              src="/img/fdds-logo.svg"
            />
          </a>

          <div className="relative w-[60px] h-[46px]">
            {/* Hamburger button */}
            <button
              onClick={handleMenuClick}
              className={`absolute inset-0 bg-transparent border-0 p-0 transition-all duration-300 ${
                isMenuOpen || isTransitioning ? "opacity-0 scale-50 pointer-events-none" : "opacity-100 scale-100"
              }`}
            >
              <img
                className="w-[60px] h-[46px] cursor-pointer"
                alt="Menu"
                src="https://c.animaapp.com/mhyvw56jKmrjx6/img/layer-1.svg"
              />
            </button>

            {/* Close button */}
            <button
              onClick={handleCloseClick}
              className={`absolute inset-0 bg-transparent border-0 p-0 transition-all duration-300 ${
                isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"
              }`}
            >
              <img
                className="w-[60px] h-[46px] cursor-pointer"
                alt="Close"
                src="https://c.animaapp.com/mhyud8wmJZMflz/img/layer-1.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
