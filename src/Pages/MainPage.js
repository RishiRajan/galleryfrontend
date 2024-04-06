import { useState, useEffect } from "react";

import HeroSection from "../Components/HeroSection/HeroSection";
import Imagelister from "../Components/ImageLister/Imagelister";

import "./MainPage.css";

const MainPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      // console.log(scrollPosition, window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let heroSectionHeight = 55;

  if (window.innerWidth < 425) {
    heroSectionHeight = 45;
  }
  return (
    <>
      <HeroSection />
      <div
        className="MainContent"
        style={{
          top: `${Math.round(
            (Math.max(heroSectionHeight - 0.3 * scrollPosition, 0) * 10) / 10
          )}vh`,
        }}>
        <div className="mainText">
          <h4>Photos </h4>
          <p>
            Explore the macro captures and 3d renders and download them on HQ
            with the download button when viewing
          </p>
        </div>
        <Imagelister />
      </div>
    </>
  );
};
export default MainPage;
