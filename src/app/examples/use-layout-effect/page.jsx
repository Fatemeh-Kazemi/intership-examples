"use client";

import { useState, useLayoutEffect, useRef } from "react";

const MeasureComponent = () => {
  const [width, setWidth] = useState(0);
  const divRef = useRef(null);

  useLayoutEffect(() => {
    if (divRef.current) {
      setWidth(divRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Measure Div Width</h1>
        <div
          ref={divRef}
          className="bg-blue-500 text-white p-4 mb-4"
          style={{ width: "50%" }}
        >
          Resize the window to see the width change
        </div>
        <p className="text-lg">Div width: {width}px</p>
      </div>
    </div>
  );
};

export default MeasureComponent;
