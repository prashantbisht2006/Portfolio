import React from "react";
import windowWrapper from "../HOC/windowWrapper";
import Windowcontrol from "#components/windowcontrol";
import useWindowStore from "#store/window";

const Text = () => {
  const { windows } = useWindowStore();

  // ✅ Correct source of data
  const data = windows.txtfile?.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <>
      {/* Window Header */}
      <div id="window-header">
        <Windowcontrol target="txtfile" />
        <h2>{name}</h2>
      </div>

      {/* Window Content */}
      <div className="p-5 space-y-6 bg-white">
        {image && (
          <div className="w-full">
            <img
              src={image}
              alt={name}
              className="w-full h-auto rounded"
            />
          </div>
        ) }

        {subtitle ? <h3 className="text-lq font-semibold">{subtitle}</h3> : null}

        {Array.isArray(description) && description.length > 0 && (
  <div className="space-y-3 leading-relaxed text-base text-gray-800">
    {description.map((para, idx) => (
      <p key={idx}>{para}</p>
    ))}
  </div>
)}        
      </div>
    </>
  );
};

const TextWindow = windowWrapper(Text, "txtfile");

export default TextWindow;
