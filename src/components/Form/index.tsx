import React, { useState } from "react";
import { iTasks } from "../../types/task";
import Button from "../Button";
import style from "./Form.module.scss";
import { v4 as uuidv4 } from "uuid";

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<iTasks[]>>
}

export default function Form({setTasks}:Props) {
  
  const [task,setTask] = useState('');
  const [time,setTime] = useState('00:00');

  function saveTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTasks((tasksOlds) => [
      ...tasksOlds,
      {
        task,
        time,
        selected: false,
        complete: false,
        id: uuidv4(),
      },
    ]);
    setTask("")
    setTime("00:00")
  }


    return (
      <form className={style.newTask} onSubmit={saveTask}>
        <div className={style.inputContainer}>
          <label htmlFor="task">
            Add a new task
            <input
              type="text"
              value={task}
              onChange={(event) =>
                setTask(event.target.value)
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
              value={time}
              onChange={(event) =>
                setTime(event.target.value )
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

