'use client'

import { useState } from "react";

export default function Home() {
  const [todoList, setTodoList] = useState<any[]>([])
  const [title, setTitle] = useState('');
  const addTask = () => {
    const todo = { id: new Date(), name: title, isCompleted: false };

    if (title.length > 0) {
      setTodoList(prev => {
        return [...prev, todo]
      })
      setTitle('');
    } else {
      alert('Please enter the Task');
    }
  }
  const updateTask = (id: any) => {
    setTodoList(prev => {
      return prev.map(todo => {
        if (todo.id == id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        } else {
          return todo;
        }
      });
    })
  }

  const deleteTask = (id: any) => {
    setTodoList(prev => {
      return prev.filter(todo => {
        return todo.id != id;
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
        {todoList.map((todo: any, key: any) => (
          <li key={key}
            className={todo.isCompleted ? 'checked' : ''}
            onClick={() => updateTask(todo.id)}
          >{todo.name}
            <span className='close'
              onClick={() => deleteTask(todo.id)}>x</span>
          </li>
        ))}
      </ul>
    </>
  )
}