import { useContext } from "react";
import { TaskContext } from "./TaskContext";
 
function AddTaskForm() {
  const { addTaskToList } = useContext(TaskContext);
  
  function addTask(formData) {
    const task = formData.get("task");
    if (!task) return;
    addTaskToList(task);
  }
  
  return <form action={addTask}>
    <input name="task" type='text' placeholder='Type a new task'></input>
    <button type='submit'>ADD</button>
  </form>
}

export default AddTaskForm;