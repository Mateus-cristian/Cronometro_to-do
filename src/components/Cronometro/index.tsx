import React from "react";
import Button from "../Button";
import Watch from "./Watch";
import style from "./Stopwatch.module.scss";

export default function Stopwatch() {
  return (
    <div className={style.stopwatch}>
      <p className={style.title}>choose a card and start a stopwatch</p>
      <div className={style.watchWrapper}>
        <Watch />
      </div>
      <Button text="Start" />
    </div>
  );
}
