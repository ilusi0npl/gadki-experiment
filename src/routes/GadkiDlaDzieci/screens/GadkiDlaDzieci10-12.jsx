import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { FAQ } from "../../../components/FAQ/FAQ";
import { useScrollReveal } from "../../../hooks/useScrollReveal";

export const GadkiDlaDzieci1012 = () => {
  const dlaDzieciTitle = useScrollReveal();
  const ageTabs = useScrollReveal();
  const videoFrame = useScrollReveal();
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
  const material04Content = useScrollReveal();

  const material05 = useScrollReveal();
  const material05Content = useScrollReveal();
  const material05Download = useScrollReveal();

  const faqSection = useScrollReveal();
  const pozostaleMaterialy = useScrollReveal();
  const remainingCards = useScrollReveal();
  const helpSection1 = useScrollReveal();
  const helpSection2 = useScrollReveal();

  useEffect(() => {
    document.title = "Dla dzieci 10-12 lat - GADKI";
  }, []);

  return (
    <div className="bg-beige-200 overflow-hidden w-full min-w-[1728px] h-[8970px] relative">
      {/* BACKGROUND LAYER - Full-width backgrounds */}
      <div className="absolute inset-0 w-screen pointer-events-none">
        {/* Top Union SVG - Full width */}
        <img
          className="absolute w-screen h-[778px] top-0 left-0 object-cover"
          alt="Union"
          src="https://c.animaapp.com/mhyuu2kvHVVHVs/img/union-1.svg"
        />

        {/* Newsletter Union SVG - Full width */}
        <img
          className="absolute top-[7490px] left-0 w-screen h-[723px] object-cover"
          alt="Union"
          src="https://c.animaapp.com/mhyuu2kvHVVHVs/img/union-2.svg"
        />

        {/* Bottom Help Section Union SVG - Full width */}
        <img
          className="absolute top-[7886px] left-0 w-screen h-[723px] object-cover"
          alt="Union"
          src="https://c.animaapp.com/mhyuu2kvHVVHVs/img/union-3.svg"
        />
      </div>

      {/* CONTENT LAYER - Centered 1728px container */}
      <div className="max-w-[1728px] mx-auto relative h-full">
      <Header />

      <img
        className="absolute w-[10.11%] h-0 top-0 left-[3.95%]"
        alt="Group"
        src="https://c.animaapp.com/mhyuu2kvHVVHVs/img/group.png"
      />

      <div className="absolute top-[7734px] left-0 w-[1728px] h-[875px]">

        <div ref={helpSection1.ref} className={`flex flex-col w-[380px] h-[582px] items-start gap-12 absolute top-[137px] left-[374px] ${helpSection1.className}`}>
          <p className="relative self-stretch mt-[-1.00px] font-happy-season font-semibold text-white text-4xl tracking-[-0.40px] leading-[54px]">
            Jeżeli jesteś dzieckiem i trudno Ci porozmawiać z osobą dorosłą
            z Twojego otoczenia...
          </p>

          <p className="relative self-stretch font-lato font-normal text-white text-xl tracking-[-0.22px] leading-[30px]">
            <span className="text-[#ffffff] tracking-[-0.04px]">
              Telefon Zaufania dla Dzieci i Młodzieży –116 111 może Ci pomóc.
              Prowadzimy bezpłatną i anonimową pomoc. Zadzwoń do nas
              pod numer 116 111 lub odwiedź naszą stronę internetową{" "}
            </span>

            <a
              href="https://116111.pl/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-[#ffffff] tracking-[-0.04px] underline">
                116111.pl
              </span>
            </a>

            <span className="text-[#ffffff] tracking-[-0.04px]">.</span>
          </p>

          <div className="flex flex-col w-[281.38px] items-start gap-6 relative flex-[0_0_auto]">
            <a href="tel:116111" className="flex items-center justify-center gap-2.5 px-6 py-5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[48px] hover:bg-fddsraspberry transition-colors cursor-pointer group">
              <div className="relative w-fit mt-[-1.00px] font-lato font-bold text-fddsraspberry text-xl tracking-[-0.22px] leading-[30px] whitespace-nowrap group-hover:text-white">
                Zadzwoń
              </div>
            </a>

            <a href="https://116111.pl" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2.5 px-6 py-5 relative self-stretch w-full flex-[0_0_auto] rounded-[48px] border-2 border-solid border-[#ffffff] hover:bg-white hover:border-fddsraspberry transition-colors cursor-pointer group">
              <div className="relative w-fit mt-[-2.00px] font-lato font-bold text-white group-hover:text-fddsraspberry text-xl tracking-[-0.22px] leading-[30px] whitespace-nowrap">
                Odwiedź stronę
              </div>
            </a>
          </div>
        </div>

        <div ref={helpSection2.ref} className={`flex flex-col w-[380px] h-[582px] items-start gap-12 absolute top-[137px] left-[974px] ${helpSection2.className}`}>
          <p className="relative self-stretch mt-[-1.00px] font-happy-season font-semibold text-white text-4xl tracking-[-0.40px] leading-[54px]">
            Jesteś rodzicem lub nauczycielem i chcesz porozmawiać
            o bezpieczeństwie dziecka?
          </p>

          <p className="relative self-stretch font-lato font-normal text-white text-xl tracking-[-0.22px] leading-[30px]">
            <span className="tracking-[-0.04px]">
              Możesz skontaktować się z nami telefonicznie pod numerem Telefonu
              dla Rodziców i Nauczycieli w sprawie Bezpieczeństwa Dzieci:
              800 100 100 lub poprzez stronę{" "}
            </span>

            <a
              href="https://800100100.pl/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="tracking-[-0.04px] underline">800100100.pl</span>
            </a>

            <span className="tracking-[-0.04px]">.</span>
          </p>

          <div className="flex flex-col w-[281.38px] items-start gap-6 relative flex-[0_0_auto]">
            <a href="tel:800100100" className="flex items-center justify-center gap-2.5 px-6 py-5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[48px] hover:bg-fddsraspberry transition-colors cursor-pointer group">
              <div className="relative w-fit mt-[-1.00px] font-lato font-bold text-fddsraspberry text-xl tracking-[-0.22px] leading-[30px] whitespace-nowrap group-hover:text-white">
                Zadzwoń
              </div>
            </a>

            <a href="https://800100100.pl" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2.5 px-6 py-5 relative self-stretch w-full flex-[0_0_auto] rounded-[48px] border-2 border-solid border-[#ffffff] hover:bg-white hover:border-fddsraspberry transition-colors cursor-pointer group">
              <div className="relative w-fit mt-[-2.00px] font-lato font-bold text-white group-hover:text-fddsraspberry text-xl tracking-[-0.22px] leading-[30px] whitespace-nowrap">
                Odwiedź stronę
              </div>
            </a>
          </div>
        </div>

        <img
          className="absolute top-[201px] left-0 w-[232px] h-[379px]"
          alt="Vector"
          src="https://c.animaapp.com/mhyuu2kvHVVHVs/img/vector-12.png"
        />

        <img
          className="absolute top-[-34px] left-[1412px] w-[281px] h-[206px]"
          alt="Union"
          src="https://c.animaapp.com/mhyuu2kvHVVHVs/img/union.png"
        />
      </div>

      <img
        className="absolute w-[8.22%] h-0 top-[6.18%] left-[28.53%]"
        alt="Vector"
        src="https://c.animaapp.com/mhyuu2kvHVVHVs/img/vector.svg"
      />

      <Link
        to="/"
        className="absolute top-[77px] left-[calc(50.00%_-_73px)] w-[146px] h-[67px] z-[60] cursor-pointer hover:opacity-80 transition-opacity"
        aria-label="Strona główna - GADKI"
      >
        <img
          className="w-full h-full"
          alt="GADKI"
          src="https://c.animaapp.com/mhyuu2kvHVVHVs/img/frame-12.svg"
        />
      </Link>

      <div ref={dlaDzieciTitle.ref} className={`absolute top-[329px] left-[474px] w-[781px] font-happy-season font-bold text-white text-8xl text-center tracking-[-1.06px] leading-[105.6px] ${dlaDzieciTitle.className}`}>
        Dla dzieci
      </div>

      <div ref={ageTabs.ref} className={`inline-flex items-center gap-[120px] absolute top-[486px] left-[calc(50.00%_-_390px)] ${ageTabs.className}`}>
        <Link to="/dla-dzieci/4-6" className="relative w-[180px] mt-[-1.00px] opacity-60 font-happy-season font-bold text-white text-[64px] text-center tracking-[-0.70px] leading-[70.4px] hover:opacity-80 transition-opacity">
          4–6 lat
        </Link>

        <Link to="/dla-dzieci/7-9" className="relative w-[180px] mt-[-1.00px] opacity-60 font-happy-season font-bold text-white text-[64px] text-center tracking-[-0.70px] leading-[70.4px] hover:opacity-80 transition-opacity">
          7–9 lat
        </Link>

        <Link to="/dla-dzieci/10-12" className="relative w-fit mt-[-1.00px] font-happy-season font-bold text-white text-[64px] text-center tracking-[-0.70px] leading-[70.4px] whitespace-nowrap hover:opacity-80 transition-opacity">
          10–12 lat
        </Link>
      </div>

      <div ref={materialyTitle.ref} className={`absolute top-[1601px] left-[474px] w-[781px] font-happy-season font-bold text-fddsraspberry text-8xl text-center tracking-[-1.06px] leading-[105.6px] ${materialyTitle.className}`}>
        Materiały
      </div>

      <div ref={videoFrame.ref} className={`absolute top-[644px] left-[274px] w-[1180px] h-[622px] ${videoFrame.className}`}>
        <iframe
          className="w-full h-full rounded-xl"
          src="https://www.youtube.com/embed/13eEfYYs3Co"
          title="GADKI - Program dla dzieci 10-12 lat"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      <div ref={material01.ref} className={`flex w-[1180px] items-center gap-[251px] absolute top-[1783px] left-[274px] ${material01.className}`}>
        <div className="flex w-[878px] items-center gap-5 relative">
          <div className="relative w-20 mt-[-1.00px] font-happy-season font-bold text-fddsraspberry text-4xl text-center tracking-[-0.40px] leading-[54px]">
            01
          </div>

          <div className="relative w-[473.01px] mt-[-1.00px] font-happy-season font-medium text-black text-4xl tracking-[-0.40px] leading-[54px]">
            Broszura
          </div>
        </div>
      </div>

      <div ref={material01Content.ref} className={`inline-flex items-start justify-center gap-[265px] absolute top-[1885px] left-[374px] ${material01Content.className}`}>
        <div className="relative w-[237.88px] h-[305.39px] bg-fddsraspberry rounded-xl" />

        <div className="inline-flex flex-col items-start gap-[120px] relative flex-[0_0_auto]">
          <p className="relative w-[480px] mt-[-1.00px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
            Broszura &#34;GADKI&#34; to rozmowy na temat kilku prostych zasad,
            które pomogą ochronić Twoje dziecko przed wykorzystywaniem
            seksualnym.
          </p>
        </div>
      </div>

      <div ref={material02Content.ref} className={`inline-flex items-start justify-center gap-[265px] absolute top-[2511px] left-[374px] ${material02Content.className}`}>
        <div className="relative w-[237.88px] h-[305.39px] bg-fddsraspberry rounded-xl" />

        <div className="inline-flex flex-col items-start gap-[120px] relative flex-[0_0_auto]">
          <p className="relative w-[480px] mt-[-1.00px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
            W rozmowie z dzieckiem może Ci pomóc przygotowana przez nas ulotka
            adresowana do dzieci.
          </p>
        </div>
      </div>

      <div ref={material03Content.ref} className={`inline-flex items-start justify-center gap-[265px] absolute top-[3138px] left-[374px] ${material03Content.className}`}>
        <div className="relative w-[237.88px] h-[305.39px] bg-fddsraspberry rounded-xl" />

        <div className="inline-flex flex-col items-start gap-12 relative flex-[0_0_auto]">
          <p className="relative w-[480px] mt-[-1.00px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
            Czy wiesz, że zajęcia&#34;Gadki z psem&#34; możesz przeprowadzić
            z dzieckiem w swoim domu? Przygotowaliśmy dla Ciebie plan działania,
            dzięki któremu poprzez zabawę nauczysz dziecko podstawowych zasad
            bezpieczeństwa i rozpoznawania zagrażających sytuacji.
          </p>
        </div>
      </div>

      <div ref={material05Content.ref} className={`inline-flex items-start justify-center gap-[265px] absolute top-[4708px] left-[374px] ${material05Content.className}`}>
        <div className="relative w-[237.88px] h-[305.39px] bg-fddsraspberry rounded-xl" />

        <div className="inline-flex flex-col items-start gap-12 relative flex-[0_0_auto]">
          <p className="relative w-[480px] mt-[-1.00px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
            Czy wiesz, że zajęcia&#34;Gadki z psem&#34; możesz przeprowadzić
            z dzieckiem w swoim domu? Przygotowaliśmy dla Ciebie plan działania,
            dzięki któremu poprzez zabawę nauczysz dziecko podstawowych zasad
            bezpieczeństwa i rozpoznawania zagrażających sytuacji.
          </p>
        </div>
      </div>

      <div ref={material04Content.ref} className={`inline-flex items-start justify-center gap-[265px] absolute top-[3782px] left-[374px] ${material04Content.className}`}>
        <div className="relative w-[237.88px] h-[305.39px] bg-fddsraspberry rounded-xl" />

        <div className="inline-flex flex-col items-start gap-12 relative flex-[0_0_auto]">
          <p className="relative w-[480px] mt-[-1.00px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
            Karty pracy i zabawy dla dzieci w wieku przedszkolnym utrwalające
            zasady GADKI. Złóżcie razem wizerunek gadkowego psa, pokolorujcie
            obrazek, powtarzajacie nazwy części ciała i ułóżcie nasze puzzle!
          </p>
        </div>
      </div>

      <img
        className="absolute top-[2361px] left-[276px] w-[1178px] h-px object-cover"
        alt="Line"
        src="https://c.animaapp.com/mhyuu2kvHVVHVs/img/line-2.svg"
      />

      <div ref={material02.ref} className={`flex w-[1180px] items-center gap-[251px] absolute top-[2409px] left-[274px] ${material02.className}`}>
        <div className="flex w-[878px] items-center gap-5 relative">
          <div className="relative w-20 mt-[-1.00px] font-happy-season font-bold text-fddsraspberry text-4xl text-center tracking-[-0.40px] leading-[54px]">
            02
          </div>

          <div className="relative w-[473.01px] mt-[-1.00px] font-happy-season font-medium text-black text-4xl tracking-[-0.40px] leading-[54px]">
            Ulotka
          </div>
        </div>
      </div>

      <div ref={material03.ref} className={`flex w-[1180px] items-center gap-[251px] absolute top-[3036px] left-[274px] ${material03.className}`}>
        <div className="flex w-[878px] items-center gap-5 relative">
          <div className="relative w-20 mt-[-1.00px] font-happy-season font-bold text-fddsraspberry text-4xl text-center tracking-[-0.40px] leading-[54px]">
            03
          </div>

          <div className="relative w-[473.01px] mt-[-1.00px] font-happy-season font-medium text-black text-4xl tracking-[-0.40px] leading-[54px]">
            Plan zajęć domowych dla dzieci
          </div>
        </div>
      </div>

      <div ref={material05.ref} className={`flex w-[1180px] items-center gap-[251px] absolute top-[4606px] left-[274px] ${material05.className}`}>
        <div className="flex w-[878px] items-center gap-5 relative">
          <div className="relative w-20 mt-[-1.00px] font-happy-season font-bold text-fddsraspberry text-4xl text-center tracking-[-0.40px] leading-[54px]">
            05
          </div>

          <div className="relative w-[473.01px] mt-[-1.00px] font-happy-season font-medium text-black text-4xl tracking-[-0.40px] leading-[54px]">
            Plakat
          </div>
        </div>
      </div>

      <div ref={material04.ref} className={`flex w-[1180px] items-center gap-[251px] absolute top-[3680px] left-[274px] ${material04.className}`}>
        <div className="flex w-[878px] items-center gap-5 relative">
          <div className="relative w-20 mt-[-1.00px] font-happy-season font-bold text-fddsraspberry text-4xl text-center tracking-[-0.40px] leading-[54px]">
            04
          </div>

          <div className="relative w-[473.01px] mt-[-1.00px] font-happy-season font-medium text-black text-4xl tracking-[-0.40px] leading-[54px]">
            Ćwiczenia i zabawy dla dzieci
          </div>
        </div>
      </div>

      <img
        className="absolute top-[2987px] left-[276px] w-[1178px] h-px object-cover"
        alt="Line"
        src="https://c.animaapp.com/mhyuu2kvHVVHVs/img/line-2.svg"
      />

      <img
        className="absolute top-[4558px] left-[276px] w-[1178px] h-px object-cover"
        alt="Line"
        src="https://c.animaapp.com/mhyuu2kvHVVHVs/img/line-2.svg"
      />

      <img
        className="absolute top-[5184px] left-[276px] w-[1178px] h-px object-cover"
        alt="Line"
        src="https://c.animaapp.com/mhyuu2kvHVVHVs/img/line-2.svg"
      />

      <img
        className="absolute top-[3631px] left-[276px] w-[1178px] h-px object-cover"
        alt="Line"
        src="https://c.animaapp.com/mhyuu2kvHVVHVs/img/line-2.svg"
      />

      <div ref={material01Download.ref} className={`inline-flex items-center gap-[220px] absolute top-[2238px] left-[299px] ${material01Download.className}`}>
        <div className="inline-flex items-center gap-[39px] relative flex-[0_0_auto]">
          <img
            className="relative w-9 h-9"
            alt="File save"
            src="https://c.animaapp.com/mhyuu2kvHVVHVs/img/file-save-24dp-1f1f1f-fill0-wght300-grad0-opsz24-1.svg"
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

      <div ref={pozostaleMaterialy.ref} className={`absolute top-[6907px] left-[276px] w-[1172px] font-happy-season font-semibold text-fddsraspberry text-8xl text-center tracking-[-1.06px] leading-[105.6px] ${pozostaleMaterialy.className}`}>
        Pozostałe
        <br />
        materiały
      </div>

      <div ref={remainingCards.ref} className={`inline-flex items-center gap-5 absolute top-[7177px] left-[472px] ${remainingCards.className}`}>
        <Link to="/dla-rodzicow-i-opiekunow" className="relative w-[380px] h-[480px] bg-white rounded-xl hover:shadow-lg transition-shadow cursor-pointer">
          <div className="absolute top-10 left-[76px] w-[228px] font-happy-season font-semibold text-fddsraspberry text-[40px] text-center tracking-[-0.44px] leading-[44px]">
            Dla rodziców
            <br />i opiekunów
          </div>

          <div className="absolute top-[161px] left-[52px] w-[277px] h-[319px] flex gap-[11.9px]">
            <img
              className="mt-[26.1px] w-[124.6px] h-[292.82px]"
              alt="Mama"
              src="https://c.animaapp.com/mhyuu2kvHVVHVs/img/mama-2x.png"
            />

            <img
              className="w-[140.23px] h-[318.88px]"
              alt="Tata"
              src="https://c.animaapp.com/mhyuu2kvHVVHVs/img/tata-2x.png"
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

      <div ref={material02Download.ref} className={`inline-flex items-center gap-[220px] absolute top-[2864px] left-[299px] ${material02Download.className}`}>
        <div className="inline-flex items-center gap-[39px] relative flex-[0_0_auto]">
          <img
            className="relative w-9 h-9"
            alt="File save"
            src="https://c.animaapp.com/mhyuu2kvHVVHVs/img/file-save-24dp-1f1f1f-fill0-wght300-grad0-opsz24-1.svg"
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

      <div ref={material03Download.ref} className={`inline-flex items-center gap-[220px] absolute top-[3491px] left-[299px] ${material03Download.className}`}>
        <div className="inline-flex items-center gap-[39px] relative flex-[0_0_auto]">
          <img
            className="relative w-9 h-9"
            alt="File save"
            src="https://c.animaapp.com/mhyuu2kvHVVHVs/img/file-save-24dp-1f1f1f-fill0-wght300-grad0-opsz24-1.svg"
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

      <div ref={material05Download.ref} className={`inline-flex items-center gap-[220px] absolute top-[5061px] left-[299px] ${material05Download.className}`}>
        <div className="inline-flex items-center gap-[39px] relative flex-[0_0_auto]">
          <img
            className="relative w-9 h-9"
            alt="File save"
            src="https://c.animaapp.com/mhyuu2kvHVVHVs/img/file-save-24dp-1f1f1f-fill0-wght300-grad0-opsz24-1.svg"
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

      <div className="flex flex-col w-[1055px] items-start gap-6 absolute top-[4135px] left-[299px]">
        <div className="flex items-center gap-[220px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center gap-[39px] relative flex-[0_0_auto]">
            <img
              className="relative w-9 h-9"
              alt="File save"
              src="https://c.animaapp.com/mhyuu2kvHVVHVs/img/file-save-24dp-1f1f1f-fill0-wght300-grad0-opsz24-1.svg"
            />

            <div className="relative w-[480px] mt-[-1.00px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
              Zestaw 1
            </div>
          </div>

          <div className="flex w-[280px] items-center justify-center gap-2.5 px-6 py-5 relative bg-fddsraspberry rounded-[48px] hover:bg-white border-2 border-transparent hover:border-fddsraspberry transition-colors cursor-pointer group">
            <div className="relative w-fit mt-[-1.00px] font-lato font-bold text-white group-hover:text-fddsraspberry text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
              Pobierz
            </div>
          </div>
        </div>

        <div className="flex items-center gap-[220px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center gap-[39px] relative flex-[0_0_auto]">
            <img
              className="relative w-9 h-9"
              alt="File save"
              src="https://c.animaapp.com/mhyuu2kvHVVHVs/img/file-save-24dp-1f1f1f-fill0-wght300-grad0-opsz24-1.svg"
            />

            <div className="relative w-[480px] mt-[-1.00px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
              Zestaw 2
            </div>
          </div>

          <div className="flex w-[280px] items-center justify-center gap-2.5 px-6 py-5 relative bg-fddsraspberry rounded-[48px] hover:bg-white border-2 border-transparent hover:border-fddsraspberry transition-colors cursor-pointer group">
            <div className="relative w-fit mt-[-1.00px] font-lato font-bold text-white group-hover:text-fddsraspberry text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
              Pobierz
            </div>
          </div>
        </div>

        <div className="flex items-center gap-[220px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center gap-[39px] relative flex-[0_0_auto]">
            <img
              className="relative w-9 h-9"
              alt="File save"
              src="https://c.animaapp.com/mhyuu2kvHVVHVs/img/file-save-24dp-1f1f1f-fill0-wght300-grad0-opsz24-1.svg"
            />

            <div className="relative w-[480px] mt-[-1.00px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
              Zestaw 3
            </div>
          </div>

          <div className="flex w-[280px] items-center justify-center gap-2.5 px-6 py-5 relative bg-fddsraspberry rounded-[48px] hover:bg-white border-2 border-transparent hover:border-fddsraspberry transition-colors cursor-pointer group">
            <div className="relative w-fit mt-[-1.00px] font-lato font-bold text-white group-hover:text-fddsraspberry text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
              Pobierz
            </div>
          </div>
        </div>

        <div className="flex items-center gap-[220px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center gap-[39px] relative flex-[0_0_auto]">
            <img
              className="relative w-9 h-9"
              alt="File save"
              src="https://c.animaapp.com/mhyuu2kvHVVHVs/img/file-save-24dp-1f1f1f-fill0-wght300-grad0-opsz24-1.svg"
            />

            <div className="relative w-[480px] mt-[-1.00px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
              Zestaw 4
            </div>
          </div>

          <div className="flex w-[280px] items-center justify-center gap-2.5 px-6 py-5 relative bg-fddsraspberry rounded-[48px] hover:bg-white border-2 border-transparent hover:border-fddsraspberry transition-colors cursor-pointer group">
            <div className="relative w-fit mt-[-1.00px] font-lato font-bold text-white group-hover:text-fddsraspberry text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
              Pobierz
            </div>
          </div>
        </div>
      </div>

      <div ref={faqSection.ref} className={`absolute top-[5476px] left-[324px] ${faqSection.className}`}>
        <FAQ
          title="Zapytaj Gadka"
          showDogImage={true}
          defaultOpenId={1}
        />
      </div>

      <div className="absolute top-[190px] left-[274px] w-[180px] h-[180px] flex bg-beige-400 rounded-[20000px] overflow-hidden animate-gentle-pulse">
        <img
          className="mt-7 w-[165px] h-[152px] ml-2 object-cover"
          alt="Dziewczyna"
          src="https://c.animaapp.com/mhyuu2kvHVVHVs/img/dziewczyna-2x.png"
        />
      </div>

      <div className="absolute top-[-52px] left-[474px] w-[180px] h-[180px] flex bg-beige-400 rounded-[20000px] overflow-hidden animate-gentle-pulse">
        <img
          className="mt-[52px] w-[142px] h-32 ml-[38px] object-cover"
          alt="Gadek"
          src="https://c.animaapp.com/mhyuu2kvHVVHVs/img/gadek-1-1.png"
        />
      </div>

      <div className="absolute top-16 left-[1174px] w-[180px] h-[180px] flex bg-beige-400 rounded-[20000px] overflow-hidden animate-gentle-pulse">
        <img
          className="mt-[30px] w-[180px] h-[150px] object-cover"
          alt="Chopak"
          src="https://c.animaapp.com/mhyuu2kvHVVHVs/img/chopak-2x.png"
        />
      </div>

      <p ref={materialyIntro.ref} className={`absolute top-[1346px] left-[274px] w-[1180px] font-lato font-medium text-black text-[32px] tracking-[-0.35px] leading-[44.8px] ${materialyIntro.className}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Curabitur tempus urna at turpis.
      </p>

      <div className="absolute top-[8485px] left-0 w-full">
        <Footer />
      </div>
      </div>
    </div>
  );
};
