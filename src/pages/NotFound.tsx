import { Link } from "react-router-dom";
import "../styles/app.css";
import Header from "../components/Header";
const NotFound = () => {
  return (
    <div className="wrapper">
      <Header is={0} />
      <div className="content">
        <div className="container container--cart">
          <div className="cart cart--empty">
            <h2>Страница не найдена 😐</h2>
            <p>
              Вероятней всего, вы перешли по не существующему адресу
              <br />
              Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <h1
              className="notfoundmessage"
              style={{
                fontFamily: "'0xProto'",
                fontSize: "150px",
                margin: "50px 0",
              }}
            >
              404
            </h1>
            <Link to="/" className="button button--black">
              <span>Вернуться назад</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
