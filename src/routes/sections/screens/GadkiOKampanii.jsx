import React, { useEffect } from "react";
import { Header } from "../../../components/Header";
import { Div } from "./sections/Div";
import { DivWrapper } from "./sections/DivWrapper";
import { Footer } from "./sections/Footer";
import { Frame } from "./sections/Frame";
import { FrameWrapper } from "./sections/FrameWrapper";
import { Newsletter } from "./sections/Newsletter";

export const GadkiOKampanii = () => {
  useEffect(() => {
    document.title = "O programie - GADKI";
  }, []);

  // Footer starts after Div component (which ends around 6356px)
  const footerTop = 6547;
  const pageHeight = footerTop + 485; // Footer position + footer height

  return (
    <div
      className="bg-beige-200 w-full relative"
      style={{ minHeight: `${pageHeight}px` }}
    >
      <div className="w-full relative" style={{ minHeight: `${pageHeight}px` }}>
        {/* BACKGROUND LAYER - Full-width backgrounds */}
        <div className="absolute inset-0 w-full pointer-events-none z-0">
          {/* Top Union SVG - Full width */}
          <img
            className="absolute w-full h-[259px] top-0 left-0 object-cover"
            alt="Union"
            src="https://c.animaapp.com/mhyusz4fmWst0p/img/union-3.svg"
          />

          {/* Newsletter Union SVG - Full width */}
          <img
            className="absolute top-[5526px] left-0 w-full h-[723px] object-cover"
            alt="Union"
            src="https://c.animaapp.com/mhyusz4fmWst0p/img/union-2.svg"
          />
        </div>

        {/* CONTENT LAYER - Centered 1728px container */}
        <div className="max-w-[1728px] mx-auto relative z-10">
          <Header />
          <img
            className="absolute w-[10.11%] h-0 top-0 left-[3.95%]"
            alt="Group"
            src="https://c.animaapp.com/mhyusz4fmWst0p/img/group.png"
          />

          <img
            className="absolute w-[102.47%] h-0 top-0 left-[-65.16%]"
            alt="Vector"
          />

          <img
            className="absolute top-[77px] left-[calc(50.00%_-_73px)] w-[146px] h-[67px]"
            alt="Frame"
            src="https://c.animaapp.com/mhyusz4fmWst0p/img/frame-12.svg"
          />

          <Frame />
          <FrameWrapper />
          <div className="absolute top-[3553px] left-[474px] w-[473px] font-happy-season font-medium text-black text-4xl tracking-[-0.40px] leading-[54px]">
            Materiały źródłowe
          </div>

          <img
            className="absolute top-[3620px] left-[calc(50.00%_-_538px)] w-[1077px] h-px object-cover"
            alt="Line"
            src="https://c.animaapp.com/mhyusz4fmWst0p/img/line-2.svg"
          />

          <p className="absolute top-[3673px] left-[476px] w-[678px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
            <span className="font-bold tracking-[-0.06px] underline">
              Child abuse in Europe{" "}
            </span>

            <span className="font-medium tracking-[-0.06px] underline">
              Rosaleen McElvaney and Kevin Lalor
            </span>
          </p>

          <p className="absolute top-[3731px] left-[476px] w-[678px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
            <span className="font-bold tracking-[-0.06px] underline">
              Wykorzystywanie seksualne dzieci: wyniki Ogólnopolskiej diagnozy
              problemu przemocy wobec dzieci
              <br />
            </span>

            <span className="tracking-[-0.06px] underline">
              Joanna Włodarczyk, Monika Sajkowska
            </span>
          </p>

          <DivWrapper />
          <div className="absolute top-[4915px] left-[578px] font-happy-season font-semibold text-fddsraspberry text-[200px] text-center tracking-[-2.20px] leading-[220.0px] whitespace-nowrap">
            Materiały
          </div>

          <Div />
          <Newsletter />

          {/* Footer - positioned after all content */}
          <div className="absolute top-[6547px] left-0 w-full h-[485px]">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};
