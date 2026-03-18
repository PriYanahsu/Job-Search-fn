import Login from '@/features/Login/Login'
import { Suspense } from 'react'

const page = () => {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[var(--page-bg)]" />}>
      <Login />
    </Suspense>
  )
}

export default page
