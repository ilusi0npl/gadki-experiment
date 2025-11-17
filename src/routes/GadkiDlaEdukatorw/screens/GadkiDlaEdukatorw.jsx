import React, { useEffect } from "react";
import { Header } from "../../../components/Header";
import { Footer } from "../../../routes/sections/screens/sections/Footer";

export const GadkiDlaEdukatorw = () => {
  useEffect(() => {
    document.title = "Dla edukatorów i nauczycieli - GADKI";
  }, []);

  return (
    <div className="bg-beige-200 overflow-hidden w-full h-[11122px] relative">
      {/* BACKGROUND LAYER - Full-width backgrounds */}
      <div className="absolute inset-0 w-full pointer-events-none">
        {/* Top Union SVG - Full width */}
        <img
          className="absolute w-full h-[778px] top-0 left-0 object-cover"
          alt="Union"
          src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/union-1.svg"
        />

        {/* Newsletter Union SVG - Full width */}
        <img
          className="absolute top-[9591px] left-0 w-full h-[723px] object-cover"
          alt="Union"
          src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/union-2.svg"
        />

        {/* Bottom Help Section Union SVG - Full width */}
        <img
          className="absolute top-[9986px] left-0 w-full h-[723px] object-cover"
          alt="Union"
          src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/union-3.svg"
        />
      </div>

      {/* CONTENT LAYER - Centered 1728px container */}
      <div className="max-w-[1728px] mx-auto relative h-full">
        <Header />

        <img
          className="absolute w-[10.11%] h-0 top-0 left-[3.95%]"
          alt="Group"
          src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/group.png"
        />

        <img
          className="absolute top-[77px] left-[calc(50.00%_-_73px)] w-[146px] h-[67px]"
          alt="Frame"
          src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/frame-12.svg"
        />

        <div className="absolute top-[329px] left-[457px] font-happy-season font-bold text-white text-8xl text-center tracking-[-1.06px] leading-[105.6px] whitespace-nowrap">
          Dla edukatorów i nauczycieli
        </div>

        <div className="inline-flex absolute top-[474px] left-[calc(50.00%_-_186px)] bg-white items-center justify-center gap-2.5 px-6 py-5 rounded-[48px]">
          <p className="relative w-fit mt-[-1.00px] font-lato font-bold text-fddsraspberry text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
            Zaloguj się do Strefy Edukatora
          </p>
        </div>

        <div className="absolute top-[9835px] -left-0.5 w-[1728px] h-[874px]">
          <div className="flex flex-col w-[380px] h-[582px] items-start gap-12 absolute top-[137px] left-[374px]">
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
              <div className="flex items-center justify-center gap-2.5 px-6 py-5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[48px]">
                <div className="relative w-fit mt-[-1.00px] font-lato font-bold text-fddsraspberry text-xl tracking-[-0.22px] leading-[30px] whitespace-nowrap">
                  Zadzwoń
                </div>
              </div>

              <div className="flex items-center justify-center gap-2.5 px-6 py-5 relative self-stretch w-full flex-[0_0_auto] rounded-[48px] border-2 border-solid border-[#ffffff] hover:bg-white hover:border-fddsraspberry transition-colors cursor-pointer group">
                <div className="relative w-fit mt-[-2.00px] font-lato font-bold text-white group-hover:text-fddsraspberry text-xl tracking-[-0.22px] leading-[30px] whitespace-nowrap">
                  Odwiedź stronę
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[380px] h-[582px] items-start gap-12 absolute top-[137px] left-[974px]">
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
              <div className="flex items-center justify-center gap-2.5 px-6 py-5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[48px]">
                <div className="relative w-fit mt-[-1.00px] font-lato font-bold text-fddsraspberry text-xl tracking-[-0.22px] leading-[30px] whitespace-nowrap">
                  Zadzwoń
                </div>
              </div>

              <div className="flex items-center justify-center gap-2.5 px-6 py-5 relative self-stretch w-full flex-[0_0_auto] rounded-[48px] border-2 border-solid border-[#ffffff] hover:bg-white hover:border-fddsraspberry transition-colors cursor-pointer group">
                <div className="relative w-fit mt-[-2.00px] font-lato font-bold text-white group-hover:text-fddsraspberry text-xl tracking-[-0.22px] leading-[30px] whitespace-nowrap">
                  Odwiedź stronę
                </div>
              </div>
            </div>
          </div>

          <img
            className="absolute top-[201px] left-0.5 w-[230px] h-[379px]"
            alt="Vector"
            src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/vector-12.png"
          />

          <img
            className="absolute top-[-34px] left-[1412px] w-[281px] h-[206px]"
            alt="Union"
            src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/union.png"
          />
        </div>

        <div className="inline-flex items-start gap-5 absolute top-[9278px] left-[474px]">
          <div className="relative w-[380px] h-[480px] bg-white rounded-xl">
            <div className="absolute top-[236px] left-[71px] w-[237px] h-[244px] flex gap-[16.3px]">
              <img
                className="mt-[25.1px] w-[105.92px] h-[219.1px]"
                alt="Chopak"
                src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/chopak-2x.png"
              />

              <img
                className="w-[115.07px] h-[244.17px]"
                alt="Dziewczyna"
                src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/dziewczyna-2x.png"
              />
            </div>

            <div className="absolute top-10 left-[76px] w-[228px] font-happy-season font-semibold text-fddsraspberry text-[40px] text-center tracking-[-0.44px] leading-[44px]">
              Dla dzieci
            </div>
          </div>

          <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
            <div className="relative w-[380px] h-[480px] bg-white rounded-xl">
              <div className="absolute top-10 left-[76px] w-[228px] font-happy-season font-semibold text-fddsraspberry text-[40px] text-center tracking-[-0.44px] leading-[44px]">
                Dla rodziców
                <br />i opiekunów
              </div>

              <div className="absolute top-[161px] left-[52px] w-[277px] h-[319px] flex gap-[11.9px]">
                <img
                  className="mt-[26.1px] w-[124.6px] h-[292.82px]"
                  alt="Mama"
                  src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/mama-2x.png"
                />

                <img
                  className="w-[140.23px] h-[318.88px]"
                  alt="Tata"
                  src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/tata-2x.png"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[1172px] items-center gap-12 absolute top-[6046px] left-[274px]">
          <div className="relative self-stretch mt-[-1.00px] font-happy-season font-semibold text-fddsraspberry text-8xl text-center tracking-[-1.06px] leading-[105.6px]">
            Dodatkowe
            <br />
            materiały
          </div>
        </div>

        <div className="absolute top-[1601px] left-[474px] w-[781px] font-happy-season font-bold text-fddsraspberry text-8xl text-center tracking-[-1.06px] leading-[105.6px]">
          Materiały
        </div>

        <div className="flex w-[1180px] items-center gap-[251px] absolute top-[1783px] left-[274px]">
          <div className="flex w-[878px] items-center gap-5 relative">
            <div className="relative w-20 mt-[-1.00px] font-happy-season font-bold text-fddsraspberry text-4xl text-center tracking-[-0.40px] leading-[54px]">
              01
            </div>

            <div className="relative w-[473.01px] mt-[-1.00px] font-happy-season font-medium text-black text-4xl tracking-[-0.40px] leading-[54px]">
              Broszura
            </div>
          </div>
        </div>

        <div className="flex w-[1180px] items-center gap-[251px] absolute top-[6703px] left-[274px]">
          <div className="flex w-[878px] items-center gap-5 relative">
            <div className="relative w-20 mt-[-1.00px] font-happy-season font-bold text-fddsraspberry text-4xl text-center tracking-[-0.40px] leading-[54px]">
              01
            </div>

            <div className="relative w-[473.01px] mt-[-1.00px] font-happy-season font-medium text-black text-4xl tracking-[-0.40px] leading-[54px]">
              Formularz raportowania zajęć
            </div>
          </div>
        </div>

        <div className="flex w-[1180px] items-center gap-[251px] absolute top-[7015px] left-[274px]">
          <div className="flex w-[878px] items-center gap-5 relative">
            <div className="relative w-20 mt-[-1.00px] font-happy-season font-bold text-fddsraspberry text-4xl text-center tracking-[-0.40px] leading-[54px]">
              02
            </div>

            <div className="relative w-[473.01px] mt-[-1.00px] font-happy-season font-medium text-black text-4xl tracking-[-0.40px] leading-[54px]">
              Generator zaświadczeń
            </div>
          </div>
        </div>

        <div className="flex w-[1180px] items-center gap-[251px] absolute top-[7503px] left-[274px]">
          <div className="flex w-[878px] items-center gap-5 relative">
            <div className="relative w-20 mt-[-1.00px] font-happy-season font-bold text-fddsraspberry text-4xl text-center tracking-[-0.40px] leading-[54px]">
              03
            </div>

            <div className="relative w-[473.01px] mt-[-1.00px] font-happy-season font-medium text-black text-4xl tracking-[-0.40px] leading-[54px]">
              Certyfikat dla szkoły/przedszkola
            </div>
          </div>
        </div>

        <div className="inline-flex items-start justify-center gap-[265px] absolute top-[1885px] left-[374px]">
          <div className="relative w-[237.88px] h-[305.39px] bg-fddsraspberry rounded-xl" />

          <div className="inline-flex flex-col items-start gap-[120px] relative flex-[0_0_auto]">
            <p className="relative w-[480px] mt-[-1.00px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
              Broszura &#34;GADKI&#34; to rozmowy na temat kilku prostych zasad,
              które pomogą ochronić Twoje dziecko przed wykorzystywaniem
              seksualnym.
            </p>
          </div>
        </div>

        <div className="inline-flex items-start justify-center gap-[265px] absolute top-[2511px] left-[374px]">
          <div className="relative w-[237.88px] h-[305.39px] bg-fddsraspberry rounded-xl" />

          <div className="inline-flex flex-col items-start gap-[120px] relative flex-[0_0_auto]">
            <p className="relative w-[480px] mt-[-1.00px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
              W rozmowie z dzieckiem może Ci pomóc przygotowana przez nas ulotka
              adresowana do dzieci.
            </p>
          </div>
        </div>

        <div className="inline-flex items-start justify-center gap-[265px] absolute top-[3138px] left-[374px]">
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

        <div className="inline-flex items-start justify-center gap-[265px] absolute top-[4708px] left-[374px]">
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

        <div className="inline-flex items-start justify-center gap-[265px] absolute top-[5352px] left-[374px]">
          <div className="inline-flex flex-col items-start gap-12 relative flex-[0_0_auto]">
            <p className="relative w-[480px] mt-[-1.00px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
              Czy wiesz, że zajęcia&#34;Gadki z psem&#34; możesz przeprowadzić
              z dzieckiem w swoim domu? Przygotowaliśmy dla Ciebie plan działania,
              dzięki któremu poprzez zabawę nauczysz dziecko podstawowych zasad
              bezpieczeństwa i rozpoznawania zagrażających sytuacji.
            </p>
          </div>
        </div>

        <div className="inline-flex items-start justify-center gap-[265px] absolute top-[3782px] left-[374px]">
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
          className="top-[2361px] absolute left-[276px] w-[1178px] h-px object-cover"
          alt="Line"
          src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/line-5.svg"
        />

        <div className="flex w-[1180px] items-center gap-[251px] absolute top-[2409px] left-[274px]">
          <div className="flex w-[878px] items-center gap-5 relative">
            <div className="relative w-20 mt-[-1.00px] font-happy-season font-bold text-fddsraspberry text-4xl text-center tracking-[-0.40px] leading-[54px]">
              02
            </div>

            <div className="relative w-[473.01px] mt-[-1.00px] font-happy-season font-medium text-black text-4xl tracking-[-0.40px] leading-[54px]">
              Ulotka
            </div>
          </div>
        </div>

        <div className="flex w-[1180px] items-center gap-[251px] absolute top-[3036px] left-[274px]">
          <div className="flex w-[878px] items-center gap-5 relative">
            <div className="relative w-20 mt-[-1.00px] font-happy-season font-bold text-fddsraspberry text-4xl text-center tracking-[-0.40px] leading-[54px]">
              03
            </div>

            <div className="relative w-[473.01px] mt-[-1.00px] font-happy-season font-medium text-black text-4xl tracking-[-0.40px] leading-[54px]">
              Plan zajęć domowych dla dzieci
            </div>
          </div>
        </div>

        <div className="flex w-[1180px] items-center gap-[251px] absolute top-[4606px] left-[274px]">
          <div className="flex w-[878px] items-center gap-5 relative">
            <div className="relative w-20 mt-[-1.00px] font-happy-season font-bold text-fddsraspberry text-4xl text-center tracking-[-0.40px] leading-[54px]">
              05
            </div>

            <div className="relative w-[473.01px] mt-[-1.00px] font-happy-season font-medium text-black text-4xl tracking-[-0.40px] leading-[54px]">
              Plakat
            </div>
          </div>
        </div>

        <div className="flex w-[1180px] items-center gap-[251px] absolute top-[5250px] left-[274px]">
          <div className="flex w-[878px] items-center gap-5 relative">
            <div className="relative w-20 mt-[-1.00px] font-happy-season font-bold text-fddsraspberry text-4xl text-center tracking-[-0.40px] leading-[54px]">
              06
            </div>

            <div className="relative w-[473.01px] mt-[-1.00px] font-happy-season font-medium text-black text-4xl tracking-[-0.40px] leading-[54px]">
              Filmy instruktażowe
            </div>
          </div>
        </div>

        <div className="flex w-[1180px] items-center gap-[251px] absolute top-[3680px] left-[274px]">
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
          className="top-[2988px] absolute left-[276px] w-[1178px] h-px object-cover"
          alt="Line"
          src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/line-5.svg"
        />

        <img
          className="top-[4558px] absolute left-[276px] w-[1178px] h-px object-cover"
          alt="Line"
          src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/line-5.svg"
        />

        <img
          className="top-[5185px] absolute left-[276px] w-[1178px] h-px object-cover"
          alt="Line"
          src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/line-5.svg"
        />

        <img
          className="top-[5933px] absolute left-[276px] w-[1178px] h-px object-cover"
          alt="Line"
          src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/line-5.svg"
        />

        <img
          className="top-[6982px] absolute left-[276px] w-[1178px] h-px object-cover"
          alt="Line"
          src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/line-5.svg"
        />

        <img
          className="top-[7471px] absolute left-[276px] w-[1178px] h-px object-cover"
          alt="Line"
          src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/line-5.svg"
        />

        <img
          className="top-[7959px] absolute left-[276px] w-[1178px] h-px object-cover"
          alt="Line"
          src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/line-5.svg"
        />

        <img
          className="top-[3632px] absolute left-[276px] w-[1178px] h-px object-cover"
          alt="Line"
          src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/line-5.svg"
        />

        <div className="inline-flex items-center gap-[220px] absolute top-[2238px] left-[299px]">
          <div className="inline-flex items-center gap-[39px] relative flex-[0_0_auto]">
            <img
              className="relative w-9 h-9"
              alt="File save"
              src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/file-save-24dp-1f1f1f-fill0-wght300-grad0-opsz24-1.svg"
            />

            <div className="relative w-[480px] mt-[-1.00px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
              Broszura w formacie .pdf
            </div>
          </div>

          <div className="flex w-[280px] relative bg-fddsraspberry items-center justify-center gap-2.5 px-6 py-5 rounded-[48px]">
            <div className="relative w-fit mt-[-1.00px] font-lato font-bold text-white text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
              Pobierz
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-[220px] absolute top-[2864px] left-[299px]">
          <div className="inline-flex items-center gap-[39px] relative flex-[0_0_auto]">
            <img
              className="relative w-9 h-9"
              alt="File save"
              src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/file-save-24dp-1f1f1f-fill0-wght300-grad0-opsz24-1.svg"
            />

            <div className="relative w-[480px] mt-[-1.00px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
              Ulotka w formacie .pdf
            </div>
          </div>

          <div className="flex w-[280px] relative bg-fddsraspberry items-center justify-center gap-2.5 px-6 py-5 rounded-[48px]">
            <div className="relative w-fit mt-[-1.00px] font-lato font-bold text-white text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
              Pobierz
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-[220px] absolute top-[3491px] left-[299px]">
          <div className="inline-flex items-center gap-[39px] relative flex-[0_0_auto]">
            <img
              className="relative w-9 h-9"
              alt="File save"
              src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/file-save-24dp-1f1f1f-fill0-wght300-grad0-opsz24-1.svg"
            />

            <p className="relative w-[480px] mt-[-1.00px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
              Plan zajęć domowych w formacie .pdf
            </p>
          </div>

          <div className="flex w-[280px] relative bg-fddsraspberry items-center justify-center gap-2.5 px-6 py-5 rounded-[48px]">
            <div className="relative w-fit mt-[-1.00px] font-lato font-bold text-white text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
              Pobierz
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-[220px] absolute top-[5061px] left-[299px]">
          <div className="inline-flex items-center gap-[39px] relative flex-[0_0_auto]">
            <img
              className="relative w-9 h-9"
              alt="File save"
              src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/file-save-24dp-1f1f1f-fill0-wght300-grad0-opsz24-1.svg"
            />

            <p className="relative w-[480px] mt-[-1.00px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
              Plan zajęć domowych w formacie .pdf
            </p>
          </div>

          <div className="flex w-[280px] relative bg-fddsraspberry items-center justify-center gap-2.5 px-6 py-5 rounded-[48px]">
            <div className="relative w-fit mt-[-1.00px] font-lato font-bold text-white text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
              Pobierz
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-[220px] absolute top-[5705px] left-[299px]">
          <div className="inline-flex items-center gap-[39px] relative flex-[0_0_auto]">
            <img
              className="relative w-9 h-9"
              alt="File save"
              src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/file-save-24dp-1f1f1f-fill0-wght300-grad0-opsz24-1.svg"
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

        <div className="inline-flex items-center gap-[220px] absolute top-[5802px] left-[299px]">
          <div className="inline-flex items-center gap-[39px] relative flex-[0_0_auto]">
            <img
              className="relative w-9 h-9"
              alt="File save"
              src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/file-save-24dp-1f1f1f-fill0-wght300-grad0-opsz24-1-1.svg"
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

        <div className="inline-flex items-center justify-center gap-2.5 px-6 py-5 absolute top-[7347px] left-[909px] bg-fddsraspberry rounded-[48px] hover:bg-white border-2 border-transparent hover:border-fddsraspberry transition-colors cursor-pointer group">
          <p className="relative w-fit mt-[-1.00px] font-lato font-bold text-white group-hover:text-fddsraspberry text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
            Zgłoś zajęcia i otrzymaj zaświadczenie
          </p>
        </div>

        <div className="inline-flex items-center justify-center gap-2.5 px-6 py-5 absolute top-[7835px] left-[895px] bg-fddsraspberry rounded-[48px] hover:bg-white border-2 border-transparent hover:border-fddsraspberry transition-colors cursor-pointer group">
          <p className="relative w-fit mt-[-1.00px] font-lato font-bold text-white group-hover:text-fddsraspberry text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
            Otrzymaj certyfikat dla swojej placówki
          </p>
        </div>

        <div className="flex flex-col w-[1055px] items-start gap-6 absolute top-[4135px] left-[299px]">
          <div className="flex items-center gap-[220px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[39px] relative flex-[0_0_auto]">
              <img
                className="relative w-9 h-9"
                alt="File save"
                src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/file-save-24dp-1f1f1f-fill0-wght300-grad0-opsz24-1.svg"
              />

              <div className="relative w-[480px] mt-[-1.00px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
                Zestaw 1
              </div>
            </div>

            <div className="flex w-[280px] relative bg-fddsraspberry items-center justify-center gap-2.5 px-6 py-5 rounded-[48px]">
              <div className="relative w-fit mt-[-1.00px] font-lato font-bold text-white text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
                Pobierz
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[220px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[39px] relative flex-[0_0_auto]">
              <img
                className="relative w-9 h-9"
                alt="File save"
                src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/file-save-24dp-1f1f1f-fill0-wght300-grad0-opsz24-1.svg"
              />

              <div className="relative w-[480px] mt-[-1.00px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
                Zestaw 2
              </div>
            </div>

            <div className="flex w-[280px] relative bg-fddsraspberry items-center justify-center gap-2.5 px-6 py-5 rounded-[48px]">
              <div className="relative w-fit mt-[-1.00px] font-lato font-bold text-white text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
                Pobierz
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[220px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[39px] relative flex-[0_0_auto]">
              <img
                className="relative w-9 h-9"
                alt="File save"
                src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/file-save-24dp-1f1f1f-fill0-wght300-grad0-opsz24-1.svg"
              />

              <div className="relative w-[480px] mt-[-1.00px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
                Zestaw 3
              </div>
            </div>

            <div className="flex w-[280px] relative bg-fddsraspberry items-center justify-center gap-2.5 px-6 py-5 rounded-[48px]">
              <div className="relative w-fit mt-[-1.00px] font-lato font-bold text-white text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
                Pobierz
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[220px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[39px] relative flex-[0_0_auto]">
              <img
                className="relative w-9 h-9"
                alt="File save"
                src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/file-save-24dp-1f1f1f-fill0-wght300-grad0-opsz24-1.svg"
              />

              <div className="relative w-[480px] mt-[-1.00px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
                Zestaw 4
              </div>
            </div>

            <div className="flex w-[280px] relative bg-fddsraspberry items-center justify-center gap-2.5 px-6 py-5 rounded-[48px]">
              <div className="relative w-fit mt-[-1.00px] font-lato font-bold text-white text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
                Pobierz
              </div>
            </div>
          </div>
        </div>

        <p className="absolute top-[6323px] left-[560px] w-[580px] font-lato font-normal text-black text-2xl text-center tracking-[-0.26px] leading-9">
          Zaloguj się lub zarejestruj aby otrzymać dostęp do dodatkowych
          materiałów oraz uzyskać możliwość generowania zaświadczeń oraz
          certyfikatów.
        </p>

        <div className="flex w-[280px] items-center justify-center gap-2.5 px-6 py-5 absolute top-[6491px] left-[574px] bg-fddsraspberry rounded-[48px] hover:bg-white border-2 border-transparent hover:border-fddsraspberry transition-colors cursor-pointer group">
          <div className="relative w-fit mt-[-1.00px] font-lato font-bold text-white group-hover:text-fddsraspberry text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
            Zaloguj się
          </div>
        </div>

        <div className="inline-flex items-center justify-center gap-2.5 px-6 py-5 absolute top-[6789px] left-[1104px] bg-fddsraspberry rounded-[48px] hover:bg-white border-2 border-transparent hover:border-fddsraspberry transition-colors cursor-pointer group">
          <div className="relative w-fit mt-[-1.00px] font-lato font-bold text-white group-hover:text-fddsraspberry text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
            Wypełnij formularz
          </div>
        </div>

        <div className="flex w-[280px] items-center justify-center gap-2.5 px-6 py-5 absolute top-[6491px] left-[874px] rounded-[48px] border-2 border-solid border-[#e83f4b]">
          <div className="relative w-fit mt-[-2.00px] font-lato font-bold text-fddsraspberry text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
            Zarejestruj się
          </div>
        </div>

        <div className="absolute top-[7117px] left-[374px] w-[238px] h-[305px] bg-white rounded-xl" />

        <div className="absolute top-[7606px] left-[374px] w-[238px] h-[305px] bg-white rounded-xl" />

        <img
          className="absolute top-[7705px] left-[434px] w-[120px] h-[120px]"
          alt="Frame"
          src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/frame-162.svg"
        />

        <img
          className="absolute top-[7216px] left-[434px] w-[120px] h-[120px]"
          alt="Frame"
          src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/frame-162.svg"
        />

        <p className="absolute top-[7117px] left-[874px] w-[480px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
          Curabitur feugiat, augue a sollicitudin semper, sem turpis euismod
          purus, sit amet volutpat turpis augue non diam. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra.
        </p>

        <p className="top-[6789px] left-[374px] absolute w-[480px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
          Curabitur feugiat, augue a sollicitudin semper, sem turpis euismod
          purus, sit amet volutpat turpis augue non diam. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra.
        </p>

        <p className="top-[7606px] left-[874px] absolute w-[480px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-9">
          Curabitur feugiat, augue a sollicitudin semper, sem turpis euismod
          purus, sit amet volutpat turpis augue non diam. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra.
        </p>

        <div className="absolute top-[8238px] left-[calc(50.00%_-_590px)] w-[1184px] h-[486px]">
          <div className="absolute top-[186px] left-0 w-[1180px] h-[300px] bg-fddsraspberry rounded-3xl" />

          <img
            className="absolute top-0 left-[901px] w-[179px] h-[186px] object-cover"
            alt="Gadek"
            src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/gadek-2.png"
          />

          <p className="absolute top-[225px] left-[100px] font-happy-season font-bold text-white text-5xl tracking-[-0.53px] leading-[52.8px] whitespace-nowrap">
            Zapisz się do naszego newslettera
          </p>

          <div className="absolute top-[409px] left-[100px] w-5 h-5 bg-white rounded" />

          <p className="absolute top-[405px] left-[132px] font-lato font-normal text-white text-base tracking-[-0.18px] leading-6">
            <span className="text-[#ffffff] tracking-[-0.03px]">
              Zgadzam się na otrzymywanie newslettera Fundacji Dajemy Dzieciom
              Siłę oraz akceptuję{" "}
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
                <div className="relative w-fit mt-[-1.00px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-[26.4px] whitespace-nowrap">
                  Imię
                </div>
              </div>

              <div className="inline-flex items-center justify-center gap-2.5 px-[60px] py-[25px] relative flex-[0_0_auto] bg-white rounded">
                <div className="relative w-fit mt-[-1.00px] font-lato font-normal text-black text-2xl tracking-[-0.26px] leading-[26.4px] whitespace-nowrap">
                  Twój adres e-mail
                </div>
              </div>
            </div>

            <div className="flex w-[280px] relative border-2 border-solid border-[#ffffff] hover:bg-white hover:border-fddsraspberry transition-colors cursor-pointer group items-center justify-center gap-2.5 px-6 py-5 rounded-[48px]">
              <div className="relative w-fit mt-[-2.00px] font-lato font-bold text-white group-hover:text-fddsraspberry text-2xl tracking-[-0.26px] leading-9 whitespace-nowrap">
                Zapisz się
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-[-31px] left-[1174px] w-[180px] h-[180px] flex bg-beige-400 rounded-[20000px] overflow-hidden">
          <img
            className="mt-[31px] w-[180px] h-[149px] object-cover"
            alt="Edukator obszar"
            src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/edukator-obszar-roboczy-1-1.png"
          />
        </div>

        <div className="absolute top-[481px] left-[274px] w-[180px] h-[180px] flex bg-beige-400 rounded-[20000px] overflow-hidden">
          <img
            className="w-[147px] h-[180px] ml-4 object-cover"
            alt="Edukatorka obszar"
            src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/edukatorka-obszar-roboczy-1-1.png"
          />
        </div>

        <img
          className="absolute top-[644px] left-[274px] w-[1180px] h-[622px]"
          alt="Frame"
          src="https://c.animaapp.com/mhyuwd3uGBRqk0/img/frame-44.svg"
        />

        <p className="absolute top-[1346px] left-[274px] w-[1180px] font-lato font-medium text-black text-[32px] tracking-[-0.35px] leading-[44.8px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
          libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          Curabitur tempus urna at turpis.
        </p>

        <div className="absolute top-[9008px] left-[278px] w-[1172px] font-happy-season font-semibold text-fddsraspberry text-8xl text-center tracking-[-1.06px] leading-[105.6px]">
          Pozostałe
          <br />
          materiały
        </div>

        <Footer />
      </div>
    </div>
  );
};
