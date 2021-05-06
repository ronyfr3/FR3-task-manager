import React,{useContext} from 'react'
import { TaskListContext } from './Context'
import {FaEdit} from 'react-icons/fa'
import {AiFillDelete} from 'react-icons/ai'
import './Task.css'

function Task({task}) {
    const {deleteTask,findItem} =useContext(TaskListContext)
    return (
            <div className='tasks'>
               <div className='taskText'>
                    <span className='input-text'>{task.title}</span>
               </div>
               <div className='task-icons'>
                    <span onClick={()=>deleteTask(task.id)} className='delete'><AiFillDelete/></span>
                    <span onClick={()=>findItem(task.id)} className='edit'><FaEdit/></span>
               </div>  
        </div>
    )
}

export default Task
