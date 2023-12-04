import "../styles/app.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import NotFound from "./pages/NotFound";
import EmptyBasket from "./pages/EmptyBasket";
import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { set_pizza } from "./redux/slices/PizzaSlice";

function App() {
  const pizzas = useSelector((state) => state.pizza.pizzas);
  const dispatch = useDispatch();
  React.useEffect(() => {
    async function getPizzas() {
      const pizza = await axios.get(
        "https://654cf22b77200d6ba859c12f.mockapi.io/pizzas"
      );
      dispatch(set_pizza(pizza));
    }
    getPizzas();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="basket" element={<Basket />} />
        <Route path="/empty" element={<EmptyBasket />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
