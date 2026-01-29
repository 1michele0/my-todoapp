function AddTaskForm({ handleAddTask }) {
  return <form action={handleAddTask}>
    <input name="task" type='text' placeholder='Type a new task'></input>
    <button type='submit'>ADD</button>
  </form>
}

export default AddTaskForm;