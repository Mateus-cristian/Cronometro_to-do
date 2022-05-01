import React, { useState } from "react";
import style from "./App.module.scss";

import Form from "../components/Form";
import List from "../components/List";
import Stopwatch from "../components/Cronometro";
import { iTasks } from "../types/task";

function App() {
  const [tasks, setTasks] = useState<iTasks[] | []>([]);

  const [selected, setSelected] = useState<iTasks>();

  function selectedTask(taskSelected: iTasks) {
    setSelected(taskSelected);
    setTasks(oldsTasks => oldsTasks.map(task => ({
      ...task,
      selected: task.id === taskSelected.id ? true : false
    })))
  }

  function finallyTask(){
    if(selected){
      setSelected(undefined)
      setTasks(oldTasks => oldTasks.map(task => {
        if(task.id === selected.id){
          return {
            ...task,
            selected: false,
            complete: true
          }
        }
        return task;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectedTask={selectedTask} />
      <Stopwatch
      selected={selected} 
      finallyTask={finallyTask}
      />
    </div>
  );
}

export default App;
