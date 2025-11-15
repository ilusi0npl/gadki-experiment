import React from "react";
import { BoxAdresEmail } from "./sections/BoxAdresEmail";
import { Boxes } from "./sections/Boxes";
import { BoxesWrapper } from "./sections/BoxesWrapper";
import { DivWrapper } from "./sections/DivWrapper";
import { Footer } from "./sections/Footer";
import { Frame } from "./sections/Frame";
import { FrameWrapper } from "./sections/FrameWrapper";

export const GadkiLogowanie = () => {
  return (
    <div className="bg-beige-200 w-full min-w-[1728px] h-[4053px] relative">
      <Footer />
      <img
        className="absolute top-[370px] left-[1158px] w-[417px] h-52"
        alt="Group"
        src="https://c.animaapp.com/mhyvuxooJVyLWW/img/group-12.png"
      />

      <img
        className="absolute top-[1306px] left-[185px] w-[389px] h-[287px]"
        alt="Vector"
        src="https://c.animaapp.com/mhyvuxooJVyLWW/img/vector-14.png"
      />

      <img
        className="absolute w-[10.11%] h-0 top-0 left-[3.95%]"
        alt="Group"
        src="https://c.animaapp.com/mhyvuxooJVyLWW/img/group.png"
      />

      <img
        className="top-0 h-[259px] absolute left-0 w-[1728px]"
        alt="Union"
        src="https://c.animaapp.com/mhyvuxooJVyLWW/img/union-2.svg"
      />

      <img
        className="absolute top-16 left-[110px] w-[164px] h-[71px]"
        alt="Frame"
        src="https://c.animaapp.com/mhyvuxooJVyLWW/img/frame-18.svg"
      />

      <img
        className="absolute top-[83px] left-[1478px] w-[60px] h-[46px]"
        alt="Layer"
        src="https://c.animaapp.com/mhyvuxooJVyLWW/img/layer-1.svg"
      />

      <img
        className="absolute top-[77px] left-[calc(50.00%_-_73px)] w-[146px] h-[67px]"
        alt="Frame"
        src="https://c.animaapp.com/mhyvuxooJVyLWW/img/frame-12.svg"
      />

      <Frame />
      <div className="flex w-[262px] h-[71px] items-center justify-center gap-2.5 px-6 py-5 absolute top-[2269px] left-[1083px] bg-[#e83f4b] rounded-[48px]">
        <div className="relative w-fit mt-[-3.50px] mb-[-1.50px] [font-family:'Lato',Helvetica] font-bold text-white text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
          Załóż konto
        </div>
      </div>

      <div className="inline-flex items-end gap-3 absolute top-[2201px] left-[374px]">
        <div className="relative w-5 h-5 bg-white rounded border border-solid border-[#1e1e1e]" />

        <p className="text-[#e83f4b] relative w-fit mt-[-1.00px] [font-family:'Lato',Helvetica] font-normal text-base tracking-[-0.18px] leading-6 whitespace-nowrap">
          zgoda na przetwarzanie danych osobowych w celu realizacji programu
          (RODO) *
        </p>
      </div>

      <div className="inline-flex items-end gap-3 absolute top-[2245px] left-[374px]">
        <div className="relative w-5 h-5 bg-white rounded border border-solid border-[#1e1e1e]" />

        <p className="text-black relative w-fit mt-[-1.00px] [font-family:'Lato',Helvetica] font-normal text-base tracking-[-0.18px] leading-6 whitespace-nowrap">
          zgoda na otrzymywanie materiałów drogą elektroniczną
        </p>
      </div>

      <FrameWrapper />
      <Boxes />
      <BoxAdresEmail />
      <div className="absolute top-[452px] left-[632px] [font-family:'Happy_Season-Bold',Helvetica] font-bold text-fddsraspberry text-8xl text-center tracking-[-1.06px] leading-[105.6px] whitespace-nowrap">
        Masz już konto?
      </div>

      <DivWrapper />
      <img
        className="absolute top-[2586px] left-[calc(50.00%_-_116px)] w-[231px] h-[251px]"
        alt="Piesek"
        src="https://c.animaapp.com/mhyvuxooJVyLWW/img/piesek2-01-1.png"
      />

      <BoxesWrapper />
    </div>
  );
};
