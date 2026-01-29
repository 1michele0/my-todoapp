import { useState } from 'react'
import AppTitle from './AppTitle.jsx'
import AddTaskForm from './AddTaskForm.jsx'
import ShowTaskList from './ShowTaskList.jsx'


function App() {
  const [taskList, setTaskList] = useState([]);
  const handleTaskList = (task) => { setTaskList([...taskList, task]) };

  function addTask(formData) {
    const task = formData.get("task");
    if (!task) return;
    handleTaskList(task);
  }

  return (
    <>
      <AppTitle />
      <AddTaskForm handleAddTask={addTask} />
      <ShowTaskList list={taskList} setList={setTaskList} />
    </>
  )
}

export default App
