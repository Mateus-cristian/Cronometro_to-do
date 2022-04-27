import React from "react";
import style from "./Watch.module.scss";

export default function Watch() {
  return (
    <>
      <span className={style.number}>0</span>
      <span className={style.number}>0</span>
      <span className={style.watchLine}>:</span>
      <span className={style.number}>0</span>
      <span className={style.number}>0</span>
    </>
  );
}
