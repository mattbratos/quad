// 'use client'

// import { useRouter } from 'next/navigation'
// import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

// export default function Likes({ post }) {
//   console.log(post)

//   const handleLikes = async () => {
//     const supabase = createClientComponentClient()
//     const router = useRouter()

//     const {
//       data: { user },
//     } = await supabase.auth.getUser()

//     if (user) {
//       await supabase
//         .from('likes')
//         .insert({ user_id: user.id, post_id: post.id })
//       router.refresh()
//     }
//   }
//   return <button onClick={handleLikes}>{post.like?.length || 0} Likes</button>
// }
