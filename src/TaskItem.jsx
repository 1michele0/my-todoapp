import { useRef } from 'react'

function TaskItem({ task, index, list, setList }) {
  const textRef = useRef(null);
  const inputRef = useRef(null);
  const editBtnRef = useRef(null);
  const saveBtnRef = useRef(null);

  function editTaskText() {
    textRef.current.hidden = true;
    editBtnRef.current.hidden = true;
    saveBtnRef.current.hidden = false;
    inputRef.current.hidden = false;
  }

  function saveTaskText() {
    const newText = inputRef.current.value;
    const updatedList = [...list];
    updatedList[index] = newText;
    setList(updatedList);

    textRef.current.hidden = false;
    editBtnRef.current.hidden = false;
    saveBtnRef.current.hidden = true;
    inputRef.current.hidden = true;
  }

  function deleteTask() {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
  }

  function markTask() {
    textRef.current.style.textDecoration =
      textRef.current.style.textDecoration === "line-through"
        ? "none"
        : "line-through";
  }

  return (
    <li>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <input type="checkbox" onChange={markTask} />
        <span ref={textRef}>{task}</span>
        <input ref={inputRef} type="text" defaultValue={task} hidden />

        <button ref={editBtnRef} onClick={editTaskText}>Edit</button>
        <button ref={saveBtnRef} onClick={saveTaskText} hidden style={{ backgroundColor: "green" }}>Save</button>

        <button onClick={deleteTask} style={{ backgroundColor: "red" }}>DELETE</button>
      </div>
    </li>
  );
}

export default TaskItem;