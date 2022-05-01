import React, { useEffect, useState } from "react";
import Button from "../Button";
import Watch from "./Watch";
import style from "./Stopwatch.module.scss";
import { timeForSeconds } from "../../common/utils/time";
import { iTasks } from "../../types/task";

interface Props {
  selected: iTasks | undefined
  finallyTask:() => void
}

export default function Stopwatch({selected,finallyTask}: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if(selected?.time){
      setTime(timeForSeconds(selected.time))
    }
  },[selected])

  function regressive(cont: number = 0){
    setTimeout(() => {
        if(cont > 0){
          setTime(cont - 1)
          return regressive(cont - 1)
        }
        finallyTask()
    },1000)
  }

  return (
    <div className={style.stopwatch}>
      <p className={style.title}>choose a card and start a stopwatch</p>
      <div className={style.watchWrapper}>
        <Watch time={time} />
      </div>
      <Button text="Start" onClick={() => regressive(time)} />
    </div>
  );
}
