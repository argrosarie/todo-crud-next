import React from 'react'
import {useRouter} from "next/navigation"

const TaskCard = ({ task }) => {
    const router = useRouter()
  return (
    <div onClick={() => {
router.push(`/edit/${task.id}`)
    }}>
      <h1>{task.title}</h1>
      <button>Delete</button>
      <p>{task.description}</p>
    </div>
  )
}

export default TaskCard
