import React from "react";
import "../../styles/app.css";
import Category from "../components/Category";
import Header from "../components/Header";
import Sort from "../components/Sort";
import { PizzaType } from "../@types/types";
import axios from "axios";
import Pizza from "../components/Pizza";
import Skeleton from "../components/Skeleton";

function App() {
  const [pizzas, setPizzas] = React.useState<PizzaType[]>([]);
  const [isLoading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    async function getPizzas() {
      const pizza = await axios.get(
        "https://654cf22b77200d6ba859c12f.mockapi.io/pizzas"
      );
      setPizzas(pizza.data);
      setLoading(false);
    }
    getPizzas();
  }, []);
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Category />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {isLoading
                ? [...new Array(10)].map((_, index) => {
                    return <Skeleton key={index} />;
                  })
                : pizzas.map((value) => {
                    return <Pizza key={value.id} {...value} />;
                  })}
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default App;
