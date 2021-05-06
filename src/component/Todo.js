import React, { useContext,useState,useEffect } from 'react'
import { TaskListContext } from './Context'
import Task from './Task'
import {GoTasklist} from 'react-icons/go'
import './ToDo.css'

function Todo() { 
    
    const {addTask,tasks,clearTask,editTask,editItem} = useContext(TaskListContext)
    const [title,setTitle] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(editItem===null){
        addTask(title)
        setTitle('')
        }else{
            editTask(title,editItem.id)
        }
    }
        useEffect(()=>{
            if(editItem!==null){
                setTitle(editItem.title)
            }else{
                setTitle('')
            }
        },[editItem])

    const handleChange = (e)=>{
        setTitle(e.target.value)
        console.log(title)
    }

    return (
        <form onSubmit={handleSubmit} className='todo'>
            <h2 className='todo-h2'><GoTasklist className='tasklogo'/> Task Manager</h2>
            <div className='todo-input'>
                <input 
                type='text'
                placeholder='Add Task..'
                value={title}
                onChange={handleChange}
                required
                />
            </div>
            <div className='taskBtn'>
                <button>
                    {editItem ? 'Edit Task': 'Add Task'}
                </button>
                <button onClick={clearTask}>Clear</button>
            </div>
            
           <div className='tasklistss'>
           {
                tasks.length ? (
                   <div>
                        {
                        tasks.map(task=>{
                            return <Task task={task} key={task.id}/>
                        })
                     }
                   </div>
                ):(
                    <h2 className='noTask'>Empty Task</h2>
                )
            }
           </div>
        </form>
    )
}

export default Todo
