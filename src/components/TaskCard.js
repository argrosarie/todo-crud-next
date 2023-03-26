import { useRouter } from 'next/navigation'
import { useTasks } from '@/context/TasksContext'
import { toast } from 'react-hot-toast'

const TaskCard = ({ task }) => {
  const router = useRouter()
  const { deleteTask } = useTasks()
  return (
    <div
      className="bg-gray-700 hover:bg-gray-600 cursor-poiter px-20 py-5 m-2 "
      onClick={() => {
        router.push(`/edit/${task.id}`)
      }}
    >
      <div className='flex justify-between'>
        <h1>{task.title}</h1>
        <button
        className='bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center'
          onClick={(e) => {
            e.stopPropagation()
            const accept = window.confirm(
              'Are you sure that you want to delete your task?',
            )
            if (accept) {
              deleteTask(task.id)
              toast.success('Task deleted successfully')
            }
          }}
        >
          Delete
        </button>
      </div>
      <p className='text-gray-300'>{task.description}</p>
      <span className='text-gray-400 text-xs'>{task.id}</span>
    </div>
  )
}

export default TaskCard
