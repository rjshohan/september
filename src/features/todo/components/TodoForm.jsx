import React from "react";

const TodoForm = ({ todoList,setTodoList,todoInfo, setTodoInfo, }) => {
  return (
    <form>
      <input
        type="text"
        value={todoInfo.title}
        onChange={(e) => setTodoInfo({ ...todoInfo, title: e.target.value })}
        placeholder="Todo"
      />

      {/* <p>Todo: {todoInfo.title}</p> */}

      <input
        type="text"
        value={todoInfo.description}
        onChange={(e) =>
          setTodoInfo({ ...todoInfo, description: e.target.value })
        }
        placeholder="Description"
      />

      <button
        type="button"
        onClick={(e) => {
          // e.preventDefault()
          setTodoList([...todoList, todoInfo]);
        }}
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
