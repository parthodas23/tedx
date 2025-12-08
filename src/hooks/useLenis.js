import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      // Reduced duration for a slightly snappier, yet still smooth scroll.
      duration: 1.0,
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: false,
      // Added a custom easing function for a more controlled acceleration/deceleration.
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Request Animation Frame loop to update Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup function to destroy the Lenis instance when the component unmounts
    return () => lenis.destroy();
  }, []);
}
