import React from "react";
import { Div } from "./sections/Div";
import { DivWrapper } from "./sections/DivWrapper";
import { Footer } from "./sections/Footer";
import { FooterTextWrapper } from "./sections/FooterTextWrapper";
import { Frame } from "./sections/Frame";
import { FrameWrapper } from "./sections/FrameWrapper";
import { Newsletter } from "./sections/Newsletter";

export const GadkiDlaRodzicwI = () => {
  return (
    <div className="bg-beige-200 overflow-hidden w-full min-w-[1728px] h-[10131px] relative">
      {/* BACKGROUND LAYER - Full-width backgrounds */}
      <div className="absolute inset-0 w-screen pointer-events-none">
        {/* Top Union SVG - Full width */}
        <img
          className="absolute w-screen h-[778px] top-0 left-0 object-cover"
          alt="Union"
          src="https://c.animaapp.com/mhyuvh6ynrLTWn/img/union-3.svg"
        />

        {/* Newsletter Union SVG - Full width */}
        <img
          className="absolute top-[8610px] left-0 w-screen h-[723px] object-cover"
          alt="Union"
          src="https://c.animaapp.com/mhyuvh6ynrLTWn/img/union-2.svg"
        />
      </div>

      {/* CONTENT LAYER - Centered 1728px container */}
      <div className="max-w-[1728px] mx-auto relative h-full">
      <Footer />
      <FooterTextWrapper />
      <img
        className="absolute w-[10.11%] h-0 top-0 left-[3.95%]"
        alt="Group"
        src="https://c.animaapp.com/mhyuvh6ynrLTWn/img/group.png"
      />

      <img
        className="absolute top-16 left-[110px] w-[164px] h-[71px]"
        alt="Frame"
        src="https://c.animaapp.com/mhyuvh6ynrLTWn/img/frame-18.svg"
      />

      <img
        className="absolute top-[83px] left-[1478px] w-[60px] h-[46px]"
        alt="Layer"
        src="https://c.animaapp.com/mhyuvh6ynrLTWn/img/layer-1-1.svg"
      />

      <img
        className="absolute top-[77px] left-[calc(50.00%_-_73px)] w-[146px] h-[67px]"
        alt="Frame"
        src="https://c.animaapp.com/mhyuvh6ynrLTWn/img/frame-12.svg"
      />

      <div className="absolute top-[329px] left-[474px] w-[781px] [font-family:'Happy_Season-Bold',Helvetica] font-bold text-white text-8xl text-center tracking-[-1.06px] leading-[105.6px]">
        Dla rodziców i opiekunów
      </div>

      <Frame />
      <FrameWrapper />
      <DivWrapper />
      <Div />
      <div className="absolute top-[99px] left-96 w-[180px] h-[180px] flex bg-beige-400 rounded-[20000px] overflow-hidden">
        <img
          className="mt-[17px] ml-0.5 w-[177px] h-[163px] object-cover"
          alt="Mama"
          src="https://c.animaapp.com/mhyuvh6ynrLTWn/img/mama-2x-1.png"
        />
      </div>

      <div className="absolute top-[496px] left-[1182px] w-[180px] h-[180px] flex bg-beige-400 rounded-[20000px] overflow-hidden">
        <img
          className="mt-5 ml-[3px] w-[177px] h-40 object-cover"
          alt="Tata"
          src="https://c.animaapp.com/mhyuvh6ynrLTWn/img/tata-2x-1.png"
        />
      </div>

      <Newsletter />
      <div className="inline-flex absolute top-[476px] left-[calc(50.00%_-_208px)] bg-white items-center justify-center gap-2.5 px-6 py-5 rounded-[48px]">
        <p className="relative w-fit mt-[-1.00px] [font-family:'Lato',Helvetica] font-bold text-fddsraspberry text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
          Zaloguj się do Strefy Opiekuna
        </p>
      </div>

      <img
        className="absolute top-[644px] left-[274px] w-[1180px] h-[622px]"
        alt="Frame"
        src="https://c.animaapp.com/mhyuvh6ynrLTWn/img/frame-44.svg"
      />

      <div className="absolute top-[8026px] left-[278px] w-[1172px] [font-family:'Happy_Season-Semibold',Helvetica] font-normal text-fddsraspberry text-8xl text-center tracking-[-1.06px] leading-[105.6px]">
        Pozostałe
        <br />
        materiały
      </div>

      <div className="inline-flex items-start justify-center gap-[265px] absolute top-[5356px] left-[376px]">
        <div className="inline-flex flex-col items-start gap-12 relative flex-[0_0_auto]">
          <p className="relative w-[480px] mt-[-1.00px] [font-family:'Lato',Helvetica] font-normal text-black text-2xl tracking-[-0.26px] leading-9">
            Czy wiesz, że zajęcia&#34;Gadki z psem&#34; możesz przeprowadzić
            z dzieckiem w swoim domu? Przygotowaliśmy dla Ciebie plan działania,
            dzięki któremu poprzez zabawę nauczysz dziecko podstawowych zasad
            bezpieczeństwa i rozpoznawania zagrażających sytuacji.
          </p>
        </div>
      </div>

      <div className="flex w-[1180px] items-center gap-[251px] absolute top-[5254px] left-[276px]">
        <div className="flex w-[878px] items-center gap-5 relative">
          <div className="relative w-20 mt-[-1.00px] [font-family:'Happy_Season-Bold',Helvetica] font-bold text-fddsraspberry text-4xl text-center tracking-[-0.40px] leading-[54px]">
            06
          </div>

          <div className="relative w-[473.01px] mt-[-1.00px] [font-family:'Happy_Season-Medium',Helvetica] font-medium text-black text-4xl tracking-[-0.40px] leading-[54px]">
            Filmy instruktażowe
          </div>
        </div>
      </div>

      <img
        className="absolute top-[5937px] left-[278px] w-[1178px] h-px object-cover"
        alt="Line"
        src="https://c.animaapp.com/mhyuvh6ynrLTWn/img/line-6.svg"
      />

      <div className="inline-flex items-center gap-[220px] absolute top-[5709px] left-[301px]">
        <div className="inline-flex items-center gap-[39px] relative flex-[0_0_auto]">
          <img
            className="relative w-9 h-9"
            alt="File save"
            src="https://c.animaapp.com/mhyuvh6ynrLTWn/img/file-save-24dp-1f1f1f-fill0-wght300-grad0-opsz24-1.svg"
          />

          <div className="relative w-[480px] mt-[-1.00px] [font-family:'Lato',Helvetica] font-normal text-black text-2xl tracking-[-0.26px] leading-9">
            Film_instruktażowy_1
          </div>
        </div>

        <div className="flex w-[280px] relative bg-fddsraspberry items-center justify-center gap-2.5 px-6 py-5 rounded-[48px]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Lato',Helvetica] font-bold text-white text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
            Odtwórz
          </div>
        </div>
      </div>

      <div className="inline-flex items-center gap-[220px] absolute top-[5806px] left-[301px]">
        <div className="inline-flex items-center gap-[39px] relative flex-[0_0_auto]">
          <img
            className="relative w-9 h-9"
            alt="File save"
            src="https://c.animaapp.com/mhyuvh6ynrLTWn/img/file-save-24dp-1f1f1f-fill0-wght300-grad0-opsz24-1-4.svg"
          />

          <div className="relative w-[480px] mt-[-1.00px] [font-family:'Lato',Helvetica] font-normal text-black text-2xl tracking-[-0.26px] leading-9">
            Film_instruktażowy_2
          </div>
        </div>

        <div className="flex w-[280px] relative bg-fddsraspberry items-center justify-center gap-2.5 px-6 py-5 rounded-[48px]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Lato',Helvetica] font-bold text-white text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
            Odtwórz
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
