import React from "react";
import style from "./Button.module.scss";

export default function index(props: {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
}) {
  const { text, type = "button" } = props;
  return (
    <button type={type} className={style.button}>
      {text}
    </button>
  );
}
