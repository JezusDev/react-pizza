import React, { useState } from "react";
import styles from "./CartItem.module.scss";

function CartItem({ imageUrl, title, price, handleDelete, id }) {
  const [counter, setCounter] = useState(0);
  const [totalPrice, setTotalPrice] = useState(750);

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartMain}>
        <img src={imageUrl} alt="pizza" />
        <div>
          <h4>{title}</h4>
          <p>{"тонкое тесто, 26 см."}</p>
        </div>
      </div>
      <div className={styles.counter}>
        <button>
          <img src="img/minus.svg" alt="minus" />
        </button>
        <div>{counter}</div>
        <button>
          <img src="img/plus.svg" alt="plus" />
        </button>
      </div>
      <div className={styles.price}>{totalPrice} ₽</div>
      <div className={styles.delete}>
        <button onClick={() => handleDelete(id)}>
          <img src="img/cartDelete.svg" alt="delete" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
