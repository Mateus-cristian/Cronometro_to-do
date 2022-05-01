import { iTasks } from "../../../types/task";
import style from "./Item.module.scss";

interface Props extends iTasks {
  selectedTask: (taskSelected: iTasks) => void;
}

export default function Item({
  task,
  time,
  selected,
  complete,
  id,
  selectedTask,
}: Props) {
  return (
    <li
      className={`${style.item}  ${selected ? style.itemSelected : ''} ${complete ? style.itemComplete : ''}`}
      onClick={() => !complete && selectedTask({ task, time, selected, complete, id })}
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {complete && <span className={style.complete} aria-label="task complete"></span>}
    </li>
  );
}
