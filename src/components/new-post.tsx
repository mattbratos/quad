// import { cookies } from 'next/headers'
// import { createServerActionClient } from '@supabase/auth-helpers-nextjs'

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
//     <form action={addPost}>
//       <input name="content" className="bg-inherit" />
//     </form>
//   )
// }
