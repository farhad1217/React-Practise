import { useEffect, useState } from "react";

export default function LoadMoreData() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadMoreClicked, setLoadMoreClicked] = useState(0);

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${20 * loadMoreClicked}`,
      );
      const data = await response.json();
      setProducts((prevProduct) => [...prevProduct, ...data.products]);
      setLoading(false);
    }
    fetchProduct();
  }, [loadMoreClicked]);
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "15px",
        }}
      >
        {products.map((data) => (
          <div key={data.id}>
            <img src={data.thumbnail} alt={data.title} />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <p>{data.price}</p>
          </div>
        ))}
      </div>
      {loading ? (
        <p>loading... please wait</p>
      ) : (
        <>
          <button
            disabled={loadMoreClicked >= 4}
            onClick={() => setLoadMoreClicked((prev) => prev + 1)}
          >
            Load More Products
          </button>
          <p style={{ display: loadMoreClicked >= 4 ? "block" : "none" }}>
            You reached the end of the result
          </p>
        </>
      )}
    </div>
  );
}
