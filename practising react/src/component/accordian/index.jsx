import { useState } from "react";
import data from "./data.js";

export default function Accordian() {
    const [selected, setSelected] = useState("0")
    function handleClick(clickedID){
        setSelected(clickedID === selected? null: clickedID)
    }
  return (
    <>
      {data.map((dataItem) => (
        <div key={dataItem.id} onClick={()=>handleClick(dataItem.id)}>
          <div className="question">
            <h2>{dataItem.question}</h2>
            <span>+</span>
          </div>
          <div className="anwser">
            {selected === dataItem.id? dataItem.answer : null}
          </div>
        </div>
      ))}
    </>
  );
}


