import './globals.css'
import { TaskProvider } from '@/context/TasksContext'
import { Navbar } from '@/components/Navbar'

export const metadata = {
  title: 'ToDoList App by Rosario',
  description: 'Next js, Tailwind and Vercel by @argrosarie',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TaskProvider>
          <Navbar/>
          {children}
          </TaskProvider>
      </body>
    </html>
  )
}
