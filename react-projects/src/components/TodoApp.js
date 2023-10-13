import React, { useState, useEffect } from "react";
import Form from "./Form";
import Todo from "./Todo";
import { v4 as uuidv4 } from 'uuid';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
      const storedTodos = JSON.parse(localStorage.getItem('todos'));
      if (storedTodos) {
        setTodos(storedTodos);
      }
    }, []);
  
    const addTodo = (text) => {
      const newTodo = {
        id: uuidv4(),
        text: text
      };
      const newTodos = [...todos, newTodo];
      setTodos(newTodos);
      localStorage.setItem('todos', JSON.stringify(newTodos));
    }
  
    return (
      <div className="flex flex-col items-center p-48">
        <Form addTodo={addTodo} />
        <Todo allTodo={todos} setTodos={setTodos} />
      </div>
    );
  }
export default TodoApp