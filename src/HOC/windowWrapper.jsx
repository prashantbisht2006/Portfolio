import React, { useRef } from 'react';
import useWindowStore from '#store/window';
import { useGSAP } from '@gsap/react';

const windowWrapper = (Component, windowKey) => {
  
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey] || {};
    const ref = useRef(null);

    

    if (!isOpen) return null; // optional: if window is closed, hide it

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex }}
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
