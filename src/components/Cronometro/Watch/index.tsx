import React from "react";
import style from "./Watch.module.scss";

interface Props {
  time: number | undefined
}

export default function Watch({time = 0}: Props) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteTen,minuteUnit] = String(minutes)
  .padStart(2, '0');
  const [secondTen,secondUnit] = String(seconds)
  .padStart(2, '0');

  return (
    <>
      <span className={style.number}>{minuteTen}</span>
      <span className={style.number}>{minuteUnit}</span>
      <span className={style.watchLine}>:</span>
      <span className={style.number}>{secondTen}</span>
      <span className={style.number}>{secondUnit}</span>
    </>
  );
}
