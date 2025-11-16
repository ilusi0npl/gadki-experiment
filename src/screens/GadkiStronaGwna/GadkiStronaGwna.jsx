import React, { useEffect } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Div } from "./sections/Div";
import { DivWrapper } from "./sections/DivWrapper";
import { Frame } from "./sections/Frame";
import { FrameWrapper } from "./sections/FrameWrapper";
import { Group } from "./sections/Group";
import { SectionComponentNode } from "./sections/SectionComponentNode";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export const GadkiStronaGwna = () => {
  const zasadyGadki = useScrollReveal();
  const materialy = useScrollReveal();
  const materialyText = useScrollReveal();

  useEffect(() => {
    document.title = "GADKI - program wzmacniania bezpieczeństwa dzieci";
  }, []);

  return (
    <div
      className="bg-beige-200 overflow-hidden w-full min-w-[1728px] h-[9567px] relative"
      data-model-id="21:2"
    >
      {/* BACKGROUND LAYER - Full-width backgrounds */}
      <div className="absolute inset-0 w-screen pointer-events-none">
        {/* Top Union SVG - Full width */}
        <img
          className="absolute w-screen h-[12.30%] top-0 left-0 object-cover"
          alt="Union"
          src="https://c.animaapp.com/kiXkeqSn/img/union-1.svg"
        />

        {/* GADKI Cards Union - Full width */}
        <img
          className="absolute top-[2950px] left-0 w-screen h-[1352px] object-cover"
          alt="Union"
          src="https://c.animaapp.com/kiXkeqSn/img/union.svg"
        />

        {/* Bottom Help Section Union SVGs - Full width (from FrameWrapper) */}
        <img
          className="absolute top-[8286px] left-0 w-screen h-[723px] object-cover"
          alt="Union"
          src="https://c.animaapp.com/kiXkeqSn/img/union-2.svg"
        />

        <img
          className="absolute top-[8436px] left-0 w-screen h-[723px] object-cover"
          alt="Union"
          src="https://c.animaapp.com/kiXkeqSn/img/union-3.svg"
        />
      </div>

      {/* CONTENT LAYER - Centered 1728px container */}
      <div className="max-w-[1728px] mx-auto relative h-full">
        <Header />
        <Footer />

        <img
          className="absolute w-[10.11%] h-0 top-0 left-[3.95%]"
          alt="Group"
          src="https://c.animaapp.com/kiXkeqSn/img/group@2x.png"
        />

        <img
          className="absolute w-full h-0 top-[11.53%] left-[46.39%]"
          alt="Vector"
          src="/img/vector.png"
        />

        <p className="absolute top-[3262px] left-[calc(50.00%_-_190px)] w-[380px] font-lato font-normal text-black text-2xl text-center tracking-[-0.26px] leading-9">
          <span className="tracking-[-0.06px]">
            Każda z liter wchodzących w skład słowa{" "}
          </span>

          <span className="font-bold italic tracking-[-0.06px]">GADKI</span>

          <span className="tracking-[-0.06px]">
            {" "}
            odnosi się do różnych wskazówek, które pomogą dziecku zachować
            bezpieczeństwo
          </span>
        </p>

        <Frame />
        <Group />
        <div ref={zasadyGadki.ref} className={`absolute top-[2963px] left-[274px] w-[1172px] ${zasadyGadki.className}`}>
          <div className="font-happy-season font-semibold text-fddsraspberry text-[200px] text-center tracking-[-2.20px] leading-[220.0px]">
            Zasady GADKI
          </div>
        </div>

        <FrameWrapper />
        <img
          className="absolute top-[8374px] left-[1480px] w-[248px] h-[419px] animate-gentle-pulse"
          alt="Group"
          src="https://c.animaapp.com/kiXkeqSn/img/group-11@2x.png"
        />

        <div ref={materialy.ref} className={`absolute top-[4703px] left-[576px] ${materialy.className}`}>
          <div className="font-happy-season font-semibold text-fddsraspberry text-[200px] text-center tracking-[-2.20px] leading-[220.0px] whitespace-nowrap">
            Materiały
          </div>
        </div>

        <div ref={materialyText.ref} className={`absolute top-[4963px] left-[574px] w-[580px] ${materialyText.className}`}>
          <p className="font-lato font-normal text-black text-2xl text-center tracking-[-0.26px] leading-9">
            Na tej stronie znajdują się informacje o problemie wykorzystywania
            seksualnego dzieci oraz przyjazne dla dzieci materiały, które ułatwią
            Ci rozmowę.
          </p>
        </div>

        <DivWrapper />

        {/* YouTube Video */}
        <div className="absolute top-[866px] left-[274px] w-[1180px] h-[622px]">
          <iframe
            className="w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/PW-n6UtOe0E"
            title="Gadki - Program wzmacniania bezpieczeństwa dzieci"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <Div />
        <div className="flex flex-col w-[580px] items-start gap-3 absolute top-[429px] left-[574px]">
          <img
            className="relative self-stretch w-full h-[267px]"
            alt="Frame"
            src="https://c.animaapp.com/kiXkeqSn/img/frame-12.svg"
          />

          <div className="relative self-stretch font-happy-season font-semibold text-white text-[44px] text-center tracking-[-0.48px] leading-[66px]">
            Program wzmacniania bezpieczeństwa dzieci
          </div>
        </div>

        <div className="absolute top-[545px] left-[1266px] w-[180px] h-[180px] flex bg-beige-400 rounded-[20000px] overflow-hidden aspect-[1] animate-gentle-pulse">
          <img
            className="mt-[30px] w-[180px] h-[150px] aspect-[0.31] object-cover"
            alt="Chopak"
            src="https://c.animaapp.com/kiXkeqSn/img/chopak-2x-1.png"
          />
        </div>

        <div className="absolute top-56 left-[1176px] w-[180px] h-[180px] flex bg-beige-400 rounded-[20000px] overflow-hidden aspect-[1] animate-gentle-pulse">
          <img
            className="mt-5 w-[177px] h-40 ml-[3px] aspect-[0.3] object-cover"
            alt="Tata"
            src="https://c.animaapp.com/kiXkeqSn/img/tata-2x-1.png"
          />
        </div>

        <div className="absolute top-20 left-[774px] w-[180px] h-[180px] flex bg-beige-400 rounded-[20000px] overflow-hidden aspect-[1] animate-gentle-pulse">
          <img
            className="mt-6 w-[142px] h-[156px] ml-[38px] aspect-[0.96] object-cover"
            alt="Gadek"
            src="https://c.animaapp.com/kiXkeqSn/img/gadek-1-1@2x.png"
          />
        </div>

        <div className="absolute top-[155px] left-[374px] w-[180px] h-[180px] flex bg-beige-400 rounded-[20000px] overflow-hidden aspect-[1] animate-gentle-pulse">
          <img
            className="mt-[17px] w-[177px] h-[163px] ml-0.5 aspect-[0.28] object-cover"
            alt="Mama"
            src="https://c.animaapp.com/kiXkeqSn/img/mama-2x-1.png"
          />
        </div>

        <div className="absolute top-[618px] left-[274px] w-[180px] h-[180px] flex bg-beige-400 rounded-[20000px] overflow-hidden aspect-[1] animate-gentle-pulse">
          <img
            className="mt-7 w-[165px] h-[152px] ml-2 aspect-[0.31] object-cover"
            alt="Dziewczyna"
            src="https://c.animaapp.com/kiXkeqSn/img/dziewczyna-2x-1.png"
          />
        </div>

        <img
          className="absolute top-[8100px] left-[calc(50.00%_-_116px)] w-[231px] h-[251px] aspect-[0.92]"
          alt="Piesek"
          src="https://c.animaapp.com/kiXkeqSn/img/piesek2-01-1@2x.png"
        />

        <SectionComponentNode />
        <img
          className="absolute top-[1978px] left-0 w-[318px] h-[481px] animate-gentle-pulse"
          alt="Group"
          src="https://c.animaapp.com/kiXkeqSn/img/group-4.png"
        />

        <img
          className="absolute top-[1691px] left-[1391px] w-[206px] h-[343px] animate-gentle-pulse"
          alt="Vector"
          src="https://c.animaapp.com/kiXkeqSn/img/vector-6@2x.png"
        />

        <img
          className="absolute top-[5946px] left-[27px] w-[483px] h-[374px]"
          alt="Group"
          src="https://c.animaapp.com/kiXkeqSn/img/group-13@2x.png"
        />
      </div>
    </div>
  );
};
