import style from "./List.module.scss";
import Item from "./item";
import { iTasks } from "../../types/task";

export default function List({ tasks }: { tasks: iTasks[] }) {
  return (
    <aside className={style.tasks}>
      <h2>Tasks of the day</h2>
      <ul>
        {tasks.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}
