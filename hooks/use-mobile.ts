import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout> | null = null;

    const update = () => {
      // Clear any previous timeout
      if (timerId !== null) {
        clearTimeout(timerId);
      }
      const mobile = window.innerWidth < MOBILE_BREAKPOINT;
      timerId = setTimeout(() => setIsMobile(mobile), 0);
    };

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    mql.addEventListener("change", update);
    update(); // Initial check

    return () => {
      mql.removeEventListener("change", update);
      if (timerId !== null) {
        clearTimeout(timerId);
      }
    };
  }, []);

  return !!isMobile;
}
