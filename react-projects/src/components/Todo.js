import React from 'react';
import List from './List';

const Todo = ({ allTodo, setTodos }) => {
    const deleteTodo = (id) => {
      const updatedTodos = allTodo.filter(todo => todo.id !== id);
      setTodos(updatedTodos);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
    }
  
    const eachTodo = allTodo.map((todo) => (
      <List key={todo.id} id={todo.id} text={todo.text} deleteTodo={() => deleteTodo(todo.id)} />
    ));
  
    return (
      <div className='w-1/2 p-5'>
        <ul className='flex flex-col gap-5'>
          {eachTodo}
        </ul>
      </div>
    );
  }
  

export default Todo