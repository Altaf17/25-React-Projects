import React, { useRef } from "react";
import useFetch from "../16-UseFetch-custom-hook/useFetch";

const Scroll = () => {
  const bottomRef = useRef(null);
  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );
  console.log(bottomRef);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleScrollButtom = () => {
    bottomRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  if (loading) {
    return <h1>Data Loading.. please wait</h1>;
  }

  if (error) {
    return <h1>{`${error} occured`}</h1>;
  }
  return (
    <div>
      <h1>Scroll to Top and Bottom feature</h1>
      <h3>This is Top section</h3>
      <button onClick={handleScrollButtom}>Scroll to buttom</button>
      <ul style={{ listStyle: "none" }}>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li>{item.title}</li>)
          : null}
      </ul>
      <button onClick={handleScrollTop}>Scroll to Top</button>
      <div className="" ref={bottomRef}></div>
      <h3>This is buttom of the page</h3>
    </div>
  );
};

export default Scroll;
