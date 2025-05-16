import React, { useEffect, useState } from "react";

export const useisMobile = (breakpoint = 768) => {
  const [isMobile, setIsmobile] = useState(window.innerWidth <= breakpoint);
  useEffect(() => {
    const handleSize = () => setIsmobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", handleSize);
    handleSize();
    return window.removeEventListener("resize", handleSize);
  }, [breakpoint]);
  return isMobile;
};
