import React from "react";
import FooterMain from "./Footer/FooterMain";
import Quick_links from "./Footer/Quick_links";
import "./App.css";
import HeaderMain from "./Header/HeaderMain";
import { MobileHeader } from "./Header/MobileHeader";
import { useisMobile } from "./Header/useisMobile";
export default function HomePage() {
  const isMobile = useisMobile();
  return (
    <div>
      {isMobile ? <MobileHeader /> : <HeaderMain />}
      <FooterMain />
      <div className="quicklink_continer">
        <Quick_links />
      </div>
    </div>
  );
}
