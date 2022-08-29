import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addFavorite, getQuote } from "../redux/quoteActions";

export default function KanyeQuoteView() {
  const quotes = useSelector((state) => state);
  console.log(quotes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuote());
  }, [dispatch]);

  return (
    <section style={{ textAlign: "center" }}>
      <img
        src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg"
        alt="W3Schools.com"
        style={{ width: "300px" }}
      />
      <h1 style={{ fontSize: "40px", marginTop: "10px" }}>Kanye-West Quote</h1>
      {quotes.data !== "" ? <p>{quotes.data.quote}</p> : <></>}
      <button onClick={() => dispatch(getQuote())}>Get Quote</button>
      <button onClick={() => dispatch(addFavorite(quotes.data.quote))}>
        Add Favorite
      </button>
      {quotes.favorite.length > 0 ? (
        quotes.favorite.map((data, key) => {
          return <p key={key}>{data}</p>;
        })
      ) : (
        <></>
      )}
    </section>
  );
}
