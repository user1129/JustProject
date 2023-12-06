import "./styles/app.css";
import { Route, Routes } from "react-router-dom";

import Basket from "./pages/Basket";
import NotFound from "./pages/NotFound";
import EmptyBasket from "./pages/EmptyBasket";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="basket" element={<Basket />} />
        <Route path="empty" element={<EmptyBasket />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
