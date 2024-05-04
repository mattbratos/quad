import prisma from '@/lib/prisma'

async function getData() {
  const posts = await prisma.post.findMany()
  return { posts }
}

export default async function Yo() {
  const { posts } = await getData()
  return (
    <section className='container grid items-center gap-6 pb-8 pt-6 md:py-10'>
      <div className='flex max-w-[980px] flex-col items-start gap-2'>
        <h1 className='text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl'>
          Yo
        </h1>
        <div>
          {' '}
          {posts.map((post) => (
            <div key={post.id}> Title: {post.title}</div>
          ))}{' '}
        </div>
      </div>
    </section>
  )
}

// <div key={post.id}> Title: {post.title}</div>
