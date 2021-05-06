import React,{createContext,useState,useEffect} from 'react'
import {v1 as uuid} from 'uuid'
export const TaskListContext = createContext()

function Context(props) {

    const initialstate = JSON.parse(localStorage.getItem('tasks')) || []
    const [tasks,setTasks] = useState(initialstate)
    useEffect(()=>{
      localStorage.setItem('tasks',JSON.stringify(tasks))
    },[tasks])
   const addTask = (title) => {
        setTasks([...tasks,{title:title,id:uuid()}])
    }
   const deleteTask = (id) =>{
       setTasks(tasks.filter(task=>task.id!==id))
   }
    const clearTask =()=>{
        setTasks([])
    }
    const [editItem,setEditItem] =useState(null)
    const findItem = id =>{
        const item = tasks.find(task=>task.id===id)
        setEditItem(item)
    }
    const editTask =(title,id)=>{
       const newTasks =tasks.map(task=>(task.id===id ? {title,id} : task))
        
        console.log(title)
        console.log(id) 
        console.log(newTasks)
        setTasks(newTasks)
        setEditItem(null)
    }
    const initValue =JSON.parse(localStorage.getItem('user')) || []
    const [user ,setUser] =useState(initValue)
    useEffect(()=>{
         localStorage.setItem('user',JSON.stringify(user))
    },[user])
    const addUser = (title) => {
        setUser(title)
    }

    return (
    <TaskListContext.Provider value={{
        addTask,
        tasks,
        user,
        editItem,
        addUser,
        setUser,
        setTasks,
        findItem,
        editTask,
        clearTask,
        deleteTask,
        }}>
        {props.children}
    </TaskListContext.Provider>
    )
}

export default Context
