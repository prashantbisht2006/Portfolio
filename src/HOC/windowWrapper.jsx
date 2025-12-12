import React, { useLayoutEffect, useRef } from 'react';
import useWindowStore from '#store/window';
import { useGSAP } from '@gsap/react';
import Draggable from 'gsap/Draggable';
import gsap from 'gsap';


gsap.registerPlugin(Draggable);
const windowWrapper = (Component, windowKey) => {
  
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex,isMinimized, isMaximized } = windows[windowKey] || {};
    
    const ref = useRef(null);

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) {
        console.log("window not open");
        return;
      }
      el.style.display = "block";

      gsap.fromTo(el, {scale:0.8, opacity:0, y:40},
        {scale:1,opacity:1,y:0, duration:0.6,ease:"power3.out"}
      )
    }, [isOpen]);


  // for dragging the window
  useGSAP(() => {
  const el = ref.current;
  if (!el) return;

  gsap.set(el, { clearProps: "transform" }); // Removes animation transform

  const [instance]=Draggable.create(el, {
    type: "x,y",
    bounds: window,
    onPress: () => focusWindow(windowKey),
  });
  return ()=> instance.kill();

}, []);


   

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      el.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

    

    // -----------------------------------------------
// APPLY MINIMIZE / MAXIMIZE / RESTORE STYLES
// -----------------------------------------------
let style = { zIndex };

if (isMinimized) {
  // hides window
  style.display = "none";
}

if (isMaximized) {
  // fullscreen window
  style = {
    ...style,
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    transform: "none",
    position: "absolute",
  };
}
// -----------------------------------------------


// FIXED: replaced `style={{ zIndex }}` with `style={style}`
return (
  <section
    id={windowKey}
    ref={ref}
    style={style}               // ✅ CORE FIX
    className="absolute"
    onMouseDown={() => focusWindow(windowKey)}
  >
    <Component {...props} />
  </section>
);

  };

  Wrapped.displayName = `windowWrapper(${Component.displayName || Component.name || "Component"})`;

  return Wrapped;
};

export default windowWrapper;
