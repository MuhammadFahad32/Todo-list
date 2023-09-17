'use client'

import { useState } from "react";

export default function Home() {
  const [todoList, setTodoList] = useState<any[]>([])
  const [title, setTitle] = useState('');
  const addTask = () => {
    const task = { id: new Date(), name: title, isCompleted: false };

    if (title.length > 0) {
      setTodoList(prev => {
        return [...prev, task]
      })
      setTitle('');
    } else {
      alert('Please enter the Task');
    }
  }
  const updateTask = (id: any) => {
    setTodoList(prev => {
      return prev.map(task => {
        if (task.id == id) {
          return { ...task, isCompleted: !task.isCompleted };
        } else {
          return task;
        }
      });
    })
  }

  const deleteTask = (id: any) => {
    setTodoList(prev => {
      return prev.filter(task => {
        return task.id != id;
      });
    })
  }
  return (
    <>
      <div id="myDIV" className="header">
        <h2 style={{ margin: '5px' }}>My To Do List</h2>

        <input type="text" placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
        <span className="addBtn"
          onClick={() => addTask()}>Add</span>

      </div>

      <ul id="myUL">
        {todoList.map((task: any, key: any) => (
          <li key={key}
            className={task.isCompleted ? 'checked' : ''}
            onClick={() => updateTask(task.id)}
          >{task.name}
            <span className='close'
              onClick={() => deleteTask(task.id)}>x</span>
          </li>
        ))}
      </ul>
    </>
  )
}