import { useEffect, useState } from "react";

export default function ImageSlider({ url, limit }) {
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    async function fetchImage() {
      try {
        const res = await fetch(url + limit);
        const data = await res.json();
        if (data) {
          setImage(data);
          setLoading(false);
        }
      } catch (e) {
        setErrorMessage(e.message);
      }
    }
    fetchImage();
  }, [url, limit]);

  function handlePrevious() {
    setCurrentImage(currentImage ? currentImage - 1 : limit - 1);
  }

  function handleNext() {
    setCurrentImage(currentImage === limit - 1 ? 0 : currentImage + 1);
  }

  function thisImage(index) {
    setCurrentImage(index);
  }

  return (
    <div>
      {errorMessage ? (
        errorMessage
      ) : loading ? (
        "Loading... please wait"
      ) : (
        <>
          <span onClick={handlePrevious}>previous</span>
          {image.map((imageItem) => (
            <img
              key={imageItem.id}
              style={{
                display:
                  currentImage.toString() === imageItem.id ? "block" : "none",
              }}
              src={imageItem.download_url}
              alt={imageItem.author}
              width={"300px"}
            />
          ))}
          <span onClick={handleNext}>next</span>
          <span>
            {image.map((_, index) => (
              <button
                key={index}
                onClick={() => thisImage(index)}
                style={{
                  padding: "10px",
                  borderRadius: "30px",
                  marginRight: "10px",
                  background: index === currentImage? "white":"grey"
                }}
              ></button>
            ))}
          </span>
        </>
      )}
    </div>
  );
}
