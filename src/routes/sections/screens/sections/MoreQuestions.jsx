import React from "react";

export const MoreQuestions = () => {
  return (
    <div className="flex flex-col w-[855px] items-center gap-[60px] absolute top-[2878px] left-[calc(50.00%_-_427px)]">
      <p className="relative self-stretch mt-[-1.00px] [font-family:'Happy_Season-Bold',Helvetica] font-bold text-fddsraspberry text-[64px] text-center tracking-[-0.70px] leading-[70.4px]">
        Masz więcej pytań? Skontaktuj się z nami!
      </p>

      <div className="inline-flex items-center justify-center gap-6 relative flex-[0_0_auto]">
        <div className="inline-flex flex-col items-center justify-center gap-10 relative flex-[0_0_auto]">
          <div className="w-fit mt-[-1.00px] text-black text-4xl text-center tracking-[-0.40px] leading-[54px] whitespace-nowrap relative [font-family:'Lato',Helvetica] font-medium">
            gadki@fdds.pl
          </div>
        </div>

        <img
          className="relative w-10 h-10"
          alt="Content copy"
          src="https://c.animaapp.com/mhyvrx3iXxUduh/img/content-copy.png"
        />
      </div>
    </div>
  );
};
