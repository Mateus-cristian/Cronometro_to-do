import style from "./List.module.scss";
import Item from "./item";
import { iTasks } from "../../types/task";

interface Props {
  tasks: iTasks[];
  selectedTask: (taskSelected: iTasks) => void;
}

export default function List({ tasks, selectedTask }: Props) {
  return (
    <aside className={style.tasks}>
      <h2>Tasks of the day</h2>
      <ul>
        {tasks.map(item  => (
          <Item selectedTask={selectedTask} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}
