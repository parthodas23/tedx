import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const PremiumBackground = () => {
  const [init, setInit] = useState(false);

  // This should only run once when the component mounts
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // loadSlim loads the least amount of code needed for the particles to work
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles container loaded", container);
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        className="fixed inset-0 -z-10" // Ensures it stays behind everything
        options={{
          background: {
            color: {
              value: "#000000", // Solid black background
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
            },
            modes: {
              grab: {
                distance: 200,
                links: {
                  opacity: 0.5,
                  color: "#ff2b2b",
                },
              },
            },
          },
          particles: {
            color: {
              value: "#ff2b2b", // TEDx Red
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
    );
  }

  return null;
};

export default PremiumBackground;
