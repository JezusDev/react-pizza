import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import styles from "./Cart.module.scss";

function Cart(props) {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    (function () {
      axios
        .get("https://633eaf8483f50e9ba3b5ee0b.mockapi.io/pizzas")
        .then((data) => {
          setPizzas(data.data);
          console.log(data);
        });
    })();
  }, []);

  console.log(pizzas);

  function handleDelete(id) {
    setPizzas((prev) => prev.filter((item) => item.id !== id));
  }

  function clearCart() {
    setPizzas([]);
  }

  return (
    <div>
      {!pizzas.length ? (
        <div className={styles.empty}>
          <h1>Корзина пустая 😕</h1>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы
            заказать пиццу, перейди на главную страницу.
          </p>
          <img src="img/cart-empty.svg" alt="cart" />
          <Link to="/">Вернуться назад</Link>
        </div>
      ) : (
        <div className={styles.cart}>
          <div className={styles.cartHeader}>
            <h1>
              <img src="img/cartHeader.svg" alt="cart" />
              Корзина
            </h1>
            <button onClick={clearCart}>
              <img src="img/trash.svg" alt="trash" />
              Очистить корзину
            </button>
          </div>
          <div className={styles.cartItems}>
            {pizzas.map((item, index) => (
              <CartItem {...item} key={item.id} handleDelete={handleDelete} />
            ))}
          </div>

          <div className="cart__bottom-details">
            <span>
              {" "}
              Всего пицц: <b>3 шт.</b>{" "}
            </span>
            <span>
              {" "}
              Сумма заказа: <b>900 ₽</b>{" "}
            </span>
          </div>

          <div className="cart__bottom-buttons">
            <a
              href="/"
              className="button button--outline button--add go-back-btn"
            >
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13L1 6.93015L6.86175 1"
                  stroke="#D3D3D3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>

              <span>Вернуться назад</span>
            </a>
            <div className="button pay-btn">
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
