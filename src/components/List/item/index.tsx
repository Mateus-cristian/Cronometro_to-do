import { iTasks } from "../../../types/task";
import style from "../List.module.scss";

export default function index({ task, time, selected, complete }: iTasks) {
  return (
    <li className={style.item}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
}
