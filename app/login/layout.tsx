// import { redirect } from 'next/navigation'

import { getAuthUser } from '@/supabase/server'

interface AuthLayoutProps {
  children: React.ReactNode
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const user = await getAuthUser()

  return <div>{children}</div>
}
