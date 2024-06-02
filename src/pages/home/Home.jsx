import React from "react";
import Card from "../../components/cards/Card";
import Banner from "../../components/banner/Banner";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <section className="banner">
        <div className="container">
          <Banner />
        </div>
      </section>
      <section className="cards">
        <div className="container">
          <div className="card-wrapper">
            <Card />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
