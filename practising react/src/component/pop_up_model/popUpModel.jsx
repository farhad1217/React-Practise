import { useState, useEffect } from "react";
import Model from "./model";

export default function PopUP() {
  const [toggleModel, setToggleModel] = useState(false);
  function handlePopUp() {
    setToggleModel(!toggleModel);
  }
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setToggleModel(false);
      }
    }
    if (toggleModel) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "auto";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [toggleModel]);
  return (
    <div>
      <button onClick={handlePopUp}>Show PopUP</button>
      {toggleModel ? <Model handlePopUp={handlePopUp} /> : null}
    </div>
  );
}
