import React from "react";
import windowWrapper from "../HOC/windowWrapper";
import Windowcontrol from "#components/windowcontrol";
import useWindowStore from "#store/window";

const ImageWindowContent = () => {
  const { windows } = useWindowStore();

  // ✅ FIX 1: correct window key
  const data = windows.imgfile?.data;

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      <div id="window-header">
        {/* ✅ FIX 2: correct component name */}
        <Windowcontrol target="imgfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-5 bg-white">
        {imageUrl ? (
          <div className="w-full">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-auto max-h-[70vh] object-contain rounded"
              loading="lazy"
            />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default windowWrapper(ImageWindowContent, "imgfile");
