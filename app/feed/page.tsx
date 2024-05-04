import { redirect } from 'next/navigation'

import { NewPost2 } from '@/components/new-post2'

export default async function Yo() {
  return (
    <section className="container grid items-center ">
      <NewPost2 />
    </section>
  )
}
