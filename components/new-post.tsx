'use client'

// import { cookies } from 'next/headers'
// import { cookies } from 'next/headers'
import { zodResolver } from '@hookform/resolvers/zod'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'

const formSchema = z.object({
  content: z.string().min(2, {
    message: 'Post must be at least 2 characters.',
  }),
})

export function NewPost() {
  const { toast } = useToast()

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: '',
    },
  })

  // 2. Define a submit handler.
  async function addNewPost(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    const content = String(values.content)
    const supabase = createServerActionClient<Database>({ cookies })
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (user) {
      await supabase.from('posts').insert({ content, user_id: user.id })
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onClick={form.handleSubmit(addNewPost)}>
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="w-full min-h-[150px] p-4 rounded-lg mt-4 "
                    placeholder="What's happening?"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="flex justify-between w-full py-4">
            <div className="flex items-center">
              <span>280</span>
            </div>
            <div className="flex items-center">
              <Button size="sm" type="submit">
                Tweet
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  )
}

// import { cookies } from 'next/headers'
// import { createServerActionClient } from '@supabase/auth-helpers-nextjs'

// import { Button } from '@/components/ui/button'
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormMessage,
// } from '@/components/ui/form'
// import { Textarea } from '@/components/ui/textarea'
// import { ToastAction } from '@/components/ui/toast'
// import { useToast } from '@/components/ui/use-toast'

// export default function NewPost() {
//   const addPost = async (formData: FormData) => {
//     'use server'
//     const content = String(formData.get('content'))
//     const supabase = createServerActionClient<Database>({ cookies })
//     const {
//       data: { user },
//     } = await supabase.auth.getUser()
//     if (user) {
//       await supabase.from('posts').insert({ content, user_id: user.id })
//     }
//   }

//   return (
//     <Form {...form}>
//       <form onClick={form.handleSubmit(addNewPost)}>
//         <FormField
//           control={form.control}
//           name="content"
//           render={({ field }) => (
//             <FormItem>
//               <FormControl>
//                 <Textarea
//                   className="w-full min-h-[150px] p-4 rounded-lg mt-4 "
//                   placeholder="What's happening?"
//                   {...field}
//                 />
//               </FormControl>
//             </FormItem>
//           )}
//         />

//         <div className="flex justify-between w-full py-4">
//           <div className="flex items-center">
//             <span>280</span>
//           </div>
//           <div className="flex items-center">
//             <Button size="sm" type="submit">
//               Tweet
//             </Button>
//           </div>
//         </div>
//       </form>
//     </Form>
//   )
// }
