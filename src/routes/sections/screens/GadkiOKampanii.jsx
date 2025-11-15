import React from "react";
import { Div } from "./sections/Div";
import { DivWrapper } from "./sections/DivWrapper";
import { Footer } from "./sections/Footer";
import { Frame } from "./sections/Frame";
import { FrameWrapper } from "./sections/FrameWrapper";
import { Newsletter } from "./sections/Newsletter";

export const GadkiOKampanii = () => {
  return (
    <div className="bg-beige-200 overflow-hidden w-full min-w-[1728px] h-[7032px] relative">
      <Footer />
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
        className="absolute top-0 left-0 w-[1728px] h-[259px]"
        alt="Union"
        src="https://c.animaapp.com/mhyusz4fmWst0p/img/union-3.svg"
      />

      <img
        className="absolute top-16 left-[110px] w-[164px] h-[71px]"
        alt="Frame"
        src="https://c.animaapp.com/mhyusz4fmWst0p/img/frame-18.svg"
      />

      <img
        className="absolute top-[83px] left-[1478px] w-[60px] h-[46px]"
        alt="Layer"
        src="https://c.animaapp.com/mhyusz4fmWst0p/img/layer-1.svg"
      />

      <img
        className="absolute top-[77px] left-[calc(50.00%_-_73px)] w-[146px] h-[67px]"
        alt="Frame"
        src="https://c.animaapp.com/mhyusz4fmWst0p/img/frame-12.svg"
      />

      <Frame />
      <FrameWrapper />
      <div className="absolute top-[3553px] left-[474px] w-[473px] [font-family:'Happy_Season-Medium',Helvetica] font-medium text-black text-4xl tracking-[-0.40px] leading-[54px]">
        Materiały źródłowe
      </div>

      <img
        className="absolute top-[3620px] left-[calc(50.00%_-_538px)] w-[1077px] h-px object-cover"
        alt="Line"
        src="https://c.animaapp.com/mhyusz4fmWst0p/img/line-2.svg"
      />

      <p className="absolute top-[3673px] left-[476px] w-[678px] [font-family:'Lato',Helvetica] font-normal text-black text-2xl tracking-[-0.26px] leading-9">
        <span className="font-bold tracking-[-0.06px] underline">
          Child abuse in Europe{" "}
        </span>

        <span className="font-medium tracking-[-0.06px] underline">
          Rosaleen McElvaney and Kevin Lalor
        </span>
      </p>

      <p className="absolute top-[3731px] left-[476px] w-[678px] [font-family:'Lato',Helvetica] font-normal text-black text-2xl tracking-[-0.26px] leading-9">
        <span className="font-bold tracking-[-0.06px] underline">
          Wykorzystywanie seksualne dzieci: wyniki Ogólnopolskiej diagnozy
          problemu przemocy wobec dzieci
          <br />
        </span>

        <span className="tracking-[-0.06px] underline">
          Joanna Włodarczyk, Monika Sajkowska
        </span>
      </p>

      <img
        className="absolute top-[5526px] left-0 w-[1728px] h-[723px]"
        alt="Union"
        src="https://c.animaapp.com/mhyusz4fmWst0p/img/union-2.svg"
      />

      <DivWrapper />
      <div className="absolute top-[4915px] left-[578px] [font-family:'Happy_Season-Semibold',Helvetica] font-normal text-fddsraspberry text-[200px] text-center tracking-[-2.20px] leading-[220.0px] whitespace-nowrap">
        Materiały
      </div>

      <Div />
      <Newsletter />
    </div>
  );
};
