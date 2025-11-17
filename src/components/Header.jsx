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
    <header className="absolute top-0 left-0 w-full z-50 pointer-events-none">
      <div className="max-w-[1728px] mx-auto">
        <div className="flex items-center justify-between px-[110px] py-16">
          <a href="https://fdds.pl/" target="_blank" rel="noopener noreferrer" className="pointer-events-auto">
            <img
              className="w-[164px] h-[71px]"
              alt="Fundacja Dajemy Dzieciom Siłę"
              src="/img/fdds-logo.svg"
            />
          </a>

          <div className="relative w-[60px] h-[46px] pointer-events-auto">
            {/* Hamburger button */}
            <button
              onClick={handleMenuClick}
              className={`absolute inset-0 bg-transparent border-0 p-0 transition-all duration-300 ${
                isMenuOpen || isTransitioning ? "opacity-0 scale-50 pointer-events-none" : "opacity-100 scale-100 pointer-events-auto"
              }`}
            >
              <img
                className="w-[60px] h-[46px] cursor-pointer pointer-events-none"
                alt="Menu"
                src="https://c.animaapp.com/mhyvw56jKmrjx6/img/layer-1.svg"
              />
            </button>

            {/* Close button */}
            <button
              onClick={handleCloseClick}
              className={`absolute inset-0 bg-transparent border-0 p-0 transition-all duration-300 ${
                isMenuOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-50 pointer-events-none"
              }`}
            >
              <img
                className="w-[60px] h-[46px] cursor-pointer pointer-events-none"
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
