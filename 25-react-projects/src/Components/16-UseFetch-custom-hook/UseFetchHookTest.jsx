import React from "react";
import useFetch from "./useFetch";

const UseFetchHookTest = () => {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products",
    {}
  );
  console.log(data, error, loading);
  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {loading ? <h3>Loading ..please wait</h3> : null}
      {error ? <h2>{error}</h2> : null}
      {data && data.products && data.products.length > 0
        ? data.products.map((productItem) => (
            <p key={productItem.id}>{productItem.title}</p>
          ))
        : null}
    </div>
  );
};

export default UseFetchHookTest;
