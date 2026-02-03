import AppTitle from './AppTitle.jsx'
import AddTaskForm from './AddTaskForm.jsx'
import TaskList from './TaskList.jsx'
import TaskContentProvider from './TaskContext.jsx'

function App() {

  return (
    <>
      <TaskContentProvider>
        <AppTitle />
        <AddTaskForm />
        <TaskList />
      </TaskContentProvider>
    </>
  )
}

export default App
