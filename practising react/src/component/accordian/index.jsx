import { useState } from "react";
import data from "./data.js";

export default function Accordian() {
  const [multiSelect, setMultiSelect] = useState(false);
  const [selected, setSelected] = useState(["1"]);
  function handleClick(clickedID) {
    multiSelect
      ? setSelected((prevSelected) =>
          prevSelected.includes(clickedID)
            ? prevSelected.filter((id) => id !== clickedID)
            : [...prevSelected, clickedID],
        )
      : setSelected(selected[0] === clickedID ? [] : [clickedID]);
  }
  function toggleSelectioin() {
    setMultiSelect((prev) => !prev);
    selected.length > 1 ? setSelected("1") : setSelected(selected);
  }
  return (
    <>
      {data.map((dataItem) => (
        <div key={dataItem.id} onClick={() => handleClick(dataItem.id)}>
          <div className="question">
            <h2>{dataItem.question}</h2>
            <span>+</span>
          </div>
          <div className="anwser">
            {selected.includes(dataItem.id) ? dataItem.answer : null}
          </div>
        </div>
      ))}
      <button onClick={toggleSelectioin}>
        {multiSelect ? "Disable Multiselect" : "Enable Multiselect"}
      </button>
    </>
  );
}
