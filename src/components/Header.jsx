import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export const Header = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isMenuPage = location.pathname === "/menu";

  const handleMenuClick = (e) => {
    e.preventDefault();
    setIsTransitioning(true);
    setTimeout(() => {
      navigate("/menu");
      setIsTransitioning(false);
    }, 300);
  };

  const handleCloseClick = (e) => {
    // Zamknięcie menu bez efektu - natychmiastowa nawigacja
  };

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

          <div className="relative w-[60px] h-[46px]">
            {/* Hamburger button */}
            <Link
              to="/menu"
              onClick={handleMenuClick}
              className={`absolute inset-0 transition-all duration-300 ${
                isMenuPage || isTransitioning ? "opacity-0 scale-50 pointer-events-none" : "opacity-100 scale-100"
              }`}
            >
              <img
                className="w-[60px] h-[46px] cursor-pointer"
                alt="Menu"
                src="https://c.animaapp.com/mhyvw56jKmrjx6/img/layer-1.svg"
              />
            </Link>

            {/* Close button */}
            <Link
              to="/"
              onClick={handleCloseClick}
              className={`absolute inset-0 transition-all duration-300 ${
                isMenuPage ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"
              }`}
            >
              <img
                className="w-[60px] h-[46px] cursor-pointer"
                alt="Close"
                src="https://c.animaapp.com/mhyud8wmJZMflz/img/layer-1.svg"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
