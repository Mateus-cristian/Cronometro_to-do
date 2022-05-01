import React, { useState } from "react";
import style from "./App.module.scss";

import Form from "../components/Form";
import List from "../components/List";
import Stopwatch from "../components/Cronometro";
import { iTasks } from "../types/task";

function App() {
  const [tasks, setTasks] = useState<iTasks[] | []>([]);

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <Stopwatch />
    </div>
  );
}

export default App;
