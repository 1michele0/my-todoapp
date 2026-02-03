import TaskItem from "./TaskItem.jsx";
import { useContext } from "react";
import { TaskContext } from "./TaskContext.jsx";

function TaskList() {
  const {taskList} = useContext(TaskContext);

  if (taskList.length === 0) {
    return <p>No tasks available.</p>;
  }
  else {
    return (
      <ul>
        {taskList.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
          />
        ))}
      </ul>
    );
  }
  
}

export default TaskList;