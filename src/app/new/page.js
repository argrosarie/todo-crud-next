'use client'
import { useEffect } from 'react'
import { useTasks } from '@/context/TasksContext'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

const Page = ({ params }) => {
  const { tasks, createTask, updateTask } = useTasks()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data)
      toast.success('Task updated successfully')
    } else {
      createTask(data.title, data.description)
      toast.success('Task created successfully')
    }

    router.push('/')
  })

  const onClick = () => router.push('/')

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id)
      if (taskFound) {
        setValue('title', taskFound.title)
        setValue('description', taskFound.description)
      }
    }
  }, [])
  return (
    <div className="flex justify-center flex-col items-center h-full">
      <form onSubmit={onSubmit} className="bg-gray-700 w-64 h-80 px-4">
        <h2 className="font-semibold text-lg my-3">New task</h2>
        <input
          className="bg-gray-800 py-3 px-4 mb-2 block focus:outline-none w-full"
          placeholder="Write a title"
          {...register('title', { required: true })}
        />
        {errors.title && (
          <span className="block text-red-400 mb-2">
            This field is required
          </span>
        )}
        <textarea
          className="bg-gray-800 py-3 px-4 mb-2 block focus:outline-none w-full"
          placeholder="Write a description"
          {...register('description', { required: true })}
        />
        {errors.description && (
          <span className="block text-red-400 mb-2">
            This field is required
          </span>
        )}
        <div className='flex justify-center items-center space-x-4'>
          <button className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30">
            Save
          </button>
          <button
            onClick={onClick}
            className="bg-red-500 hover:bg-red-400 rounded-sm px-4 py-2"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default Page
