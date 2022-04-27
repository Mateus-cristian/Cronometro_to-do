import React from "react";
import style from "./Button.module.scss";

export default function index(props: { text: string }) {
  const { text } = props;
  return <button className={style.button}>{text}</button>;
}
