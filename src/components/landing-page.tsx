import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

// import { HireMe } from '@/components/hire-me'

export function LandingPage() {
  return (
    <main className='flex-1'>
      <section className='w-full py-12 md:pb-48 lg:pb-64 xl:pb-96 '>
        <div className='container px-4 md:px-6'>
          <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
            <img
              alt='Quad Hero'
              className='mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square'
              height='550'
              src='/placeholder.svg'
              width='550'
            />

            <div className='flex flex-col justify-center space-y-4'>
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                  Quad - A Twitter Clone Built with Next.js
                </h1>
                <p className='max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl'>
                  Quad is a modern, minimalist Twitter clone built with the
                  latest web technologies, including Next.js App Router, Shadcn
                  UI, Tailwind CSS, TypeScript, and Supabase.
                </p>
              </div>
              <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                <Link
                  className='inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
                  href='#'
                >
                  Try Quad
                </Link>
                <Link
                  className='inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300'
                  href='#'
                >
                  View on GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className='w-full border-b border-t py-12 md:py-24 lg:py-32'
        id='features'
      >
        <div className='container px-4 md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <div className='space-y-2'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                What makes Quad special?
              </h2>
              <p className='max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Quad is designed to be a minimalist, yet powerful Twitter clone
                that focuses on the core features you need.
              </p>
            </div>
          </div>
          <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
            <img
              alt='Quad Features'
              className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last'
              height='310'
              src='/placeholder.svg'
              width='550'
            />
            <div className='flex flex-col justify-center space-y-4'>
              <ul className='grid gap-6'>
                <li>
                  <div className='grid gap-1'>
                    <h3 className='text-xl font-bold'>Minimalist Design</h3>
                    <p className='text-gray-500 dark:text-gray-400'>
                      Quad&apos;s clean and modern design focuses on the
                      essentials, making it easy to use and navigate.
                    </p>
                  </div>
                </li>
                <li>
                  <div className='grid gap-1'>
                    <h3 className='text-xl font-bold'>
                      Real-time Interactions
                    </h3>
                    <p className='text-gray-500 dark:text-gray-400'>
                      Quad uses Supabase&apos;s real-time features to provide a
                      seamless and responsive user experience.
                    </p>
                  </div>
                </li>
                <li>
                  <div className='grid gap-1'>
                    <h3 className='text-xl font-bold'>
                      Open-source and Customizable
                    </h3>
                    <p className='text-gray-500 dark:text-gray-400'>
                      Quad is built with open-source technologies, making it
                      easy to customize and extend to fit your needs.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full py-12 md:py-24 lg:py-32' id='tech'>
        <div className='container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
              Built with the latest web technologies
            </h2>
            <p className='max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              Quad is built with a modern tech stack, including Next.js App
              Router, Shadcn UI, Tailwind CSS, TypeScript, and Supabase.
            </p>
          </div>
          <div className='flex flex-col gap-2 min-[400px]:flex-row lg:justify-end'>
            <Link
              className='inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
              href='#'
            >
              Learn about Next.js
            </Link>
            <Link
              className='inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300'
              href='#'
            >
              Explore Shadcn UI
            </Link>
          </div>
        </div>
      </section>
      <section className='w-full border-t py-12 md:py-24 lg:py-32' id='cta'>
        <div className='container grid items-center justify-center gap-4 px-4 text-center md:px-6'>
          <div className='space-y-3'>
            <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
              Try Quad today
            </h2>
            <p className='mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              Quad is open-source and available for you to try out. Sign up and
              start using the latest Twitter clone built with modern web
              technologies.
            </p>
          </div>
          <div className='mx-auto w-full max-w-sm space-y-2'>
            <form className='flex space-x-2'>
              <Input
                className='max-w-lg flex-1'
                placeholder='Enter your email'
                type='email'
              />
              <Button type='submit'>Sign Up</Button>
            </form>
            <p className='text-xs text-gray-500 dark:text-gray-400'>
              Sign up to get started with Quad.
              <Link className='underline underline-offset-2' href='#'>
                View on GitHub
              </Link>
            </p>
          </div>
        </div>
      </section>
      {/* <HireMe /> */}
    </main>
  )
}

function SquareIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <rect width='18' height='18' x='3' y='3' rx='2' />
    </svg>
  )
}
