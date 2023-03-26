import './globals.css'
import { TaskProvider } from '@/context/TasksContext'
import { Navbar } from '@/components/Navbar'
import { Toaster } from './Toaster'
import { Layout } from '@/components/Layout'

export const metadata = {
  title: 'ToDoList App by Rosario',
  description: 'Next js, Tailwind and Vercel by @argrosarie',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TaskProvider>
          <Navbar />
          <Layout>{children}</Layout>

          <Toaster />
        </TaskProvider>
      </body>
    </html>
  )
}
