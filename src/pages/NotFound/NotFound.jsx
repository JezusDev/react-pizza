import React from "react";
import styles from "./NotFound.module.scss";

function NotFound(props) {
  return (
    <>
      <div className={styles.root}>
        <p>🤔</p>
        <h1>Ничего не найдено</h1>
        <p>
          К сожалению, страница не найдена, вернитесь на предыдущую страницу
        </p>
      </div>
    </>
  );
}

export default NotFound;
