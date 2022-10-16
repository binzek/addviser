import React, { useState, useEffect } from "react";
import "./AdviceCard.css";
import axios from "axios";
import Loader from "../loader/Loader";

function AdviceCard() {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);

  function getAdvice() {
    setTimeout(() => {
      setLoading(false);
    }, 800);
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        setAdvice(res.data.slip.advice);
      })
      .catch(() => {
        setAdvice("Something went wrong. Advice not found !");
      });
  }
  useEffect(() => {
    getAdvice();
  });

  let adviceClassName;
  if (advice === "Something went wrong. Advice not found !") {
    adviceClassName = "advice advice__not-found";
  } else {
    adviceClassName = "advice";
  }

  return (
    <div className="advice-card">
      {loading ? <Loader /> : <p className={adviceClassName}>{advice}</p>}
      <div
        className="new__button"
        onClick={() => {
          setLoading(true);
          getAdvice();
        }}
      >
        Get New Advice
      </div>
    </div>
  );
}

export default AdviceCard;
