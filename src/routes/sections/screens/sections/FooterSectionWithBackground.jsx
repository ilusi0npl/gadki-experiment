import React from "react";
import { Footer } from "../../../../components/Footer";
import { FrameWrapper } from "../../../../screens/GadkiStronaGwna/sections/FrameWrapper";

/**
 * FooterSectionWithBackground - Reusable component that combines:
 * - Wavy red background (union-2 and union-3 SVG layers)
 * - Help section with phone numbers (FrameWrapper)
 * - Footer
 *
 * This component ensures consistent footer appearance across all pages.
 *
 * @param {Object} props
 * @param {number} props.topPosition - The top position where this section should start (in pixels)
 * @param {boolean} props.showDog - Whether to show the dog image (default: true)
 * @param {boolean} props.showDecorative - Whether to show decorative image next to footer (default: true)
 */
export const FooterSectionWithBackground = ({
  topPosition = 0,
  showDog = true,
  showDecorative = true
}) => {
  return (
    <>
      {/* Wave backgrounds - Two layers for depth */}
      {/* First wave (union-2) */}
      <img
        className="absolute left-0 w-screen h-[660px] object-cover"
        style={{ top: `${topPosition + 125}px`, zIndex: 1 }}
        alt="Union"
        src="https://c.animaapp.com/kiXkeqSn/img/union-2.svg"
      />

      {/* Second wave (union-3) - 150px lower to create layered wavy bottom effect */}
      <img
        className="absolute left-0 w-screen h-[750px] object-cover"
        style={{ top: `${topPosition + 125 + 150}px`, zIndex: 1 }}
        alt="Union"
        src="https://c.animaapp.com/kiXkeqSn/img/union-3.svg"
      />

      {/* Help Section Container */}
      <div
        className="absolute left-0 w-full max-w-[1728px] mx-auto"
        style={{ top: `${topPosition}px`, height: '1098px', zIndex: 2 }}
      >
        {/* Dog image */}
        {showDog && (
          <img
            className="absolute w-[231px] h-[251px]"
            style={{ top: '0px', left: '748px' }}
            alt="Piesek"
            src="https://c.animaapp.com/kiXkeqSn/img/piesek2-01-1@2x.png"
          />
        )}

        {/* FrameWrapper - help section with phone numbers */}
        <div className="absolute w-full" style={{ top: '185px' }}>
          <FrameWrapper />
        </div>

        {/* Decorative image next to footer */}
        {showDecorative && (
          <img
            className="absolute left-[1480px] w-[248px] h-[419px] animate-gentle-pulse"
            style={{ top: '274px' }}
            alt="Group"
            src="https://c.animaapp.com/kiXkeqSn/img/group-11@2x.png"
          />
        )}
      </div>

      {/* Footer - positioned 982px after section start (overlaps FrameWrapper by 116px) */}
      <div
        className="absolute left-0 w-full"
        style={{ top: `${topPosition + 982}px`, zIndex: 2 }}
      >
        <Footer />
      </div>
    </>
  );
};
