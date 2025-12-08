import { dockApps } from "#constants";
import React, { useRef } from "react";
import gsap from "gsap";
import { Tooltip } from "react-tooltip";
import { useGSAP } from "@gsap/react";
import useWindowStore from "#store/window";

export const Dock = () => {
  const dockRef = useRef(null);
  const { openWindow, closeWindow, windows } = useWindowStore();

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return () => {};

    const icons = dock.querySelectorAll(".dock-icon");

    const animateIcons = (mouseX) => {
      const { left: dockLeft } = dock.getBoundingClientRect();

      icons.forEach((icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect();
        const center = iconLeft - dockLeft + width / 2;

        const distance = Math.abs(mouseX - center);
        const intensity = Math.exp(-(distance * distance) / 10000);

        gsap.to(icon, {
          scale: 1 + 0.25 * intensity,
          y: -15 * intensity,
          duration: 0.2,
          ease: "power1.out",
        });
      });
    };

    const handleMouseMove = (e) => {
      const { left: dockLeft } = dock.getBoundingClientRect();
      animateIcons(e.clientX - dockLeft);
    };

    const resetIcons = () => {
      icons.forEach((icon) =>
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power1.out",
        })
      );
    };

    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", resetIcons);

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", resetIcons);
    };
  }, []);

  const toggleApp = (app) => {
    if (!app.canOpen) return;

    // avoid using variable name "window" (global)
    const win = windows[app.id];
    if (!win) {
      console.warn("No window config for id:", app.id);
      return;
    }

    if (win.isOpen) {
      closeWindow(app.id);
    } else {
      openWindow(app.id);
    }
    console.log(windows);
    // If you want fresh state, read it after a small tick (optional)
    // setTimeout(() => console.log(useWindowStore.getState().windows), 0);
  };

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map(({ id, name, icon, canOpen }) => (
          <div key={id ?? name} className="relative flex justify-center">
            <button
              type="button"
              className="dock-icon"
              aria-label={name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              data-tooltip-delay-show={150}
              disabled={!canOpen}
              onClick={() => toggleApp({ id, canOpen })}
            >
              <img
                src={`/images/${icon}`}
                alt={name}
                loading="lazy"
                className={canOpen ? "" : "opacity-60"}
              />
            </button>
          </div>
        ))}

        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
};
