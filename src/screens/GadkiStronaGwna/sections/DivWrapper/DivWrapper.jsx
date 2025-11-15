import React from "react";

export const DivWrapper = () => {
  return (
    <div className="flex w-[1180px] items-center gap-5 absolute top-[5131px] left-[274px]">
      <div className="relative w-[380px] h-[480px] bg-white rounded-xl">
        <div className="absolute top-[236px] left-[71px] w-[237px] h-[244px] flex gap-[16.3px]">
          <img
            className="mt-[25.1px] w-[105.92px] h-[219.1px] aspect-[0.48]"
            alt="Chopak"
            src="https://c.animaapp.com/kiXkeqSn/img/chopak-2x@2x.png"
          />

          <img
            className="w-[115.07px] h-[244.17px] aspect-[0.47]"
            alt="Dziewczyna"
            src="https://c.animaapp.com/kiXkeqSn/img/dziewczyna-2x@2x.png"
          />
        </div>

        <div className="absolute top-10 left-[76px] w-[228px] font-happy-season font-semibold text-fddsraspberry text-[40px] text-center tracking-[-0.44px] leading-[44.0px]">
          Dla dzieci
        </div>
      </div>

      <div className="relative w-[380px] h-[480px] bg-white rounded-xl">
        <div className="absolute top-10 left-[76px] w-[228px] font-happy-season font-semibold text-fddsraspberry text-[40px] text-center tracking-[-0.44px] leading-[44.0px]">
          Dla rodziców
          <br />i opiekunów
        </div>

        <div className="absolute top-[161px] left-[52px] w-[277px] h-[319px] flex gap-[11.9px]">
          <img
            className="mt-[26.1px] w-[124.6px] h-[292.82px] aspect-[0.43]"
            alt="Mama"
            src="https://c.animaapp.com/kiXkeqSn/img/mama-2x@2x.png"
          />

          <img
            className="w-[140.23px] h-[318.88px] aspect-[0.44]"
            alt="Tata"
            src="https://c.animaapp.com/kiXkeqSn/img/tata-2x@2x.png"
          />
        </div>
      </div>

      <div className="relative w-[380px] h-[480px] bg-white rounded-xl overflow-hidden">
        <div className="absolute top-[41px] left-[93px] w-[194px] font-happy-season font-semibold text-fddsraspberry text-[40px] text-center tracking-[-0.44px] leading-[44.0px]">
          Dla edukatorów
          <br />i nauczycieli
        </div>

        <img
          className="absolute top-[148px] left-[35px] w-[135px] h-[332px] aspect-[0.29] object-cover"
          alt="Edukatorka obszar"
          src="https://c.animaapp.com/kiXkeqSn/img/edukatorka-obszar-roboczy-1-1@2x.png"
        />

        <img
          className="absolute top-[133px] left-[155px] w-48 h-[347px] aspect-[0.38] object-cover"
          alt="Edukator obszar"
          src="https://c.animaapp.com/kiXkeqSn/img/edukator-obszar-roboczy-1-1.png"
        />
      </div>
    </div>
  );
};
