import React from "react";

export const SectionComponentNode = () => {
  return (
    <div className="flex w-[1182px] items-center gap-5 absolute top-[4868px] left-[272px]">
      <div className="relative w-[380px] h-[480px] bg-white rounded-xl">
        <div className="absolute top-[236px] left-[71px] w-[237px] h-[244px] flex gap-[16.3px]">
          <img
            className="mt-[25.1px] w-[105.92px] h-[219.1px]"
            alt="Chopak"
            src="https://c.animaapp.com/mhyvtq61XzwmaX/img/chopak-2x.png"
          />

          <img
            className="w-[115.07px] h-[244.17px]"
            alt="Dziewczyna"
            src="https://c.animaapp.com/mhyvtq61XzwmaX/img/dziewczyna-2x.png"
          />
        </div>

        <div className="absolute top-10 left-[76px] w-[228px] font-happy-season font-semibold text-[#e83f4b] text-[40px] text-center tracking-[-0.44px] leading-[44px]">
          Dla dzieci
        </div>
      </div>

      <div className="relative w-[380px] h-[480px] bg-white rounded-xl">
        <div className="absolute top-10 left-[76px] w-[228px] font-happy-season font-semibold text-[#e83f4b] text-[40px] text-center tracking-[-0.44px] leading-[44px]">
          Dla rodziców
          <br />i opiekunów
        </div>

        <div className="absolute top-[161px] left-[52px] w-[277px] h-[319px] flex gap-[11.9px]">
          <img
            className="mt-[26.1px] w-[124.6px] h-[292.82px]"
            alt="Mama"
            src="https://c.animaapp.com/mhyvtq61XzwmaX/img/mama-2x.png"
          />

          <img
            className="w-[140.23px] h-[318.88px]"
            alt="Tata"
            src="https://c.animaapp.com/mhyvtq61XzwmaX/img/tata-2x.png"
          />
        </div>
      </div>

      <div className="relative w-[380px] h-[480px] bg-white rounded-xl overflow-hidden">
        <img
          className="absolute top-[148px] left-[35px] w-[135px] h-[332px] object-cover"
          alt="Edukatorka obszar"
          src="https://c.animaapp.com/mhyvtq61XzwmaX/img/edukatorka-obszar-roboczy-1-1.png"
        />

        <img
          className="absolute top-[133px] left-[155px] w-48 h-[347px] object-cover"
          alt="Edukator obszar"
          src="https://c.animaapp.com/mhyvtq61XzwmaX/img/edukator-obszar-roboczy-1-1.png"
        />

        <div className="absolute top-[41px] left-[93px] w-[194px] font-happy-season font-semibold text-[#e83f4b] text-[40px] text-center tracking-[-0.44px] leading-[44px]">
          Dla edukatorów
          <br />i nauczycieli
        </div>
      </div>
    </div>
  );
};
