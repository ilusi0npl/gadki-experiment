import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="absolute left-[calc(50.00%_-_864px)] bottom-0 w-[1728px] h-[485px] flex items-center justify-center bg-beige-100">
      <div className="mt-[119.4px] h-[206.43px] ml-[-34px] w-[1146px] relative">
        <img
          className="absolute top-0 left-0 w-[177px] h-[77px]"
          alt="Frame"
          src="https://c.animaapp.com/mhyvw56jKmrjx6/img/frame-13.svg"
        />

        <div className="absolute top-[182px] left-[calc(50.00%_-_273px)] font-lato font-normal text-[#e83f4b] text-base tracking-[-0.18px] leading-6 whitespace-nowrap">
          Polityka prywatności
        </div>

        <div className="absolute top-[182px] left-[calc(50.00%_+_27px)] font-lato font-normal text-[#e83f4b] text-base tracking-[-0.18px] leading-6 whitespace-nowrap">
          Deklaracja dostępności
        </div>

        <p className="absolute top-[182px] left-[calc(50.00%_+_327px)] font-lato font-normal text-[#e83f4b] text-base tracking-[-0.18px] leading-6 whitespace-nowrap">
          <span className="tracking-[-0.03px]">Zaprojektował i wdrożył</span>

          <span className="font-bold tracking-[-0.03px]"> cięty język|</span>
        </p>

        <div className="flex flex-col w-[122px] items-start gap-2.5 absolute top-[7px] left-[300px]">
          <div className="relative w-fit mt-[-1.00px] font-lato font-normal text-[#e83f4b] text-base tracking-[-0.18px] leading-6 whitespace-nowrap">
            Kontakt
          </div>

          <div className="relative self-stretch font-lato font-medium text-[#e83f4b] text-base tracking-[-0.18px] leading-6">
            gadki@fdds.pl
          </div>
        </div>

        <div className="flex flex-col w-[178px] items-start gap-2.5 absolute top-1.5 left-[600px]">
          <div className="mt-[-1.00px] relative self-stretch font-lato font-medium text-[#e83f4b] text-base tracking-[-0.18px] leading-6">
            Dla dzieci
          </div>

          <div className="relative self-stretch font-lato font-medium text-[#e83f4b] text-base tracking-[-0.18px] leading-6">
            Dla rodziców i opiekunów
          </div>

          <div className="relative self-stretch font-lato font-medium text-[#e83f4b] text-base tracking-[-0.18px] leading-6">
            Dla edukatorów
          </div>
        </div>

        <div className="inline-flex flex-col items-start gap-2.5 absolute top-1.5 left-[901px]">
          <div className="relative w-fit mt-[-1.00px] font-lato font-normal text-[#e83f4b] text-base tracking-[-0.18px] leading-6 whitespace-nowrap">
            Logowanie/Rejestracja
          </div>

          <Link to="/o-kampanii" className="relative self-stretch font-lato font-medium text-[#e83f4b] text-base tracking-[-0.18px] leading-6 hover:underline">
            O programie
          </Link>

          <div className="relative self-stretch font-lato font-medium text-[#e83f4b] text-base tracking-[-0.18px] leading-6">
            FAQ
          </div>

          <div className="relative self-stretch font-lato font-medium text-[#e83f4b] text-base tracking-[-0.18px] leading-6">
            Для батьків
          </div>
        </div>

        <img
          className="absolute top-[184px] left-0 w-[172px] h-[21px]"
          alt="Frame"
          src="https://c.animaapp.com/mhyvw56jKmrjx6/img/frame-27.svg"
        />
      </div>
    </footer>
  );
};
