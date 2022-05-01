import React from "react";
import style from "./Button.module.scss";

export default function index(props: {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}) {
  const { text, type = "button", onClick } = props;
  return (
    <button onClick={onClick} type={type} className={style.button}>
      {text}
    </button>
  );
}
