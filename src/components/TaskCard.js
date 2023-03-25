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
          deleteTask(task.id)
        }}
      >
        Delete
      </button>
      <p>{task.description}</p>
    </div>
  )
}

export default TaskCard
