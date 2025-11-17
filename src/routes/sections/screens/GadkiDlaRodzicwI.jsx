import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { FAQ } from "../../../components/FAQ/FAQ";
import { useScrollReveal } from "../../../hooks/useScrollReveal";
import { FrameWrapper } from "../../../screens/GadkiStronaGwna/sections/FrameWrapper";

export const GadkiDlaRodzicwI = () => {
  // State to track FAQ section height for dynamic positioning
  const [faqHeight, setFaqHeight] = useState(0);
  const faqRef = useRef(null);

  const titleSection = useScrollReveal();
  const videoSection = useScrollReveal();
  const materialyIntro = useScrollReveal();
  const materialyTitle = useScrollReveal();

  // Material items
  const material01 = useScrollReveal();
  const material01Content = useScrollReveal();
  const material01Download = useScrollReveal();

  const material02 = useScrollReveal();
  const material02Content = useScrollReveal();
  const material02Download = useScrollReveal();

  const material03 = useScrollReveal();
  const material03Content = useScrollReveal();
  const material03Download = useScrollReveal();

  const material04 = useScrollReveal();
  const material04Download = useScrollReveal();

  const material05 = useScrollReveal();
  const material05Download = useScrollReveal();

  const faqSection = useScrollReveal();
  const pozostaleMaterialy = useScrollReveal();
  const remainingCards = useScrollReveal();

  useEffect(() => {
    document.title = "Dla rodziców i opiekunów - GADKI";
  }, []);

  // Measure FAQ height and update when it changes
  useEffect(() => {
    const measureFaqHeight = () => {
      if (faqRef.current) {
        const height = faqRef.current.offsetHeight;
        setFaqHeight(height);
      }
    };

    // Initial measurement
    measureFaqHeight();

    // Use ResizeObserver to track height changes when FAQ expands/collapses
    const resizeObserver = new ResizeObserver(() => {
      // Use requestAnimationFrame to measure after layout is complete
      requestAnimationFrame(measureFaqHeight);
    });

    // Use MutationObserver to detect DOM changes (FAQ answers appearing/disappearing)
    const mutationObserver = new MutationObserver(() => {
      // Delay measurement to allow CSS transitions to complete
      setTimeout(measureFaqHeight, 350);
    });

    if (faqRef.current) {
      resizeObserver.observe(faqRef.current);
      mutationObserver.observe(faqRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class']
      });
    }

    // Also poll every 100ms during first 5 seconds to catch transition changes
    const pollInterval = setInterval(measureFaqHeight, 100);
    setTimeout(() => clearInterval(pollInterval), 5000);

    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      clearInterval(pollInterval);
    };
  }, []);

  // Calculate dynamic positions based on FAQ height
  const faqTopPosition = 4450;
  const spacingAfterFaq = 200;
  const newsletterPosition = faqHeight > 0 ? faqTopPosition + faqHeight + spacingAfterFaq : 5600;

  // Maintain consistent offsets for all sections below newsletter
  const pozostaleMaterialyPosition = newsletterPosition + 586;
  const cardsPosition = newsletterPosition + 856;
  const helpSectionPosition = newsletterPosition + 1709;

  // Calculate total page height dynamically (help section + footer wrapper height + footer)
  const pageHeight = helpSectionPosition + 1098 + 500; // Help section container + footer height + buffer

  return (
    <div className="bg-beige-200 overflow-hidden w-full min-w-[1728px] relative" style={{ height: `${pageHeight}px` }}>
      {/* BACKGROUND LAYER - Full-width backgrounds */}
      <div className="absolute inset-0 w-screen pointer-events-none">
        {/* Top Union SVG - Full width */}
        <img
          className="absolute w-screen h-[778px] top-0 left-0 object-cover"
          alt="Union"
          src="https://c.animaapp.com/mhyuvh6ynrLTWn/img/union-3.svg"
        />


        {/* Bottom Help Section Union SVG - Full width, positioned to start at middle of dog and extend to page bottom */}
        <img
          className="absolute left-0 w-screen object-cover"
          style={{
            top: `${helpSectionPosition + 125}px`,
            height: `${pageHeight - (helpSectionPosition + 125)}px`
          }}
          alt="Union"
          src="https://c.animaapp.com/mhyuvh6ynrLTWn/img/union-3.svg"
        />
      </div>

      {/* CONTENT LAYER - Centered 1728px container */}
      <div className="max-w-[1728px] mx-auto relative h-full">
      <Header />

      <img
        className="absolute w-[10.11%] h-0 top-0 left-[3.95%]"
        alt="Group"
        src="https://c.animaapp.com/mhyuvh6ynrLTWn/img/group.png"
      />

      <Link
        to="/"
        className="absolute top-[77px] left-[calc(50.00%_-_73px)] w-[146px] h-[67px] z-[60] cursor-pointer hover:opacity-80 transition-opacity"
        aria-label="Strona główna - GADKI"
      >
        <img
          className="w-full h-full"
          alt="GADKI"
          src="https://c.animaapp.com/mhyuvh6ynrLTWn/img/frame-12.svg"
        />
      </Link>

      <div ref={titleSection.ref} className={`absolute top-[329px] left-[474px] w-[781px] font-happy-season font-bold text-white text-8xl text-center tracking-[-1.06px] leading-[105.6px] ${titleSection.className}`}>
        Dla rodziców i opiekunów
      </div>

      <div className="absolute top-[99px] left-96 w-[180px] h-[180px] flex bg-beige-400 rounded-[20000px] overflow-hidden animate-gentle-pulse">
        <img
          className="mt-[17px] ml-0.5 w-[177px] h-[163px] object-cover"
          alt="Mama"
          src="https://c.animaapp.com/mhyuvh6ynrLTWn/img/mama-2x-1.png"
        />
      </div>

      <div className="absolute top-[496px] left-[1182px] w-[180px] h-[180px] flex bg-beige-400 rounded-[20000px] overflow-hidden animate-gentle-pulse">
        <img
          className="mt-5 ml-[3px] w-[177px] h-40 object-cover"
          alt="Tata"
          src="https://c.animaapp.com/mhyuvh6ynrLTWn/img/tata-2x-1.png"
        />
      </div>

      <div className="inline-flex absolute top-[476px] left-[calc(50.00%_-_208px)] bg-white items-center justify-center gap-2.5 px-6 py-5 rounded-[48px]">
        <p className="relative w-fit mt-[-1.00px] font-lato font-bold text-fddsraspberry text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
          Zaloguj się do Strefy Opiekuna
        </p>
      </div>

      <div ref={videoSection.ref} className={`absolute top-[644px] left-[274px] w-[1180px] h-[622px] ${videoSection.className}`}>
        <iframe
          className="w-full h-full rounded-xl"
          src="https://www.youtube.com/embed/PW-n6UtOe0E"
          title="GADKI - Program dla rodziców i opiekunów"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      <p ref={materialyIntro.ref} className={`absolute top-[1390px] left-[274px] w-[1180px] font-lato font-medium text-black text-[32px] tracking-[-0.35px] leading-[44.8px] ${materialyIntro.className}`}>
        Przygotowaliśmy dla Ciebie materiały, które pomogą Ci w rozmowach z dzieckiem
        o bezpieczeństwie. Znajdziesz tutaj porady, scenariusze zajęć oraz narzędzia wspierające
        bezpieczny rozwój Twojego dziecka.
      </p>

      <div ref={materialyTitle.ref} className={`absolute top-[1590px] left-[276px] w-[1172px] font-happy-season font-semibold text-fddsraspberry text-8xl text-center tracking-[-1.06px] leading-[105.6px] ${materialyTitle.className}`}>
        Materiały
      </div>

      {/* Material 01 - Broszura */}
      <div ref={material01.ref} className={`flex w-[1180px] items-center gap-[251px] absolute top-[1808px] left-[274px] ${material01.className}`}>
        <div className="flex w-[878px] items-center gap-5 relative">
          <div className="relative w-20 mt-[-1.00px] font-happy-season font-bold text-fddsraspberry text-4xl text-center tracking-[-0.40px] leading-[54px]">
            01
          </div>

          <div className="relative w-[473.01px] mt-[-1.00px] font-happy-season font-medium text-black text-4xl tracking-[-0.40px] leading-[54px]">
            Broszura dla rodziców
          </div>
        </div>
      </div>

      <div ref={material01Content.ref} className={`inline-flex items-start justify-center gap-[265px] absolute top-[1910px] left-[376px] ${material01Content.className}`}>
        <div className="inline-flex flex-col items-start gap-12 relative flex-[0_0_auto]">
          <p className="relative w-[480px] mt-[-1.00px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
            Kompleksowy przewodnik dla rodziców i opiekunów zawierający
            informacje o bezpiecznych relacjach z dziećmi, zasadach ochrony
            przed krzywdzeniem oraz wskazówki jak rozmawiać z dzieckiem.
          </p>
        </div>
      </div>

      <div ref={material01Download.ref} className={`inline-flex items-center gap-[220px] absolute top-[2250px] left-[299px] ${material01Download.className}`}>
        <div className="inline-flex items-center gap-[39px] relative flex-[0_0_auto]">
          <img
            className="relative w-9 h-9"
            alt="File save"
            src="https://c.animaapp.com/mhyuvh6ynrLTWn/img/file-save-24dp-1f1f1f-fill0-wght300-grad0-opsz24-1.svg"
          />

          <div className="relative w-[480px] mt-[-1.00px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
            Broszura w formacie .pdf
          </div>
        </div>

        <div className="flex w-[280px] items-center justify-center gap-2.5 px-6 py-5 relative bg-fddsraspberry rounded-[48px] hover:bg-white border-2 border-transparent hover:border-fddsraspberry transition-colors cursor-pointer group">
          <div className="relative w-fit mt-[-1.00px] font-lato font-bold text-white group-hover:text-fddsraspberry text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
            Pobierz
          </div>
        </div>
      </div>

      <img
        className="absolute top-[2373px] left-[276px] w-[1178px] h-px object-cover"
        alt="Line"
        src="https://c.animaapp.com/mhyuvh6ynrLTWn/img/line-6.svg"
      />

      {/* Material 02 - Ulotka */}
      <div ref={material02.ref} className={`flex w-[1180px] items-center gap-[251px] absolute top-[2421px] left-[274px] ${material02.className}`}>
        <div className="flex w-[878px] items-center gap-5 relative">
          <div className="relative w-20 mt-[-1.00px] font-happy-season font-bold text-fddsraspberry text-4xl text-center tracking-[-0.40px] leading-[54px]">
            02
          </div>

          <div className="relative w-[473.01px] mt-[-1.00px] font-happy-season font-medium text-black text-4xl tracking-[-0.40px] leading-[54px]">
            Ulotka informacyjna
          </div>
        </div>
      </div>

      <div ref={material02Content.ref} className={`inline-flex items-start justify-center gap-[265px] absolute top-[2523px] left-[376px] ${material02Content.className}`}>
        <div className="inline-flex flex-col items-start gap-12 relative flex-[0_0_auto]">
          <p className="relative w-[480px] mt-[-1.00px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
            Zwięzła ulotka z najważniejszymi informacjami o programie "Gadki z psem"
            oraz numerami telefonów zaufania dla rodziców i dzieci.
          </p>
        </div>
      </div>

      <div ref={material02Download.ref} className={`inline-flex items-center gap-[220px] absolute top-[2863px] left-[299px] ${material02Download.className}`}>
        <div className="inline-flex items-center gap-[39px] relative flex-[0_0_auto]">
          <img
            className="relative w-9 h-9"
            alt="File save"
            src="https://c.animaapp.com/mhyuvh6ynrLTWn/img/file-save-24dp-1f1f1f-fill0-wght300-grad0-opsz24-1-4.svg"
          />

          <div className="relative w-[480px] mt-[-1.00px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
            Ulotka w formacie .pdf
          </div>
        </div>

        <div className="flex w-[280px] items-center justify-center gap-2.5 px-6 py-5 relative bg-fddsraspberry rounded-[48px] hover:bg-white border-2 border-transparent hover:border-fddsraspberry transition-colors cursor-pointer group">
          <div className="relative w-fit mt-[-1.00px] font-lato font-bold text-white group-hover:text-fddsraspberry text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
            Pobierz
          </div>
        </div>
      </div>

      <img
        className="absolute top-[2986px] left-[276px] w-[1178px] h-px object-cover"
        alt="Line"
        src="https://c.animaapp.com/mhyuvh6ynrLTWn/img/line-6.svg"
      />

      {/* Material 03 - Plan zajęć domowych */}
      <div ref={material03.ref} className={`flex w-[1180px] items-center gap-[251px] absolute top-[3034px] left-[274px] ${material03.className}`}>
        <div className="flex w-[878px] items-center gap-5 relative">
          <div className="relative w-20 mt-[-1.00px] font-happy-season font-bold text-fddsraspberry text-4xl text-center tracking-[-0.40px] leading-[54px]">
            03
          </div>

          <div className="relative w-[473.01px] mt-[-1.00px] font-happy-season font-medium text-black text-4xl tracking-[-0.40px] leading-[54px]">
            Plan zajęć domowych
          </div>
        </div>
      </div>

      <div ref={material03Content.ref} className={`inline-flex items-start justify-center gap-[265px] absolute top-[3136px] left-[376px] ${material03Content.className}`}>
        <div className="inline-flex flex-col items-start gap-12 relative flex-[0_0_auto]">
          <p className="relative w-[480px] mt-[-1.00px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
            Gotowy scenariusz zajęć, które możesz przeprowadzić z dzieckiem w domu,
            ucząc je podstawowych zasad bezpieczeństwa przez zabawę.
          </p>
        </div>
      </div>

      <div ref={material03Download.ref} className={`inline-flex items-center gap-[220px] absolute top-[3476px] left-[299px] ${material03Download.className}`}>
        <div className="inline-flex items-center gap-[39px] relative flex-[0_0_auto]">
          <img
            className="relative w-9 h-9"
            alt="File save"
            src="https://c.animaapp.com/mhyuvh6ynrLTWn/img/file-save-24dp-1f1f1f-fill0-wght300-grad0-opsz24-1.svg"
          />

          <p className="relative w-[480px] mt-[-1.00px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
            Plan zajęć domowych w formacie .pdf
          </p>
        </div>

        <div className="flex w-[280px] items-center justify-center gap-2.5 px-6 py-5 relative bg-fddsraspberry rounded-[48px] hover:bg-white border-2 border-transparent hover:border-fddsraspberry transition-colors cursor-pointer group">
          <div className="relative w-fit mt-[-1.00px] font-lato font-bold text-white group-hover:text-fddsraspberry text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
            Pobierz
          </div>
        </div>
      </div>

      <img
        className="absolute top-[3599px] left-[276px] w-[1178px] h-px object-cover"
        alt="Line"
        src="https://c.animaapp.com/mhyuvh6ynrLTWn/img/line-6.svg"
      />

      {/* Material 04 - Film instruktażowy 1 */}
      <div ref={material04.ref} className={`flex w-[1180px] items-center gap-[251px] absolute top-[3647px] left-[274px] ${material04.className}`}>
        <div className="flex w-[878px] items-center gap-5 relative">
          <div className="relative w-20 mt-[-1.00px] font-happy-season font-bold text-fddsraspberry text-4xl text-center tracking-[-0.40px] leading-[54px]">
            04
          </div>

          <div className="relative w-[473.01px] mt-[-1.00px] font-happy-season font-medium text-black text-4xl tracking-[-0.40px] leading-[54px]">
            Filmy instruktażowe
          </div>
        </div>
      </div>

      <div ref={material04Download.ref} className={`inline-flex items-center gap-[220px] absolute top-[3749px] left-[301px] ${material04Download.className}`}>
        <div className="inline-flex items-center gap-[39px] relative flex-[0_0_auto]">
          <img
            className="relative w-9 h-9"
            alt="File save"
            src="https://c.animaapp.com/mhyuvh6ynrLTWn/img/file-save-24dp-1f1f1f-fill0-wght300-grad0-opsz24-1.svg"
          />

          <div className="relative w-[480px] mt-[-1.00px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
            Film_instruktażowy_1
          </div>
        </div>

        <div className="flex w-[280px] relative bg-fddsraspberry items-center justify-center gap-2.5 px-6 py-5 rounded-[48px]">
          <div className="relative w-fit mt-[-1.00px] font-lato font-bold text-white text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
            Odtwórz
          </div>
        </div>
      </div>

      <div className="inline-flex items-center gap-[220px] absolute top-[3846px] left-[301px]">
        <div className="inline-flex items-center gap-[39px] relative flex-[0_0_auto]">
          <img
            className="relative w-9 h-9"
            alt="File save"
            src="https://c.animaapp.com/mhyuvh6ynrLTWn/img/file-save-24dp-1f1f1f-fill0-wght300-grad0-opsz24-1-4.svg"
          />

          <div className="relative w-[480px] mt-[-1.00px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
            Film_instruktażowy_2
          </div>
        </div>

        <div className="flex w-[280px] relative bg-fddsraspberry items-center justify-center gap-2.5 px-6 py-5 rounded-[48px]">
          <div className="relative w-fit mt-[-1.00px] font-lato font-bold text-white text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
            Odtwórz
          </div>
        </div>
      </div>

      <img
        className="absolute top-[3937px] left-[276px] w-[1178px] h-px object-cover"
        alt="Line"
        src="https://c.animaapp.com/mhyuvh6ynrLTWn/img/line-6.svg"
      />

      {/* Material 05 - Plakat */}
      <div ref={material05.ref} className={`flex w-[1180px] items-center gap-[251px] absolute top-[3985px] left-[274px] ${material05.className}`}>
        <div className="flex w-[878px] items-center gap-5 relative">
          <div className="relative w-20 mt-[-1.00px] font-happy-season font-bold text-fddsraspberry text-4xl text-center tracking-[-0.40px] leading-[54px]">
            05
          </div>

          <div className="relative w-[473.01px] mt-[-1.00px] font-happy-season font-medium text-black text-4xl tracking-[-0.40px] leading-[54px]">
            Plakat
          </div>
        </div>
      </div>

      <div ref={material05Download.ref} className={`inline-flex items-center gap-[220px] absolute top-[4087px] left-[299px] ${material05Download.className}`}>
        <div className="inline-flex items-center gap-[39px] relative flex-[0_0_auto]">
          <img
            className="relative w-9 h-9"
            alt="File save"
            src="https://c.animaapp.com/mhyuvh6ynrLTWn/img/file-save-24dp-1f1f1f-fill0-wght300-grad0-opsz24-1.svg"
          />

          <p className="relative w-[480px] mt-[-1.00px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
            Plakat w formacie .pdf
          </p>
        </div>

        <div className="flex w-[280px] items-center justify-center gap-2.5 px-6 py-5 relative bg-fddsraspberry rounded-[48px] hover:bg-white border-2 border-transparent hover:border-fddsraspberry transition-colors cursor-pointer group">
          <div className="relative w-fit mt-[-1.00px] font-lato font-bold text-white group-hover:text-fddsraspberry text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
            Pobierz
          </div>
        </div>
      </div>

      <img
        className="absolute top-[4210px] left-[276px] w-[1178px] h-px object-cover"
        alt="Line"
        src="https://c.animaapp.com/mhyuvh6ynrLTWn/img/line-6.svg"
      />

      {/* FAQ Section */}
      <div ref={(el) => {
        faqRef.current = el;
        faqSection.ref.current = el;
      }} className={`absolute top-[4450px] left-[324px] ${faqSection.className}`}>
        <FAQ
          title="Często zadawane pytania"
          showDogImage={false}
          defaultOpenId={1}
        />
      </div>

      {/* Newsletter Section */}
      <div className="absolute left-[calc(50.00%_-_590px)] w-[1184px] h-[486px]" style={{ top: `${newsletterPosition}px` }}>
        <div className="absolute top-[186px] left-0 w-[1180px] h-[300px] bg-[#e83f4b] rounded-[24px]" />

        <img
          className="absolute top-0 left-[901px] w-[179px] h-[186px] object-cover"
          alt="Gadek"
          src="https://c.animaapp.com/mhyvtq61XzwmaX/img/gadek-2.png"
        />

        <p className="absolute top-[225px] left-[100px] font-happy-season font-bold text-white text-5xl tracking-[-0.53px] leading-[52.8px] whitespace-nowrap">
          Zapisz się do naszego newslettera
        </p>

        <div className="absolute top-[409px] left-[100px] w-5 h-5 bg-white rounded-[4px]" />

        <p className="absolute top-[405px] left-[132px] font-lato font-normal text-white text-base tracking-[-0.176px] leading-6">
          <span>
            Zgadzam się na otrzymywanie newslettera Fundacji Dajemy Dzieciom Siłę
            <br />
            oraz akceptuję{" "}
          </span>

          <span className="font-semibold underline">
            Regulamin
          </span>

          <span> i</span>

          <span className="font-semibold">
            {" "}
          </span>

          <span className="font-semibold underline">
            Politykę Prywatności
          </span>
          .
        </p>

        <div className="inline-flex items-center gap-[60px] absolute top-[301px] left-[100px]">
          <div className="inline-flex items-center gap-10 relative flex-[0_0_auto]">
            <div className="flex w-[300px] items-center justify-center gap-2.5 px-[60px] py-[25px] relative bg-white rounded-[4px]">
              <p className="relative w-fit mt-[-1.00px] font-lato font-normal text-black text-2xl tracking-[-0.264px] leading-[1.1] whitespace-nowrap">
                Imię
              </p>
            </div>

            <div className="inline-flex items-center justify-center gap-2.5 px-[60px] py-[25px] relative flex-[0_0_auto] bg-white rounded-[4px]">
              <p className="relative w-fit mt-[-1.00px] font-lato font-normal text-black text-2xl tracking-[-0.264px] leading-[1.1] whitespace-nowrap">
                Twój adres e-mail
              </p>
            </div>
          </div>

          <div className="flex w-[280px] items-center justify-center gap-2.5 px-6 py-5 relative rounded-[48px] border-2 border-solid border-white hover:bg-white transition-colors cursor-pointer group">
            <p className="relative w-fit mt-[-2.00px] font-lato font-bold text-white group-hover:text-fddsraspberry text-2xl tracking-[-0.264px] leading-[1.5] whitespace-nowrap">
              Zapisz się
            </p>
          </div>
        </div>
      </div>

      {/* Pozostałe materiały */}
      <div ref={pozostaleMaterialy.ref} className={`absolute left-[276px] w-[1172px] font-happy-season font-semibold text-fddsraspberry text-8xl text-center tracking-[-1.06px] leading-[105.6px] ${pozostaleMaterialy.className}`} style={{ top: `${pozostaleMaterialyPosition}px` }}>
        Pozostałe
        <br />
        materiały
      </div>

      <div ref={remainingCards.ref} className={`inline-flex items-center gap-5 absolute left-[474px] ${remainingCards.className}`} style={{ top: `${cardsPosition}px` }}>
        <Link to="/dla-dzieci" className="relative w-[380px] h-[480px] bg-white rounded-xl hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
          <div className="absolute top-10 left-[106px] w-[168px] font-happy-season font-semibold text-fddsraspberry text-[40px] text-center tracking-[-0.44px] leading-[44px]">
            Dla dzieci
          </div>

          <div className="absolute top-[140px] left-[52px] w-[277px] h-[340px] flex gap-[11.9px] items-center">
            <img
              className="w-[165px] h-[180px] object-cover object-top"
              alt="Dziewczyna"
              src="https://c.animaapp.com/mhyuu2kvHVVHVs/img/dziewczyna-2x.png"
            />

            <img
              className="w-[180px] h-[180px] object-cover object-top"
              alt="Chopak"
              src="https://c.animaapp.com/mhyuu2kvHVVHVs/img/chopak-2x.png"
            />
          </div>
        </Link>

        <Link to="/dla-edukatorow" className="relative w-[380px] h-[480px] bg-white rounded-xl hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
          <div className="absolute top-[41px] left-[93px] w-[194px] font-happy-season font-semibold text-fddsraspberry text-[40px] text-center tracking-[-0.44px] leading-[44px]">
            Dla edukatorów
            <br />i nauczycieli
          </div>

          <img
            className="absolute top-[120px] left-[35px] w-[135px] h-[360px] object-cover object-top"
            alt="Edukatorka obszar"
            src="https://c.animaapp.com/mhyuu2kvHVVHVs/img/edukatorka-obszar-roboczy-1-1.png"
          />

          <img
            className="absolute top-[120px] left-[155px] w-48 h-[360px] object-cover object-top"
            alt="Edukator obszar"
            src="https://c.animaapp.com/mhyuu2kvHVVHVs/img/edukator-obszar-roboczy-1-1.png"
          />
        </Link>
      </div>

      {/* Footer Section Container - matching home page structure */}
      <div className="absolute left-0 w-full max-w-[1728px] mx-auto" style={{ top: `${helpSectionPosition}px`, height: '1098px' }}>
        {/* Piesek - dog image */}
        <img
          className="absolute w-[231px] h-[251px]"
          style={{ top: '0px', left: '748px' }}
          alt="Piesek"
          src="https://c.animaapp.com/kiXkeqSn/img/piesek2-01-1@2x.png"
        />

        {/* FrameWrapper - help section with phone numbers */}
        <div className="absolute w-full" style={{ top: '185px' }}>
          <FrameWrapper />
        </div>

        {/* Decorative image next to footer */}
        <img
          className="absolute left-[1480px] w-[248px] h-[419px] animate-gentle-pulse"
          style={{ top: '274px' }}
          alt="Group"
          src="https://c.animaapp.com/kiXkeqSn/img/group-11@2x.png"
        />
      </div>

      {/* Footer at the bottom - positioned 982px after help section start (overlaps FrameWrapper by 116px) */}
      <div className="absolute left-0 w-full" style={{ top: `${helpSectionPosition + 982}px` }}>
        <Footer />
      </div>
      </div>
    </div>
  );
};
