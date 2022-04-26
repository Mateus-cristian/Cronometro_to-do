import React from "react";
import Button from "../Button";
import style from "./Form.module.scss";

export default function index() {
  return (
    <form className={style.newTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">
          Add a new task
          <input type="text" name="task" id="task" placeholder="task"></input>
        </label>
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">
          <input
            type="time"
            name="time"
            id="time"
            step="1"
            min="00:00:00"
            max="99:99:99"
            required
          ></input>
        </label>
      </div>
      <Button />
    </form>
  );
}
