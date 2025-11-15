import React from "react";

export const BoxesWrapper = () => {
  return (
    <div className="top-[618px] left-[calc(50.00%_-_490px)] flex flex-wrap w-[980px] items-start gap-[20px_20px] absolute">
      <div className="w-[480px] items-center gap-2.5 px-[30px] py-[25px] relative flex bg-white rounded">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Lato',Helvetica] font-normal text-black text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
          Adres e-mail
        </div>
      </div>

      <div className="w-[480px] items-center gap-2.5 px-[30px] py-[25px] relative flex bg-white rounded">
        <div className="text-black text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap relative w-fit mt-[-1.00px] [font-family:'Lato',Helvetica] font-normal">
          Hasło
        </div>
      </div>
    </div>
  );
};
