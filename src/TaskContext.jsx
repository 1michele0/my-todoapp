import { createContext, useState } from "react";

export const TaskContext = createContext();

function TaskContentProvider({children}) {
    const [taskList, setTaskList] = useState([]);
    const addTaskToList = (task) => { setTaskList([...taskList, task]) };

    function update(index, text) {
        const updatedList = [...taskList];
        updatedList[index] = text;
        setTaskList(updatedList);
    }

    function destroy(index) {
        const updatedList = taskList.filter((_, i) => i !== index);
        setTaskList(updatedList);
    }

    return (
        <TaskContext value={{taskList, addTaskToList, setTaskList, update, destroy}}>
            {children}
        </TaskContext>
    )
}

export default TaskContentProvider;