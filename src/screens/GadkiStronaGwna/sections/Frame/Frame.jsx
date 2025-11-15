import React from "react";

export const Frame = () => {
  return (
    <div className="flex flex-col w-[655px] items-center gap-12 absolute top-[1750px] left-[536px]">
      <div className="relative w-[180px] h-[180px] bg-beige-400 rounded-[20000px] overflow-hidden aspect-[1] animate-gentle-pulse">
        <img
          className="absolute top-6 left-[38px] w-[142px] h-[156px] aspect-[0.96] object-cover"
          alt="Gadek"
          src="https://c.animaapp.com/kiXkeqSn/img/gadek-1-1@2x.png"
        />
      </div>

      <div className="relative self-stretch font-happy-season font-semibold text-fddsraspberry text-8xl text-center tracking-[-1.06px] leading-[105.6px]">
        Proste rozmowy
        <br />
        na ważne tematy
      </div>

      <div className="flex flex-col w-[480px] items-start gap-10 relative flex-[0_0_auto]">
        <p className="relative self-stretch mt-[-1.00px] font-lato font-semibold text-fddsraspberry text-2xl text-center tracking-[-0.26px] leading-9">
          Gadki to rozmowy na temat kilku prostych zasad, które pomogą ochronić
          Twoje dziecko przed wykorzystywaniem seksualnym.
        </p>

        <p className="relative self-stretch font-lato font-normal text-black text-2xl text-center tracking-[-0.26px] leading-9">
          Dzieci dowiedzą się z nich, że to one decydują o swoim ciele, zawsze
          mają prawo powiedzieć „nie” i powinny szukać pomocy, jeżeli
          coś je niepokoi lub martwi.
        </p>
      </div>

      <div className="flex w-[280px] items-center justify-center gap-2.5 px-6 py-5 relative flex-[0_0_auto] bg-fddsraspberry rounded-[48px]">
        <div className="relative w-fit mt-[-1.00px] font-lato font-bold text-white text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
          O programie
        </div>
      </div>
    </div>
  );
};
