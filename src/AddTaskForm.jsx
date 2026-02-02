 function AddTaskForm({ handleTaskList }) {
  
  function addTask(formData) {
    const task = formData.get("task");
    if (!task) return;
    handleTaskList(task);
  }
  return <form action={addTask}>
    <input name="task" type='text' placeholder='Type a new task'></input>
    <button type='submit'>ADD</button>
  </form>
}

export default AddTaskForm;