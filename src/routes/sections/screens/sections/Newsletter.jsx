import React from "react";

export const Newsletter = () => {
  return (
    <div className="absolute top-[3829px] left-[calc(50.00%_-_590px)] w-[1184px] h-[486px]">
      <div className="absolute top-[186px] left-0 w-[1180px] h-[300px] bg-[#e83f4b] rounded-3xl" />

      <img
        className="absolute top-0 left-[901px] w-[179px] h-[186px] object-cover"
        alt="Gadek"
        src="https://c.animaapp.com/mhyvtq61XzwmaX/img/gadek-2.png"
      />

      <p className="absolute top-[225px] left-[100px] [font-family:'Happy_Season-Bold',Helvetica] font-bold text-white text-5xl tracking-[-0.53px] leading-[52.8px] whitespace-nowrap">
        Zapisz się do naszego newslettera
      </p>

      <div className="absolute top-[409px] left-[100px] w-5 h-5 bg-white rounded" />

      <p className="absolute top-[405px] left-[132px] [font-family:'Lato',Helvetica] font-normal text-white text-base tracking-[-0.18px] leading-6">
        <span className="text-[#ffffff] tracking-[-0.03px]">
          Zgadzam się na otrzymywanie newslettera Fundacji Dajemy Dzieciom
          Siłę oraz akceptuję{" "}
        </span>

        <span className="font-semibold text-[#ffffff] tracking-[-0.03px] underline">
          Regulamin
        </span>

        <span className="text-[#ffffff] tracking-[-0.03px]"> i</span>

        <span className="font-semibold text-[#ffffff] tracking-[-0.03px]">
          &nbsp;
        </span>

        <span className="font-semibold text-[#ffffff] tracking-[-0.03px] underline">
          Politykę Prywatności
        </span>

        <span className="text-[#ffffff] tracking-[-0.03px]">.</span>
      </p>

      <div className="inline-flex items-center gap-[60px] absolute top-[301px] left-[100px]">
        <div className="inline-flex items-center gap-10 relative flex-[0_0_auto]">
          <div className="flex w-[300px] items-center justify-center gap-2.5 px-[60px] py-[25px] relative bg-white rounded">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Lato',Helvetica] font-normal text-black text-2xl tracking-[-0.26px] leading-[26.4px] whitespace-nowrap">
              Imię
            </div>
          </div>

          <div className="inline-flex items-center justify-center gap-2.5 px-[60px] py-[25px] relative flex-[0_0_auto] bg-white rounded">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Lato',Helvetica] font-normal text-black text-2xl tracking-[-0.26px] leading-[26.4px] whitespace-nowrap">
              Twój adres e-mail
            </div>
          </div>
        </div>

        <div className="flex w-[280px] items-center justify-center gap-2.5 px-6 py-5 relative rounded-[48px] border-2 border-solid border-[#ffffff]">
          <div className="relative w-fit mt-[-2.00px] [font-family:'Lato',Helvetica] font-bold text-white text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
            Zapisz się
          </div>
        </div>
      </div>
    </div>
  );
};
