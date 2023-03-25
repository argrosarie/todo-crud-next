"use client"
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export const Navbar = () => {
  const router = useRouter()
  return (
    <header>
      <Link href="/">
        <h1>Task app</h1>
      </Link>

      <div>
        <button onClick={() => router.push('/new')}>Add task</button>
      </div>
    </header>
  )
}
