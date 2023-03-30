'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useTasks } from '@/context/TasksContext'

export const Navbar = () => {
  const router = useRouter()
  const { tasks } = useTasks()
  return (
    <header className="flex justify-between items-center bg-gray-800 w-screen">
      <div className="flex flex-col my-2 ml-5">
        <Link href="/">
          <h1 className="font-bold text-3xl text-white">El Tasker</h1>
        </Link>
        <span className="text-slate-300 text-sm">{tasks.length} tasks</span>
      </div>
      <div className='mr-3 p-2'>
        <button
          onClick={() => router.push('/new')}
          className="bg-green-500 hover:bg-green-400  text-gray-50 font-bold rounded-sm flex items-center p-2 md:mr-3"
        >
          Add task
        </button>
      </div>
    </header>
  )
}
