"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const VantaBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect: any = null;

    if (typeof window !== "undefined") {
      const VANTA = require("vanta/dist/vanta.fog.min.js").default;
      vantaEffect = VANTA({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: 0xba00ff,
        midtoneColor: 0xf4e8e0,
        lowlightColor: 0xffffff,
        baseColor: 0x0,
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={vantaRef} style={{ height: "100vh", width: "100%" }} />;
};

export default VantaBackground;
