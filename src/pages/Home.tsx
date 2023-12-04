import "../styles/app.css";
import Category from "../components/Category";
import Header from "../components/Header";
import Sort from "../components/Sort";

import Pizza from "../components/Pizza";
import Skeleton from "../components/Skeleton";
import { HomeProp, PizzaType, RootState } from "../@types/types";
import { useSelector } from "react-redux";

const Home: React.FC<HomeProp> = ({ load = false }) => {
  const pizzas: PizzaType[] = useSelector(
    (state: RootState) => state.pizza.pizzas
  );

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
              {load
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
};

export default Home;
