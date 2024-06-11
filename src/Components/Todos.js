import React from 'react'
import TodoItem from "./TodoItem";

const Todos = (props) => {
  return (
    <div classname="container">
        <h3 className="Text-center my-3">Todos List</h3>
        <TodoItem todo={props.todo[0]}/>
        {props.todos.map()}
        
         
    </div>
  )
}

export default TodoItem