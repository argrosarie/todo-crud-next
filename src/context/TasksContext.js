'use client'
import { createContext, useContext, useState } from 'react'

export const TaskContext = createContext()

export const useTasks = () => {
  const context = useContext(TaskContext)
  if (!context) throw new Error('useTasks must used within a provider')
  return context
}

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'My first task',
      description: 'Testing my first task',
    },
    {
      id: 2,
      title: 'My second task',
      description: 'Testing my second task',
    },
    {
      id: 3,
      title: 'My third task',
      description: 'Testing my third task',
    },
  ])

  const createTask = (title, description) =>
    setTasks([
      ...tasks,
      {
        title,
        description,
        id: 10,
      },
    ])

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
