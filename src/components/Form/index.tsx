import React, { useState } from "react";
import { iTasks } from "../../types/task";
import Button from "../Button";
import style from "./Form.module.scss";
import { v4 as uuidv4 } from "uuid";

export default class Form extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<iTasks[]>>;
}> {
  state = {
    task: "",
    time: "00:00:00",
  };

  saveTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.setTasks((tasksOlds) => [
      ...tasksOlds,
      {
        ...this.state,
        selected: false,
        complete: false,
        id: uuidv4(),
      },
    ]);
    this.setState({ task: "", time: "00:00" });
  }

  render() {
    return (
      <form className={style.newTask} onSubmit={this.saveTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="task">
            Add a new task
            <input
              type="text"
              value={this.state.task}
              onChange={(event) =>
                this.setState({ ...this.state, task: event.target.value })
              }
              name="task"
              id="task"
              placeholder="task"
            ></input>
          </label>
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="time">
            Time
            <input
              type="time"
              name="time"
              id="time"
              value={this.state.time}
              onChange={(event) =>
                this.setState({ ...this.state, time: event.target.value })
              }
              step="1"
              min="00:00:00"
              max="99:99:99"
              required
            ></input>
          </label>
        </div>
        <Button text="Adicionar" type="submit" />
      </form>
    );
  }
}
