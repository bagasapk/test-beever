import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { myQuote } from "../redux/quoteActions";

export default function PersonalQuoteView() {
  const quotes = useSelector((state) => state);
  const dispatch = useDispatch();
  const [mine, setMine] = useState("");
  const handleSubmit = (e, data) => {
    e.preventDefault();
    dispatch(myQuote(data));
  };
  return (
    <section style={{ textAlign: "center", marginTop: "60px" }}>
      <hr style={{ maxWidth: "30%" }} />
      <h2>My Quotes</h2>
      <form>
        <input type="text" onChange={(e) => setMine(e.target.value)} />
        <button onClick={(e) => handleSubmit(e, mine)}>Submit</button>
      </form>
      {quotes.myquote.length > 0 ? (
        quotes.myquote.map((data, key) => {
          return <p key={key}>{data}</p>;
        })
      ) : (
        <></>
      )}
    </section>
  );
}
