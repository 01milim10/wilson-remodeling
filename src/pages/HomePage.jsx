import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import Underlay from "../components/underlay";
import SlideShow from "../components/slideshow";
import Body from "../components/body";

import bg1 from "../assets/apartment-remodeling-theme-2022-12-16-11-51-58-utc-scaled.jpg";
import bg2 from "../assets/apartment-remodeling-works-2022-12-16-11-44-27-utc-scaled.jpg";
import bg3 from "../assets/apartment-room-painting-by-interior-painter-2022-12-16-11-47-49-utc-scaled.jpeg";

export default function HomePage() {
  const overlayImages = [bg1, bg2, bg3];
  return (
    <>
      <div>
        <Header />
        <SlideShow images={overlayImages} />
        <Body />
        <Footer />
      </div>
      <Underlay />
    </>
  );
}
