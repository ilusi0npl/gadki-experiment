import React from "react";

export const SectionComponentNode = () => {
  return (
    <div className="flex flex-col w-[655px] items-center gap-12 absolute top-[5938px] left-[535px]">
      <img
        className="absolute top-[433px] left-[927px] w-[266px] h-[337px]"
        alt="Vector"
        src="https://c.animaapp.com/kiXkeqSn/img/vector-14@2x.png"
      />

      <img
        className="relative w-[180px] h-[180px] aspect-[1]"
        alt="Gadek"
        src="https://c.animaapp.com/kiXkeqSn/img/gadek.svg"
      />

      <div className="font-happy-season font-semibold text-8xl text-center tracking-[-1.06px] leading-[105.6px] relative self-stretch text-fddsraspberry">
        O nas
      </div>

      <p className="relative w-[480px] font-lato font-normal text-transparent text-2xl text-center tracking-[-0.26px] leading-9">
        <span className="font-semibold text-[#e83f4b] tracking-[-0.06px]">
          W Fundacji Dajemy Dzieciom Siłę od ponad 30 lat chronimy dzieci przed
          przemocą i wykorzystaniem seksualnym.
          <br />
        </span>

        <span className="text-[#1e1e1e] tracking-[-0.06px]">
          <br />
          Zapewniamy dzieciom i ich opiekunom wsparcie, profesjonalną pomoc
          psychologiczną i prawną. Uczymy dorosłych, jak mądrze i skutecznie
          reagować na przemoc wobec dzieci oraz co robić, gdy podejrzewają, że
          dziecko jest krzywdzone.
        </span>
      </p>

      <div className="flex w-[280px] items-center justify-center gap-2.5 px-6 py-5 relative flex-[0_0_auto] bg-fddsraspberry rounded-[48px]">
        <div className="relative w-fit mt-[-1.00px] font-lato font-bold text-white text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
          Poznaj nasze działania
        </div>
      </div>
    </div>
  );
};
