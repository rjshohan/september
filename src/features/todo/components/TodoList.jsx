import React from "react";

const TodoList = ({ todoList,setTodoList }) => {
  return (
    <>
      <h4>Todo List</h4>

      {todoList.map((todo, i) => {
        return (
          <div key={i}>
            <span>{todo.title}</span>
            <span>{todo.description}</span>
            <span onClick={()=>{

              const newTodoList = todoList.filter((_,index)=> i!==index )

              setTodoList(newTodoList)
            }} style={{marginLeft:"20px"}}>x</span>
          </div>
        );
      })}
    </>
  );
};

export default TodoList;
