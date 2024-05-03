import { cache } from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

export const createServerSupabaseClient = cache(() =>
  createServerComponentClient({ cookies })
)

export async function getAuthUser() {
  const supabase = createServerSupabaseClient()
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    console.log({ user })
    return user
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}
