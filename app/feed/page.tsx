import { redirect } from 'next/navigation'
import { createClient } from '@/supabase/server'

import { NewPost2 } from '@/components/new-post2'

export default async function Yo() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect('/login')
  }

  const { data: posts } = await supabase.from('posts').select('*, profiles(*)')
  return (
    <section className="container grid items-center ">
      <NewPost2 />
    </section>
  )
}
