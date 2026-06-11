import React from "react";
import styles from "./botao.module.css";

export function Botao({ text }) {
  console.log(styles);
  return (
    <>
      <div className={styles.container}>
        <button className={styles.botao}>{text}</button>
      </div>
    </>
  );
}
