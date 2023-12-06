import "../styles/app.css";
import Category from "../components/Category";
import Header from "../components/Header";
import Sort from "../components/Sort";
import Pizza from "../components/Pizza";
import Skeleton from "../components/Skeleton";
import { Filter, PizzaType, RootState } from "../@types/types";
import { fetchPizza } from "../redux/slices/PizzaSlice";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

const sortMap: Record<number, string> = {
  0: "rating",
  1: "price",
  2: "title",
};

const Home: React.FC = () => {
  const [isLoading, setLoading] = React.useState<boolean>(true);

  const dispatch = useDispatch();
  const { sort, category }: Filter = useSelector(
    (state: RootState) => state.filter
  );

  React.useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const sortParam = `?sortBy=${sortMap[sort]}`;
        const categoryParam = category !== 0 ? `&category=${category}` : "";
        await dispatch(fetchPizza({ sortParam, categoryParam }));
        setLoading(false);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [sort, category]);

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
};

export default Home;
