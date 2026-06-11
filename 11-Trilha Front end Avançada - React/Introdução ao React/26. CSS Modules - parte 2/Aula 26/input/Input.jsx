import React from "react";
import styles from "./input.module.css"

export function Input({ ...props }) {
  return (
    <>
    <div className={styles.container}>
      <input {...props}/>
      </div>
    </>
  );
}
