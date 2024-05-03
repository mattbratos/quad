import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

import { LandingPage } from '@/components/landing-page'

export default async function Home() {
  const supabase = createServerComponentClient({ cookies })
  const { data: posts } = await supabase.from('posts').select('*, profiles(*)')

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      {/* <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
      </div> */}
      <LandingPage />
    </section>
  )
}
