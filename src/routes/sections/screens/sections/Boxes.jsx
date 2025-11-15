import React from "react";

export const Boxes = () => {
  return (
    <div className="top-[1395px] left-[374px] flex flex-wrap w-[980px] items-start gap-[20px_20px] absolute">
      <div className="flex w-[480px] items-center gap-2.5 px-6 py-[25px] relative bg-white rounded">
        <p className="relative w-fit mt-[-1.00px] font-lato font-normal text-black text-xl tracking-[-0.22px] leading-5">
          <span className="tracking-[-0.04px] text-[#1e1e1e] leading-8">
            Imię{" "}
          </span>

          <span className="text-[#e83f4b] tracking-[-0.04px] leading-8">*</span>
        </p>
      </div>

      <div className="flex w-[480px] items-center gap-2.5 px-6 py-[25px] relative bg-white rounded">
        <p className="relative w-fit mt-[-1.00px] font-lato font-normal text-black text-xl tracking-[-0.22px] leading-5">
          <span className="tracking-[-0.04px] text-[#1e1e1e] leading-8">
            Nazwisko{" "}
          </span>

          <span className="text-[#e83f4b] tracking-[-0.04px] leading-8">*</span>
        </p>
      </div>

      <div className="flex w-[480px] items-center gap-2.5 px-6 py-[25px] relative bg-white rounded">
        <p className="relative w-fit mt-[-1.00px] font-lato font-normal text-black text-xl tracking-[-0.22px] leading-5">
          <span className="tracking-[-0.04px] text-[#1e1e1e] leading-8">
            Adres e-mail{" "}
          </span>

          <span className="text-[#e83f4b] tracking-[-0.04px] leading-8">*</span>
        </p>
      </div>

      <div className="flex w-[480px] items-center gap-2.5 px-6 py-[25px] relative bg-white rounded">
        <p className="relative w-fit mt-[-1.00px] font-lato font-normal text-black text-xl tracking-[-0.22px] leading-5">
          <span className="tracking-[-0.04px] text-[#1e1e1e] leading-8">
            Numer telefonu{" "}
          </span>

          <span className="text-[#e83f4b] tracking-[-0.04px] leading-8">*</span>
        </p>
      </div>

      <div className="flex w-[480px] items-center gap-2.5 px-6 py-[25px] relative bg-white rounded">
        <p className="text-black text-xl tracking-[-0.22px] leading-5 relative w-fit mt-[-1.00px] font-lato font-normal">
          <span className="tracking-[-0.04px] text-[#1e1e1e] leading-8">
            Hasło{" "}
          </span>

          <span className="text-[#e83f4b] tracking-[-0.04px] leading-8">*</span>
        </p>
      </div>

      <div className="flex w-[480px] items-center gap-2.5 px-6 py-[25px] relative bg-white rounded">
        <p className="relative w-fit mt-[-1.00px] font-lato font-normal text-black text-xl tracking-[-0.22px] leading-5">
          <span className="tracking-[-0.04px] text-[#1e1e1e] leading-8">
            Powtórz hasło{" "}
          </span>

          <span className="text-[#e83f4b] tracking-[-0.04px] leading-8">*</span>
        </p>
      </div>

      <div className="flex w-[480px] items-center gap-2.5 px-6 py-[25px] relative bg-white rounded">
        <p className="relative w-fit mt-[-1.00px] font-lato font-normal text-black text-xl tracking-[-0.22px] leading-5">
          <span className="tracking-[-0.04px] text-[#1e1e1e] leading-8">
            Województwo{" "}
          </span>

          <span className="text-[#e83f4b] tracking-[-0.04px] leading-8">*</span>
        </p>
      </div>

      <div className="flex w-[480px] items-center gap-2.5 px-6 py-[25px] relative bg-white rounded">
        <p className="relative w-fit mt-[-1.00px] font-lato font-normal text-black text-xl tracking-[-0.22px] leading-5">
          <span className="tracking-[-0.04px] text-[#1e1e1e] leading-8">
            Miejscowość{" "}
          </span>

          <span className="text-[#e83f4b] tracking-[-0.04px] leading-8">*</span>
        </p>
      </div>

      <div className="flex w-[480px] items-center justify-between px-6 py-[25px] relative bg-white rounded">
        <p className="relative w-fit mt-[-1.00px] font-lato font-normal text-black text-xl tracking-[-0.22px] leading-5">
          <span className="tracking-[-0.04px] text-[#1e1e1e] leading-8">
            Zawód{" "}
          </span>

          <span className="text-[#e83f4b] tracking-[-0.04px] leading-8">*</span>
        </p>

        <img
          className="relative w-6 h-6"
          alt="Chevron down"
          src="https://c.animaapp.com/mhyvuxooJVyLWW/img/chevron-down.svg"
        />
      </div>

      <div className="flex w-[480px] items-center justify-between px-6 py-[25px] relative bg-white rounded">
        <p className="relative w-fit mt-[-1.00px] font-lato font-normal text-black text-xl tracking-[-0.22px] leading-5">
          <span className="tracking-[-0.04px] text-[#1e1e1e] leading-8">
            Grupy wiekowe dzieci, z którymi pracujesz{" "}
          </span>

          <span className="text-[#e83f4b] tracking-[-0.04px] leading-8">*</span>
        </p>

        <img
          className="relative w-6 h-6"
          alt="Chevron down"
          src="https://c.animaapp.com/mhyvuxooJVyLWW/img/chevron-down.svg"
        />
      </div>

      <div className="flex w-[480px] items-center justify-between px-6 py-[25px] relative bg-white rounded">
        <p className="relative w-fit mt-[-1.00px] font-lato font-normal text-black text-xl leading-5">
          <span className="tracking-[0] text-[#1e1e1e] leading-8">
            Czy jesteś związany/a z placówką edukacyjną
          </span>

          <span className="text-[#e83f4b] tracking-[-0.08px] leading-8">
            {" "}
            *
          </span>
        </p>

        <img
          className="relative w-6 h-6"
          alt="Chevron down"
          src="https://c.animaapp.com/mhyvuxooJVyLWW/img/chevron-down.svg"
        />
      </div>

      <div className="flex w-[480px] items-center gap-2.5 px-6 py-[25px] relative bg-white rounded">
        <p className="relative w-fit mt-[-1.00px] font-lato font-normal text-black text-xl tracking-[-0.22px] leading-8 whitespace-nowrap">
          Identyfikator placówki (REGON, numer RSPO)
        </p>
      </div>
    </div>
  );
};
