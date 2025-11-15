import React from "react";
import { useScrollReveal } from "../../../../hooks/useScrollReveal";

export const FrameWrapper = () => {
  const { ref, className } = useScrollReveal();

  return (
    <div ref={ref} className={`absolute top-[8285px] left-0 w-[1728px] h-[913px] ${className}`}>
      <div className="flex flex-col w-[380px] h-[582px] items-start gap-12 absolute top-[137px] left-[374px]">
        <p className="relative self-stretch mt-[-1.00px] font-happy-season font-semibold text-white text-4xl tracking-[-0.40px] leading-[54px]">
          Jeżeli jesteś dzieckiem i trudno Ci porozmawiać z osobą dorosłą
          z Twojego otoczenia...
        </p>

        <p className="relative self-stretch font-lato font-normal text-white text-xl tracking-[-0.22px] leading-[30px]">
          <span className="tracking-[-0.04px]">
            Telefon Zaufania dla Dzieci i Młodzieży –116 111 może Ci pomóc.
            Prowadzimy bezpłatną i anonimową pomoc. Zadzwoń do nas
            pod numer 116 111 lub odwiedź naszą stronę internetową{" "}
          </span>

          <a
            href="https://116111.pl/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="tracking-[-0.04px] underline">116111.pl</span>
          </a>

          <span className="tracking-[-0.04px]">.</span>
        </p>

        <div className="flex flex-col w-[281.38px] items-start gap-6 relative flex-[0_0_auto]">
          <div className="flex items-center justify-center gap-2.5 px-6 py-5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[48px] hover:bg-fddsraspberry transition-colors cursor-pointer group">
            <div className="relative w-fit mt-[-1.00px] font-lato font-bold text-fddsraspberry text-xl tracking-[-0.22px] leading-[30px] whitespace-nowrap group-hover:text-white">
              Zadzwoń
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5 px-6 py-5 relative self-stretch w-full flex-[0_0_auto] rounded-[48px] border-2 border-solid border-white hover:bg-white hover:border-fddsraspberry transition-colors cursor-pointer group">
            <div className="relative w-fit mt-[-2.00px] font-lato font-bold text-white text-xl tracking-[-0.22px] leading-[30px] whitespace-nowrap group-hover:text-fddsraspberry">
              Odwiedź stronę
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[380px] h-[582px] items-start gap-12 absolute top-[137px] left-[974px]">
        <p className="relative self-stretch mt-[-1.00px] font-happy-season font-semibold text-white text-4xl tracking-[-0.40px] leading-[54px]">
          Jesteś rodzicem lub nauczycielem i chcesz porozmawiać
          o bezpieczeństwie dziecka?
        </p>

        <p className="relative self-stretch font-lato font-normal text-white text-xl tracking-[-0.22px] leading-[30px]">
          <span className="tracking-[-0.04px]">
            Możesz skontaktować się z nami telefonicznie pod numerem Telefonu
            dla Rodziców i Nauczycieli w sprawie Bezpieczeństwa Dzieci: 800 100
            100 lub poprzez stronę{" "}
          </span>

          <a
            href="https://800100100.pl/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="tracking-[-0.04px] underline">800100100.pl</span>
          </a>

          <span className="tracking-[-0.04px]">.</span>
        </p>

        <div className="flex flex-col w-[281.38px] items-start gap-6 relative flex-[0_0_auto]">
          <div className="flex items-center justify-center gap-2.5 px-6 py-5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[48px] hover:bg-fddsraspberry transition-colors cursor-pointer group">
            <div className="relative w-fit mt-[-1.00px] font-lato font-bold text-fddsraspberry text-xl tracking-[-0.22px] leading-[30px] whitespace-nowrap group-hover:text-white">
              Zadzwoń
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5 px-6 py-5 relative self-stretch w-full flex-[0_0_auto] rounded-[48px] border-2 border-solid border-white hover:bg-white hover:border-fddsraspberry transition-colors cursor-pointer group">
            <div className="relative w-fit mt-[-2.00px] font-lato font-bold text-white text-xl tracking-[-0.22px] leading-[30px] whitespace-nowrap group-hover:text-fddsraspberry">
              Odwiedź stronę
            </div>
          </div>
        </div>
      </div>

      <img
        className="absolute top-[370px] left-0 w-[184px] h-[379px]"
        alt="Vector"
        src="https://c.animaapp.com/kiXkeqSn/img/vector-12@2x.png"
      />
    </div>
  );
};
