import React, { useState } from "react";
import { Link } from "react-router-dom";

const faqData = [
  {
    id: 1,
    number: "01",
    question: "Jak rozmawiać z dzieckiem?",
    answer: "Nie traktuj rozmowy dotyczącej zasad zachowania bezpieczeństwa jako jednorazowego wydarzenia. Znacznie lepiej jest rozmawiać na te tematy krócej, a częściej. Pomoże to dziecku zapamiętać kluczowe informacje i stosować się do przedstawionych zasad."
  },
  {
    id: 2,
    number: "02",
    question: "Czy rozmowa o wykorzystywaniu nie przestraszy dziecka?",
    answer: "Jeżeli dziecko powie coś, co w jakikolwiek sposób Cię zaniepokoi, skonsultuj się z profesjonalistą (psychologiem, pedagogiem, koordynatorem Standardów Ochrony Małoletnich w placówce dziecka). Możesz także skorzystać z prowadzonego przez Fundację Dajemy Dzieciom Siłę Telefonu dla Rodziców i Nauczycieli w sprawie Bezpieczeństwa Dzieci: 800 100 100 (800100100.pl). Jesteśmy po to, aby wspierać rodziców i pomagać im radzić sobie w trudnych sytuacjach.\n\nJeżeli okaże się, że nie ma powodów do obaw, poczujesz ulgę, że to sprawdziłeś(-aś). Pamiętaj, dla dziecka to duże wsparcie, że może z Tobą o wszystkim porozmawiać. Niezależnie od tego zawsze okazuj dziecku szacunek. Bądź z nim szczery(-a) i rozmawiaj otwarcie."
  },
  {
    id: 3,
    number: "03",
    question: "Co zrobić, jeśli moje dziecko powie coś, co mnie zaniepokoi?",
    answer: "Jezeli dziecko powie cos, co w jakikolwiek sposob Cie zaniepokoi, skonsultuj sie z profesjonalista (psychologiem, pedagogiem, koordynatorem Standardow Ochrony Maloletnich w placowce dziecka). Mozesz takze skorzystac z prowadzonego przez Fundacje Dajemy Dzieciom Sile Telefonu dla Rodzicow i Nauczycieli w sprawie Bezpieczenstwa Dzieci: 800 100 100 (800100100.pl). Jestesmy po to, aby wspierac rodzicow i pomagac im radzic sobie w trudnych sytuacjach.\n\nJezeli okaze sie, ze nie ma powodow do obaw, poczujesz ulge, ze to sprawdziles(-as). Pamietaj, dla dziecka to duze wsparcie, ze moze z Toba o wszystkim porozmawiac. Niezaleznie od tego zawsze okazuj dziecku szacunek. Badz z nim szczery(-a) i rozmawiaj otwarcie."
  }
];

export const FAQ = ({
  title = "Często zadawane pytania",
  showDogImage = false,
  defaultOpenId = null
}) => {
  const [openId, setOpenId] = useState(defaultOpenId);

  const toggleQuestion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const handleKeyPress = (event, id) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleQuestion(id);
    }
  };

  return (
    <div className="flex flex-col w-[1080px] items-center gap-12 relative">
      {/* Dog image for children's page */}
      {showDogImage && (
        <div className="relative w-[180px] h-[180px] bg-beige-400 rounded-[20000px] overflow-hidden">
          <img
            className="absolute top-6 left-[38px] w-[142px] h-[156px] object-cover"
            alt="Gadek"
            src="https://c.animaapp.com/mhyuu2kvHVVHVs/img/gadek-1-1.png"
          />
        </div>
      )}

      <div className="relative self-stretch mt-[-1.00px] font-happy-season font-semibold text-fddsraspberry text-8xl text-center tracking-[-1.06px] leading-[105.6px]">
        {title}
      </div>

      <div className="flex flex-col items-start gap-9 relative self-stretch w-full flex-[0_0_auto]">
        {faqData.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div key={item.id} className="flex flex-col items-center justify-center gap-9 relative self-stretch w-full flex-[0_0_auto]">
              <button
                onClick={() => toggleQuestion(item.id)}
                onKeyDown={(e) => handleKeyPress(e, item.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
                className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto] cursor-pointer bg-transparent border-none p-0"
              >
                <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
                  <div className="relative w-20 mt-[-1.00px] font-happy-season font-bold text-fddsraspberry text-4xl text-center tracking-[-0.40px] leading-[54px]">
                    {item.number}
                  </div>

                  <div
                    id={`faq-question-${item.id}`}
                    className={`relative ${item.id === 2 ? 'w-[595px]' : 'w-[473.01px]'} mt-[-1.00px] font-happy-season font-medium text-black text-4xl tracking-[-0.40px] leading-[54px] text-left`}
                  >
                    {item.question}
                  </div>
                </div>

                {/* Toggle Icon */}
                <div className="relative w-[81px] h-[40px] flex items-center justify-center flex-shrink-0">
                  {isOpen ? (
                    // Minus icon
                    <svg width="24" height="6" viewBox="0 0 24 6" fill="none" aria-hidden="true">
                      <path d="M1 3H23" stroke="#E83F4B" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  ) : (
                    // Plus icon
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 5V19M5 12H19" stroke="#E83F4B" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  )}
                </div>
              </button>

              {/* Answer - pokazuje się tylko gdy isOpen */}
              {item.answer && (
                <div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${item.id}`}
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? '1000px' : '0',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <p className="relative w-[891.26px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9 whitespace-pre-line">
                    {item.answer}
                  </p>
                </div>
              )}

              <img
                className="relative w-[1076.71px] h-px mb-[-0.50px] object-cover"
                alt="Line"
                src="https://c.animaapp.com/kiXkeqSn/img/line-1-1.svg"
              />
            </div>
          );
        })}
      </div>

      <Link to="/faq" className="flex w-[280px] items-center justify-center gap-2.5 px-6 py-5 relative flex-[0_0_auto] bg-fddsraspberry rounded-[48px] hover:bg-white border-2 border-transparent hover:border-fddsraspberry transition-colors cursor-pointer group">
        <div className="relative w-fit mt-[-1.00px] font-lato font-bold text-white group-hover:text-fddsraspberry text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
          Przejdź do FAQ
        </div>
      </Link>
    </div>
  );
};
