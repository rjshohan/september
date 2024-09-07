import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Student, { Greet } from "./components/practice";

const TodoApp = () => {
  // const [todo, setTodo] = useState("");
  // const [description, setDescription] = useState("");
  const [todoList, setTodoList] = useState([]);

  const [count, setCount] = useState(0);

  const [todoInfo, setTodoInfo] = useState({
    title: "",
    description: "",
  });

  console.log(todoList);

  return (
    <div>
      {/* <p>count: {count}</p>
      <button
        onClick={() => {

          setCount(1)//count=0,preValue =0
          setCount(preValue =>{
            return 
          })//count =0,preValue =1
          // setCount(count + 1000);//count =0
          // setCount(count+2)//count=0

          // setCount((preValue) => {
          //   return preValue + 100;
          // });//count =0,preValue =0
          // setCount((preValue) => {
          //   return preValue + 1;
          // });//count =0,preValue =1
        }}
      >
        Increment
      </button> */}

      

     
      {/* <p>Description: {todoInfo.description}</p> */}

      {/* <Student
        studentObj={{
          name: "Shohan Al Hasan",
          age: 25,
          isStudent: true,
          salary: "Nothing to Show 'Goribss'",
        }}
      />
      <Student
        name="Shishir Ahmed Polash"
        age={25}
        isStudent={true}
        salary="Healthy amount"
      />
      <Greet />
      <TodoForm todo={todo} setTodo={setTodo}/>
      <TodoForm name="Shohan Todo" />
      <TodoList /> */}

      <TodoForm todoList={todoList} setTodoList={setTodoList} todoInfo={todoInfo} setTodoInfo={setTodoInfo}/>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default TodoApp;
