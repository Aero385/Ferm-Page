import React from "react";
import Title from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";
import FeatureCard from "/src/components/ui/feature-card/feature-card";
import "./style.css";

function Featureslist() {
  return (
    <section>
      <Title>Почему фермерские продукты лучше?</Title>
      <ul className="feature__list">
        <li className="feature__item">
          <FeatureCard />
        </li>
      </ul>
      <Button>Купить</Button>
    </section>
  );
}

export default Featureslist;
