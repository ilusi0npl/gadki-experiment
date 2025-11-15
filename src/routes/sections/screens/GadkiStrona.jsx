import React from "react";
import { Div } from "./sections/Div";
import { DivWrapper } from "./sections/DivWrapper";
import { Footer } from "./sections/Footer";
import { Frame } from "./sections/Frame";
import { FrameWrapper } from "./sections/FrameWrapper";
import { Newsletter } from "./sections/Newsletter";
import { SectionComponentNode } from "./sections/SectionComponentNode";

export const GadkiStrona = () => {
  return (
    <div className="bg-beige-200 overflow-hidden w-full min-w-[1728px] h-[6729px] relative">
      <Footer />
      <img
        className="absolute w-[10.11%] h-0 top-0 left-[3.95%]"
        alt="Group"
        src="https://c.animaapp.com/mhyvtq61XzwmaX/img/group.png"
      />

      <img
        className="absolute w-[102.47%] h-0 top-0 left-[-652.31%]"
        alt="Vector"
      />

      <img
        className="absolute top-0 left-0 w-[1728px] h-[259px]"
        alt="Union"
        src="https://c.animaapp.com/mhyvtq61XzwmaX/img/union-1.svg"
      />

      <img
        className="absolute top-16 left-[110px] w-[164px] h-[71px]"
        alt="Frame"
        src="https://c.animaapp.com/mhyvtq61XzwmaX/img/frame-13.svg"
      />

      <img
        className="absolute top-[83px] left-[1478px] w-[60px] h-[46px]"
        alt="Layer"
        src="https://c.animaapp.com/mhyvtq61XzwmaX/img/layer-1.svg"
      />

      <img
        className="absolute top-[77px] left-[calc(50.00%_-_73px)] w-[146px] h-[67px]"
        alt="Frame"
        src="https://c.animaapp.com/mhyvtq61XzwmaX/img/frame-12.svg"
      />

      <Frame />
      <FrameWrapper />
      <DivWrapper />
      <p className="absolute top-[3349px] left-[474px] w-[781px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
        Niezwykle ważny jest dotyk. Dla dzieci dotyk jest zmysłem, za pomocą
        którego poznają świat. Łagodny dotyk bliskiej osoby jest czymś, czego
        maluchy bardzo potrzebują, gdyż to daje im poczucie, że są bezpieczne i
        kochane. Dla dziecka ważne jest, gdy może swoim ciałem poczuć Twoje
        ciało. Taki dotyk „skóra do skóry” buduje poczucie bliskości i zaufanie
        pomiędzy Wami. Delikatnie głaszcz malucha i przytulaj, a już niedługo
        dziecko będzie rozróżniać Twój dotyk spośród wszystkich innych!
      </p>

      <img
        className="absolute top-[5237px] left-0 w-[1728px] h-[723px]"
        alt="Union"
        src="https://c.animaapp.com/mhyvtq61XzwmaX/img/union-3.svg"
      />

      <Div />
      <div className="flex flex-col w-[980px] items-start gap-[72px] absolute top-[1453px] left-[374px]">
        <img
          className="mt-[-0.50px] relative w-[980px] h-px object-cover"
          alt="Line"
          src="https://c.animaapp.com/mhyvtq61XzwmaX/img/line-4.svg"
        />

        <p className="relative self-stretch font-happy-season font-medium text-fddsraspberry text-5xl text-center tracking-[-0.53px] leading-[52.8px]">
          Przywiązanie do mamy jest niezwykle ważne, wręcz niezbędne dla
          prawidłowego rozwoju dziecka. Dzięki niemu maluch czuje się
          bezpiecznie i może poznawać otaczający świat.
        </p>

        <img
          className="mb-[-0.50px] relative w-[980px] h-px object-cover"
          alt="Line"
          src="https://c.animaapp.com/mhyvtq61XzwmaX/img/line-4.svg"
        />
      </div>

      <p className="absolute top-[3173px] left-[475px] w-[775px] font-happy-season font-bold text-fddsraspberry text-5xl tracking-[-0.53px] leading-[52.8px]">
        Jakie zachowania sprzyjają budowaniu bliskości między mamą a dzieckiem?
      </p>

      <SectionComponentNode />
      <Newsletter />
      <div className="absolute top-[4607px] left-[575px] font-happy-season font-semibold text-[#e83f4b] text-[200px] text-center tracking-[-2.20px] leading-[220.0px] whitespace-nowrap">
        Materiały
      </div>
    </div>
  );
};
