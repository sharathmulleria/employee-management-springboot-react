import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'



export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>
        <p onClick={()=> toggleComplete(task.id)}
        className={`${task.completed ? 'completed' : ""}`}
        >{task.task}</p>
        <div>
          <FontAwesomeIcon icon={faPenToSquare} onClick={()=> editTodo(task.id)} ></FontAwesomeIcon>
          <FontAwesomeIcon icon={faTrash} onClick={()=>deleteTodo(task.id)} ></FontAwesomeIcon>
        </div>
    </div>
  )
}


