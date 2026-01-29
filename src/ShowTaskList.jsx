import TaskItem from "./TaskItem.jsx";

function ShowTaskList({ list, setList }) {
  if (list.length === 0) {
    return <p>No tasks available.</p>;
  }
  else {
    return (
      <ul>
        {list.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            list={list}
            setList={setList}
          />
        ))}
      </ul>
    );
  }
  
}

export default ShowTaskList;