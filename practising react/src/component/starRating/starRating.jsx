import { useState } from "react";

export default function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  function handleClick(index) {
    setRating(index);
  }
  function hadleMouseLeave() {
    setHover(0);
  }
  function hadleMouseEnter(index) {
    setHover(index);
  }
  function defaultRating() {
    setRating(0);
  }
  return (
    <>
      <div style={{textAlign: "center"}}>
        {Array(5).fill("*").map((star, index) => {
          index += 1;
          return (
            <span
              key={index}
              onClick={() => handleClick(index)}
              onMouseLeave={() => hadleMouseLeave()}
              onMouseEnter={() => hadleMouseEnter(index)}
              style={{
                fontSize: "100px",
                color: index <= (hover || rating) ? "gold" : "black",
              }}
            >
              {star}
            </span>
          );
        })}
      </div>
      <button onClick={defaultRating}>Default</button>
    </>
  );
}
