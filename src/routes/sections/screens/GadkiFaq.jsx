import React, { useEffect } from "react";
import { Header } from "../../../components/Header";
import { DivWrapper } from "./sections/DivWrapper";
import { Footer } from "./sections/Footer";
import { Frame } from "./sections/Frame";
import { FrameWrapper } from "./sections/FrameWrapper";
import { MoreQuestions } from "./sections/MoreQuestions";

export const GadkiFaq = () => {
  useEffect(() => {
    document.title = "Często zadawane pytania - GADKI";
  }, []);

  return (
    <div className="bg-beige-200 overflow-hidden w-full h-[5731px] relative">
      {/* BACKGROUND LAYER - Full-width backgrounds */}
      <div className="absolute inset-0 w-full pointer-events-none">
        {/* Top Union SVG - Full width */}
        <img
          className="absolute w-full h-[778px] top-0 left-0 object-cover"
          alt="Union"
          src="https://c.animaapp.com/mhyvrx3iXxUduh/img/union-3.svg"
        />

        {/* Newsletter Union SVG - Full width */}
        <img
          className="absolute top-[4153px] left-0 w-full h-[723px] object-cover"
          alt="Union"
          src="https://c.animaapp.com/mhyvrx3iXxUduh/img/union-2.svg"
        />
      </div>

      {/* CONTENT LAYER - Centered 1728px container */}
      <div className="max-w-[1728px] mx-auto relative h-full">
      <Header />

      <img
        className="absolute w-[10.11%] h-0 top-0 left-[3.95%]"
        alt="Group"
        src="https://c.animaapp.com/mhyvrx3iXxUduh/img/group.png"
      />

      <Frame />

      <img
        className="absolute top-[77px] left-[calc(50.00%_-_73px)] w-[146px] h-[67px]"
        alt="Frame"
        src="https://c.animaapp.com/mhyvrx3iXxUduh/img/frame-12.svg"
      />

      <div className="absolute top-[329px] left-[474px] w-[781px] font-happy-season font-bold text-white text-8xl text-center tracking-[-1.06px] leading-[105.6px]">
        Często zadawane pytania
      </div>

      <FrameWrapper />
      <p className="absolute top-[3627px] left-[574px] w-[580px] font-lato font-normal text-black text-2xl text-center tracking-[-0.26px] leading-9">
        Na tej stronie znajdują się informacje o problemie wykorzystywania
        seksualnego dzieci oraz przyjazne dla dzieci materiały, które ułatwią
        Ci rozmowę.
      </p>

      <DivWrapper />
      <MoreQuestions />
      <div className="absolute top-[3366px] left-[575px] font-happy-season font-semibold text-[#e83f4b] text-[200px] text-center tracking-[-2.20px] leading-[220.0px] whitespace-nowrap">
        Materiały
      </div>

      <img
        className="absolute top-[295px] left-[1312px] w-[287px] h-[307px]"
        alt="Vector"
        src="https://c.animaapp.com/mhyvrx3iXxUduh/img/vector-7.png"
      />

      <img
        className="absolute top-[329px] left-0 w-[313px] h-[286px]"
        alt="Group"
        src="https://c.animaapp.com/mhyvrx3iXxUduh/img/group-1.png"
      />

      <Footer />
      </div>
    </div>
  );
};
