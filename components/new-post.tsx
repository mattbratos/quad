'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
})

export function NewPost() {
  8 // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
          <FormField
            control={form.control}
            name="username"
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
        </form>
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
      </Form>
    </div>
  )
}

// 'use client'

// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
// import { Button } from '@/components/ui/button'
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card'
// import { Textarea } from '@/components/ui/textarea'

// export function NewPost() {
//   return (
//     <>
//       <Card>
//         <CardHeader>
// <div className="flex items-center gap-3">
//   <Avatar>
//     <AvatarImage alt="@shadcn" src="public/placeholder-avatar.jpg" />
//     <AvatarFallback>SC</AvatarFallback>
//   </Avatar>
//   <div className="flex flex-col">
//     <span className="text-sm font-medium">Shadcn</span>
//     <span className="text-xs">@shadcn</span>
//   </div>
//           </div>
//         </CardHeader>
//         <CardContent>
// <Textarea
//   className="w-full min-h-[150px] p-4 rounded-lg "
//   placeholder="What's happening?"
// />
//         </CardContent>
//         <CardFooter>
// <div className="flex justify-between w-full ">
//   <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
//     <span>280</span>
//     <div className="h-[6px] w-full bg-gray-200 rounded-full dark:bg-gray-600">
//       <div
//         className="h-[6px]"
//         style={{
//           width: '50%',
//         }}
//       />
//     </div>
//   </div>
//   <div className="flex items-center gap-2">
//     <Button size="sm">Tweet</Button>
//   </div>
// </div>
//         </CardFooter>
//       </Card>
//     </>
//   )
// }
