import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../../../../hooks/useScrollReveal";

const faqData = [
  {
    id: 1,
    number: "01",
    question: "Jak rozmawiać z dzieckiem?",
    answer: "Przemoc seksualna wobec dzieci jest powszechnym zjawiskiem - doświadczyło jej co czwarte dziecko w Polsce. Zdecydowana większość dzieci zostało skrzywdzonych przez znaną im osobę. Zazwyczaj nikomu o tym nie powiedziały...\n\nRozmowy na temat zagrożenia wykorzystywaniem seksualnym mogą być trudne zarówno dla rodziców i opiekunów, jak i dla dzieci. Dorośli nie chcą przestraszyć ani zdenerwować dzieci. Czasami uważają, że jeszcze za wcześnie na poruszanie z dzieckiem takich zagadnień. Dzieci zaś nie zawsze rozumieją wyjaśnienia lub boją się takich tematów.\n\nDlatego właśnie proponujemy GADKI, czyli proste rozmowy na ważne tematy, przeznaczone dla dzieci między 4 a 12 rokiem życia.\nTo bardzo ważne! Zachęcając dziecko do rozmowy, pokazując, że może z Tobą porozmawiać na każdy temat, a także ucząc je wyrażania swoich uczuć i emocji czy mówienia \"nie\" - uczysz dziecko, jak może być bardziej bezpieczne."
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

export const Div = ({ onHeightChange }) => {
  const [openId, setOpenId] = useState(null); // Wszystkie pytania zamknięte domyślnie
  const { ref: scrollRevealRef, className } = useScrollReveal();
  const containerRef = React.useRef(null);

  const toggleQuestion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const handleKeyPress = (event, id) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleQuestion(id);
    }
  };

  // Measure and report FAQ height changes using ResizeObserver
  React.useEffect(() => {
    if (!containerRef.current || !onHeightChange) return;

    const baseHeight = 790; // Height when all questions closed (actual rendered height)

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const height = entry.contentRect.height;
        const extraHeight = Math.max(0, height - baseHeight);
        onHeightChange(extraHeight);
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [onHeightChange]);

  // Combined ref callback
  const setRefs = React.useCallback((node) => {
    scrollRevealRef.current = node;
    containerRef.current = node;
  }, [scrollRevealRef]);

  return (
    <div
      ref={setRefs}
      className={`flex flex-col w-[1080px] items-center gap-12 relative mx-auto ${className}`}
    >
      <div className="relative self-stretch mt-[-1.00px] font-happy-season font-semibold text-fddsraspberry text-8xl text-center tracking-[-1.06px] leading-[105.6px]">
        Często zadawane pytania
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
                  <p className="relative w-[891.26px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
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

      <Link to="/faq" className="flex w-[280px] items-center justify-center gap-2.5 px-6 py-5 mb-12 relative flex-[0_0_auto] bg-fddsraspberry rounded-[48px] hover:bg-white border-2 border-transparent hover:border-fddsraspberry transition-colors cursor-pointer group">
        <div className="relative w-fit mt-[-1.00px] font-lato font-bold text-white group-hover:text-fddsraspberry text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
          Przejdź do FAQ
        </div>
      </Link>
    </div>
  );
};
