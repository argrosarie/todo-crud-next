import { useRouter } from 'next/navigation'
import { useTasks } from '@/context/TasksContext'

const TaskCard = ({ task }) => {
  const router = useRouter()
  const { deleteTask } = useTasks()
  return (
    <div
      onClick={() => {
        router.push(`/edit/${task.id}`)
      }}
    >
      <h1>{task.title}</h1>
      <button
        onClick={(e) => {
          e.stopPropagation()
          const accept = window.confirm("Are you sure that you want to delete your task?")
          accept && deleteTask(task.id)
          
        }}
      >
        Delete
      </button>
      <p>{task.description}</p>
    </div>
  )
}

export default TaskCard
