import "./styles/app.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import NotFound from "./pages/NotFound";
import EmptyBasket from "./pages/EmptyBasket";
import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { set_pizza } from "./redux/slices/PizzaSlice";
import { useSelector } from "react-redux";
import { Filter, RootState } from "./@types/types";

const sortMap: Record<number, string> = {
  0: "rating",
  1: "price",
  2: "title",
};

function App() {
  const [isLoading, setLoading] = React.useState<boolean>(true);

  const dispatch = useDispatch();
  const { sort, category }: Filter = useSelector(
    (state: RootState) => state.filter
  );

  const sortParam = `?sortBy=${sortMap[sort]}`;
  const categoryParam = category !== 0 ? `&category=${category}` : "";

  React.useEffect(() => {
    async function getPizzas() {
      const pizza = await axios.get(
        "https://654cf22b77200d6ba859c12f.mockapi.io/pizzas" +
          sortParam +
          categoryParam
      );
      dispatch(set_pizza(pizza.data));
      setLoading(false);
    }
    getPizzas();
  }, [sort, category]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home load={isLoading} />} />
        <Route path="basket" element={<Basket />} />
        <Route path="/empty" element={<EmptyBasket />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
