import React from "react";
import { Link } from "react-router-dom";
import { useMenu } from "../context/MenuContext";

export const MenuOverlay = () => {
  const { isMenuOpen, closeMenu } = useMenu();

  if (!isMenuOpen) return null;

  return (
    <div className="fixed inset-0 z-40 w-screen h-screen overflow-y-auto">
      {/* Menu Content */}
      <div className="bg-fddsraspberry w-full min-w-[1728px] min-h-screen relative">
        {/* BACKGROUND LAYER - Full-width backgrounds */}
        <div className="absolute inset-0 w-screen pointer-events-none">
          {/* Bottom Union SVG - Full width */}
          <img
            className="absolute top-[1004px] left-0 w-screen h-[113px] object-cover"
            alt="Union"
            src="https://c.animaapp.com/mhyud8wmJZMflz/img/union.svg"
          />
        </div>

        {/* CONTENT LAYER - Centered 1728px container */}
        <div className="max-w-[1728px] mx-auto relative h-full">
          <div className="flex flex-col w-[744px] items-start gap-[26px] absolute top-[300px] left-[374px]">
            <Link
              to="/dla-dzieci"
              onClick={closeMenu}
              className="relative self-stretch mt-[-1.00px] font-happy-season font-semibold text-white text-8xl tracking-[-1.06px] leading-[105.6px] hover:opacity-80 transition-opacity"
            >
              Dla dzieci
            </Link>

            <Link
              to="/dla-rodzicow-i-opiekunow"
              onClick={closeMenu}
              className="relative self-stretch font-happy-season font-semibold text-white text-8xl tracking-[-1.06px] leading-[105.6px] hover:opacity-80 transition-opacity"
            >
              Dla rodziców i opiekunów
            </Link>

            <Link
              to="/dla-edukatorow"
              onClick={closeMenu}
              className="relative w-fit mr-[-48.14px] font-happy-season font-semibold text-white text-8xl tracking-[-1.06px] leading-[105.6px] whitespace-nowrap hover:opacity-80 transition-opacity"
            >
              Dla edukatorów i nauczycieli
            </Link>
          </div>

          <div className="inline-flex items-center gap-12 absolute top-[764px] left-[374px]">
            <Link
              to="/o-kampanii"
              onClick={closeMenu}
              className="relative w-fit mt-[-1.00px] font-lato font-medium text-white text-2xl tracking-[-0.26px] leading-[26.4px] whitespace-nowrap hover:opacity-80 transition-opacity"
            >
              O programie
            </Link>

            <Link
              to="/faq"
              onClick={closeMenu}
              className="relative w-fit mt-[-1.00px] font-lato font-medium text-white text-2xl tracking-[-0.26px] leading-[26.4px] whitespace-nowrap hover:opacity-80 transition-opacity"
            >
              FAQ
            </Link>

            <Link
              to="/logowanie"
              onClick={closeMenu}
              className="relative w-fit mt-[-1.00px] font-lato font-medium text-white text-2xl tracking-[-0.26px] leading-[26.4px] whitespace-nowrap hover:opacity-80 transition-opacity"
            >
              Logowanie/Rejestracja
            </Link>

            <Link
              to="/dla-rodzicow-i-opiekunow"
              onClick={closeMenu}
              className="relative w-fit mt-[-1.00px] font-lato font-medium text-white text-2xl tracking-[-0.26px] leading-[26.4px] whitespace-nowrap hover:opacity-80 transition-opacity"
            >
              Для батьків
            </Link>
          </div>

          <img
            className="absolute top-[485px] left-0 w-[274px] h-[419px]"
            alt="Group"
            src="https://c.animaapp.com/mhyud8wmJZMflz/img/group-3.png"
          />

          <img
            className="absolute top-[300px] left-[1290px] w-[376px] h-[285px]"
            alt="Group"
            src="https://c.animaapp.com/mhyud8wmJZMflz/img/group-5.png"
          />
        </div>
      </div>
    </div>
  );
};
