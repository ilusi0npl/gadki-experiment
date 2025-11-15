import { useEffect, useRef, useState } from "react";

export const useScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const className = `transition-all duration-1000 ${
    isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10"
  }`;

  return { ref, className, isVisible };
};
