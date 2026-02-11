import { useState } from "react";

export default function StarRating({numOfStar=5}) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <>
      <div style={{textAlign: "center"}}>
        {Array(numOfStar).fill("*").map((star, index) => {
          index += 1;
          return (
            <span
              key={index}
              onClick={() => setRating(index)}
              onMouseLeave={() => setHover(0)}
              onMouseEnter={() => setHover(index)}
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
      <button onClick={()=>setRating(0)}>Default</button>
    </>
  );
}
