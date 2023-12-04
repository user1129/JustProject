import React from "react";
import "../styles/app.css";
import Category from "./components/Category";
import Header from "./components/Header";
import Sort from "./components/Sort";
import { PizzaType } from "./types/PizzaType";
import axios from "axios";
import Pizza from "./components/Pizza";
function App() {
  const [pizzas, setPizzas] = React.useState<PizzaType[]>([]);
  React.useEffect(() => {
    async function getPizzas() {
      const pizza = await axios.get(
        "https://654cf22b77200d6ba859c12f.mockapi.io/pizzas"
      );
      setPizzas(pizza.data);
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
              {pizzas.map((value) => {
                return <Pizza key={value.id} {...value} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
