import React, { useState, useEffect } from "react";
import AdviceCard from "./components/advice_card/AdviceCard";
import "./App.css";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="app">
        <Loader />
      </div>
    );
  } else {
    return (
      <div className="app">
        <AdviceCard />
        <Footer />
      </div>
    );
  }
}

export default App;
