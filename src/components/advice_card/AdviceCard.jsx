import React, { useState, useEffect } from "react";
import "./AdviceCard.css";
import axios from "axios";

function AdviceCard() {
  const [advice, setAdvice] = useState("");

  function getAdvice() {
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

  return (
    <div className="advice-card">
      <p className="advice">{advice}</p>
      <div
        className="new__button"
        onClick={() => {
          getAdvice();
        }}
      >
        Get New Advice
      </div>
    </div>
  );
}

export default AdviceCard;
