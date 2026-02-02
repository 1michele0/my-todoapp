import { useState } from 'react'
import AppTitle from './AppTitle.jsx'
import AddTaskForm from './AddTaskForm.jsx'
import ShowTaskList from './ShowTaskList.jsx'


function App() {
  const [taskList, setTaskList] = useState([]);
  const handleTaskList = (task) => { setTaskList([...taskList, task]) };

  return (
    <>
      <AppTitle />
      <AddTaskForm handleTaskList={handleTaskList} />
      <ShowTaskList list={taskList} setList={setTaskList} />
    </>
  )
}

export default App
