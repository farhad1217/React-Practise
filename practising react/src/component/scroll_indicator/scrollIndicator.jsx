import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  function updateScrollReading() {
    const currentScroll = document.documentElement.scrollTop;
    const pageHeight = document.documentElement.scrollHeight;
    const windowHeight = document.documentElement.clientHeight;
    if (pageHeight - windowHeight === 0) setScrollPercentage(0);
    else
      setScrollPercentage((currentScroll / (pageHeight - windowHeight)) * 100);
  }
  useEffect(() => {
    window.addEventListener("scroll", updateScrollReading);
    const resizeObserver = new ResizeObserver(() => {
      updateScrollReading();
    });

    resizeObserver.observe(document.body);
    return () => {
      window.removeEventListener("scroll", updateScrollReading);
    };
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: "10px",
        background: "#ABDADC",
        position: "fixed",
        top: "0px",
        left: "0px",
      }}
    >
      <div
        style={{
          width: `${scrollPercentage}%`,
          height: "10px",
          background: "#6E026F",
        }}
      ></div>
    </div>
  );
}
