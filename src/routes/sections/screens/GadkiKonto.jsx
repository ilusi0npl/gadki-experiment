import React, { useEffect } from "react";
import { Header } from "../../../components/Header";
import { Footer } from "./sections/Footer";
import { Frame } from "./sections/Frame";
import { FrameWrapper } from "./sections/FrameWrapper";

export const GadkiKonto = () => {
  useEffect(() => {
    document.title = "Moje konto - GADKI";
  }, []);

  return (
    <div className="bg-beige-200 overflow-hidden w-full h-[3060px] relative">
      {/* BACKGROUND LAYER - Full-width backgrounds */}
      <div className="absolute inset-0 w-full pointer-events-none">
        {/* Top Union SVG - Full width */}
        <img
          className="absolute w-full h-[259px] top-0 left-0 object-cover"
          alt="Union"
          src="https://c.animaapp.com/mhyvw56jKmrjx6/img/union.svg"
        />
      </div>

      {/* CONTENT LAYER - Centered 1728px container */}
      <div className="max-w-[1728px] mx-auto relative h-full">
      <Header />
      <img
        className="absolute w-[10.11%] h-[2.48%] top-[2.18%] left-[3.95%]"
        alt="Group"
        src="https://c.animaapp.com/mhyvw56jKmrjx6/img/group.png"
      />

      <img
        className="absolute top-[77px] left-[calc(50.00%_-_73px)] w-[146px] h-[67px]"
        alt="Frame"
        src="https://c.animaapp.com/mhyvw56jKmrjx6/img/frame-12.svg"
      />

      <Frame />
      <FrameWrapper />
      <img
        className="absolute top-[1593px] left-[calc(50.00%_-_116px)] w-[231px] h-[251px]"
        alt="Piesek"
        src="https://c.animaapp.com/mhyvw56jKmrjx6/img/piesek2-01-1.png"
      />

      <div className="inline-flex items-center gap-5 absolute top-[821px] left-[274px]">
        <div className="relative w-20 mt-[-1.00px] font-happy-season font-bold text-[#e83f4b] text-4xl text-center tracking-[-0.40px] leading-[54px]">
          01
        </div>

        <div className="relative w-[473.01px] mt-[-1.00px] font-happy-season font-medium text-black text-4xl tracking-[-0.40px] leading-[54px]">
          Zaświadczenia po realizacji zajęć
        </div>
      </div>

      <div className="inline-flex items-center gap-5 absolute top-[1123px] left-[274px]">
        <div className="relative w-20 mt-[-1.00px] font-happy-season font-bold text-[#e83f4b] text-4xl text-center tracking-[-0.40px] leading-[54px]">
          02
        </div>

        <div className="relative w-[473.01px] mt-[-1.00px] font-happy-season font-medium text-black text-4xl tracking-[-0.40px] leading-[54px]">
          Zaświadczenia dla szkoły/przedszkola
        </div>
      </div>

      <img
        className="top-[1042px] absolute left-[276px] w-[1178px] h-px object-cover"
        alt="Line"
        src="https://c.animaapp.com/mhyvw56jKmrjx6/img/line-7.svg"
      />

      <img
        className="top-[1344px] absolute left-[276px] w-[1178px] h-px object-cover"
        alt="Line"
        src="https://c.animaapp.com/mhyvw56jKmrjx6/img/line-7.svg"
      />

      <div className="inline-flex items-center justify-center gap-2.5 px-6 py-5 absolute top-[907px] left-[374px] bg-[#e83f4b] rounded-[48px]">
        <p className="relative w-fit mt-[-1.00px] font-lato font-bold text-white text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
          Wypełnij formularz i otrzymaj zaświadzczenie
        </p>
      </div>

      <div className="inline-flex items-center justify-center gap-2.5 px-6 py-5 absolute top-[1209px] left-[374px] bg-[#e83f4b] rounded-[48px]">
        <p className="relative w-fit mt-[-1.00px] font-lato font-bold text-white text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
          Wypełnij formularz i otrzymaj certyfikat
        </p>
      </div>

      <img
        className="absolute top-[77px] left-[1374px] w-[61px] h-[61px]"
        alt="User"
        src="https://c.animaapp.com/mhyvw56jKmrjx6/img/user.svg"
      />

      <Footer />
      </div>
    </div>
  );
};
