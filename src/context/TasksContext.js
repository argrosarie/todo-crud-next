'use client'
import { createContext, useContext } from 'react'

export const TaskContext = createContext()

export const useTasks = () => {
  const context = useContext(TaskContext)
  if (!context) throw new Error('useTasks must used within a provider')
  return context
}

export const TaskProvider = ({ children }) => {
  const tasks = [{
    id: 1,
    title: "My first task",
    description: "Testing my first task"
  },
  {
    id: 2,
    title: "My second task",
    description: "Testing my second task"
  },
  {
    id: 3,
    title: "My third task",
    description: "Testing my third task"
  }
  
]
  return (
    <TaskContext.Provider
      value={{
        tasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
