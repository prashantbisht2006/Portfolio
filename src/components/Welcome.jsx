import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";

const FONT_WEIGHTS = {
  subtitle: { min: 100, max: 500, default: 100 },
  title: { min: 400, max: 900, default: 400 }
};

const renderText = (text, className, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const setuptextHover = (container, type) => {
  if (!container) return ()=>{};

  const letters = container.querySelectorAll('span');
  const { min, max, default: base } = FONT_WEIGHTS[type];

  const animateLetter = (letter, weight, duration = 0.25) => {
    return gsap.to(letter, {
      duration,
      ease: "power2.out",
      fontVariationSettings: `'wght' ${weight}`
    });
  };

  const handleMouse = (e) => {
    const { left: containerLeft } = container.getBoundingClientRect();
    const mouseX = e.clientX - containerLeft;

    letters.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const center = l - containerLeft + w / 2;

      const distance = Math.abs(mouseX - center);
      const intensity = Math.exp(-(distance * distance) / 10);

      animateLetter(letter, min + (max - min) * intensity);
    });
  };

  const handleMouseLeave = () =>
    letters.forEach((letter) => animateLetter(letter, base, 0.3));

  container.addEventListener("mousemove", handleMouse);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouse);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const titleEffect = setuptextHover(titleRef.current, "title");
    const subtitleEffect = setuptextHover(subtitleRef.current, "subtitle");

    return () => {
      titleEffect && titleEffect();
      subtitleEffect && subtitleEffect();
    };
  }, []);

  return (
    <section id='welcome'>
      <p ref={subtitleRef}>
        {renderText(
          "Hello , I am Prashant ! Welcome to my",
          "text-3xl font-georama",
          100
        )}
      </p>

      <h1 ref={titleRef} className='mt-7'>
        {renderText("portfolio", "text-8xl font-georama")}
      </h1>

      <div className='small-screen'>
        <p>Please open it on desktop/tablet to get the best experience.</p>
      </div>
    </section>
  );
};

export default Welcome;
