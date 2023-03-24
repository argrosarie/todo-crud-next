'use client'
import { useState } from 'react'

const Page = () => {
  const [task, setTask] = useState()

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value })

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(task)
    }
  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Write a title" onChange={handleChange} />
      <textarea
        name="description"
        placeholder="Write a description"
        onChange={handleChange}
      />
      <button>Save</button>
    </form>
  )
}

export default Page
