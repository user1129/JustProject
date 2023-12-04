import { Link } from "react-router-dom";
import "../styles/app.css";
import Header from "../components/Header";
const EmptyBasket = () => {
  return (
    <div className="wrapper">
      <Header is={0} />
      <div className="content">
        <div className="container container--cart">
          <div className="cart cart--empty">
            <h2>Корзина пустая 😕</h2>
            <p>
              Вероятней всего, вы не заказывали ещё пиццу.
              <br />
              Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src="../../public/empty_cart.jpg" alt="Empty cart" />
            <Link to="/" className="button button--black">
              <span>Вернуться назад</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmptyBasket;
