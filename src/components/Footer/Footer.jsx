import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="relative w-full h-[485px] flex items-center justify-center bg-beige-100">
      <div className="mt-[119.4px] h-[206.43px] ml-[-34px] w-[1146px] relative">
        <Link
          to="/"
          className="absolute top-0 left-0 w-[177px] h-[77px] cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="Strona główna - Fundacja Dajemy Dzieciom Siłę"
        >
          <img
            className="w-full h-full"
            alt="Fundacja Dajemy Dzieciom Siłę"
            src="/img/fdds-logo-red.svg"
          />
        </Link>

        <a href="#" className="absolute top-[182px] left-[calc(50.00%_-_273px)] font-lato font-normal text-fddsraspberry text-base tracking-[-0.18px] leading-6 whitespace-nowrap cursor-pointer hover:opacity-80">
          Polityka prywatności
        </a>

        <a href="#" className="absolute top-[182px] left-[calc(50.00%_+_27px)] font-lato font-normal text-fddsraspberry text-base tracking-[-0.18px] leading-6 whitespace-nowrap cursor-pointer hover:opacity-80">
          Deklaracja dostępności
        </a>

        <p className="absolute top-[182px] left-[calc(50.00%_+_327px)] font-lato font-normal text-fddsraspberry text-base tracking-[-0.18px] leading-6 whitespace-nowrap">
          <span className="tracking-[-0.03px]">Zaprojektował i wdrożył</span>

          <span className="font-bold tracking-[-0.03px]">
            {" cięty język"}
            <span className="animate-blink">|</span>
          </span>
        </p>

        <div className="flex flex-col w-[122px] items-start gap-2.5 absolute top-[7px] left-[300px]">
          <div className="relative w-fit mt-[-1.00px] font-lato font-normal text-fddsraspberry text-base tracking-[-0.18px] leading-6 whitespace-nowrap">
            Kontakt
          </div>

          <a href="mailto:gadki@fdds.pl" className="relative self-stretch font-lato font-medium text-fddsraspberry text-base tracking-[-0.18px] leading-6 hover:opacity-80">
            gadki@fdds.pl
          </a>
        </div>

        <div className="flex flex-col w-[178px] items-start gap-2.5 absolute top-1.5 left-[600px]">
          <Link to="/dla-dzieci" className="relative self-stretch mt-[-1.00px] font-lato font-medium text-fddsraspberry text-base tracking-[-0.18px] leading-6 hover:opacity-80">
            Dla dzieci
          </Link>

          <Link to="/dla-rodzicow-i-opiekunow" className="relative self-stretch font-lato font-medium text-fddsraspberry text-base tracking-[-0.18px] leading-6 hover:opacity-80">
            Dla rodziców i opiekunów
          </Link>

          <Link to="/dla-edukatorow" className="relative self-stretch font-lato font-medium text-fddsraspberry text-base tracking-[-0.18px] leading-6 hover:opacity-80">
            Dla edukatorów
          </Link>
        </div>

        <div className="inline-flex flex-col items-start gap-2.5 absolute top-1.5 left-[901px]">
          <Link to="/logowanie" className="relative w-fit mt-[-1.00px] font-lato font-bold text-fddsraspberry text-base tracking-[-0.18px] leading-6 whitespace-nowrap hover:opacity-80">
            Logowanie/Rejestracja
          </Link>

          <Link to="/o-kampanii" className="relative self-stretch font-lato font-medium text-fddsraspberry text-base tracking-[-0.18px] leading-6 hover:opacity-80">
            O programie
          </Link>

          <Link to="/faq" className="relative self-stretch font-lato font-medium text-fddsraspberry text-base tracking-[-0.18px] leading-6 hover:opacity-80">
            FAQ
          </Link>

          <Link to="/dla-rodzicow-i-opiekunow" className="relative self-stretch font-lato font-medium text-fddsraspberry text-base tracking-[-0.18px] leading-6 hover:opacity-80">
            Для батьків
          </Link>
        </div>

        <img
          className="absolute top-[184px] left-0 w-[290px] h-[40px]"
          alt="Dofinansowane przez Unię Europejską"
          src="/img/fdds-eu-logo.svg"
        />
      </div>
    </footer>
  );
};
