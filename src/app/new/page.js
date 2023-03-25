'use client'
import { useState, useEffect } from 'react'
import { useTasks } from '@/context/TasksContext'
import { useRouter } from 'next/navigation'

const Page = ({ params }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
  })
  const { tasks, createTask } = useTasks()
  console.log(params)

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (params.id) {
      console.log('editing')
    } else {
      createTask(task.title, task.description)
    }

    router.push('/')
  }

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id)
      if (taskFound) setTask(taskFound.title, taskFound.description)
    }
  }, [])
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Write a title"
        onChange={handleChange}
        value={task.title}
      />
      <textarea
        name="description"
        placeholder="Write a description"
        onChange={handleChange}
        value={task.description}
      />
      <button>Save</button>
    </form>
  )
}

export default Page
