import React, { useState } from "react";

const imgVector7 = "https://www.figma.com/api/mcp/asset/bcc5868e-ba4e-48a3-86e7-7e08fdbb3aff";
const imgVector3 = "https://www.figma.com/api/mcp/asset/485f3a7b-5be6-4b18-ad1f-11de6a8c4824";
const imgUnion = "https://www.figma.com/api/mcp/asset/71b51bd7-047b-42e2-bd78-a51d989ac0f5";
const imgVector12 = "https://www.figma.com/api/mcp/asset/67311518-9205-417a-b802-db9576c01160";
const imgVector15 = "https://www.figma.com/api/mcp/asset/29ffb832-bf6a-489d-a633-fcec4203acc0";

const cardsData = [
  {
    id: "G",
    letter: "G",
    title: "Gdy mówisz NIE,\nto znaczy NIE",
    bgColor: "#b61919",
    rotation: "rotate-[7.73deg]",
    image: imgVector7,
    imageStyle: {
      position: "absolute",
      left: "196px",
      top: "15px",
      width: "141.72px",
      height: "213.156px",
      transform: "rotate(188deg) scaleY(-1)"
    }
  },
  {
    id: "A",
    letter: "A",
    title: "Alarmuj, gdy\npotrzebujesz pomocy",
    bgColor: "#0a5556",
    rotation: "rotate-[-6.12deg]",
    image: imgVector3,
    imageStyle: {
      position: "absolute",
      left: "163px",
      top: "-143px",
      width: "337.653px",
      height: "311.369px",
      transform: "rotate(345deg)"
    }
  },
  {
    id: "D",
    letter: "D",
    title: "Dobrze zrobisz, mówiąc\no tajemnicach, które\ncię niepokoją",
    bgColor: "#f1c500",
    rotation: "rotate-[3.58deg]",
    image: imgUnion,
    imageStyle: {
      position: "absolute",
      left: "161px",
      top: "60px",
      width: "170.489px",
      height: "112.289px",
      transform: "rotate(8deg)"
    }
  },
  {
    id: "K",
    letter: "K",
    title: "Koniecznie pamiętaj,\nże twoje ciało należy\ndo Ciebie",
    bgColor: "#ef771b",
    rotation: "rotate-[-0.25deg]",
    image: imgVector12,
    imageStyle: {
      position: "absolute",
      left: "193.77px",
      top: "-63.26px",
      width: "262px",
      height: "214px",
      transform: "rotate(165deg)"
    }
  },
  {
    id: "I",
    letter: "I",
    title: "Intymne części ciała\nsą prywatne",
    bgColor: "#273488",
    rotation: "rotate-[4.71deg]",
    image: imgVector15,
    imageStyle: {
      position: "absolute",
      left: "190px",
      top: "14px",
      width: "291px",
      height: "214px",
      transform: "rotate(-4.71deg)"
    }
  }
];

export const Group = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? cardsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === cardsData.length - 1 ? 0 : prev + 1));
  };

  const currentCard = cardsData[currentIndex];

  return (
    <>
      {/* Carousel Card */}
      <div className="absolute top-[3485px] left-[592px] w-[441px] h-[527px]">
        <div className="absolute top-[23px] left-[31px] w-[380px] h-[480px]">
          {/* Current Card */}
          <div
            className={`w-full h-full flex flex-col gap-28 rounded-xl overflow-hidden ${currentCard.rotation}`}
            style={{ backgroundColor: currentCard.bgColor }}
          >
            <div className="ml-[43.1px] w-[81px] h-[220px] mt-5 font-happy-season font-semibold text-white text-[200px] tracking-[-2.20px] leading-[220.0px] whitespace-nowrap">
              {currentCard.letter}
            </div>

            <p className="ml-10 w-[273px] font-happy-season font-medium text-white text-[40px] tracking-[-0.44px] leading-[44.0px] whitespace-pre-line">
              {currentCard.title}
            </p>

            {/* Decorative Image */}
            {currentCard.image && (
              <img
                alt=""
                src={currentCard.image}
                style={currentCard.imageStyle}
              />
            )}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-[3607px] left-[1074px] w-20 h-72 flex flex-col gap-3 z-10">
        {/* Previous Button (Up Arrow) */}
        <button
          onClick={handlePrevious}
          className="w-20 h-20 bg-fddsraspberry rounded-full flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
          aria-label="Poprzednia karta"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Eye Button (Visual Indicator) */}
        <div className="w-20 h-20 bg-fddsraspberry rounded-full flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5C7 5 2.73 8.11 1 12.5C2.73 16.89 7 20 12 20C17 20 21.27 16.89 23 12.5C21.27 8.11 17 5 12 5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="12.5" r="3.5" stroke="white" strokeWidth="2"/>
          </svg>
        </div>

        {/* Next Button (Down Arrow) */}
        <button
          onClick={handleNext}
          className="w-20 h-20 bg-fddsraspberry rounded-full flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
          aria-label="Następna karta"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </>
  );
};
