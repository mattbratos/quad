// 'use client'

// import { useRouter } from 'next/navigation'
// import {
//   createClientComponentClient,
//   Session,
// } from '@supabase/auth-helpers-nextjs'

// import { cn } from '@/lib/utils'
// import { Button } from '@/components/ui/button'

// export default function AuthButtonClient({
//   session,
// }: {
//   session: Session | null
// }) {
//   const supabase = createClientComponentClient()
//   const router = useRouter()

//   const handleSignOut = async () => {
//     await supabase.auth.signOut()
//     router.push('/')
//     router.refresh()
//   }

//   const handleSignIn = async () => {
//     await supabase.auth.signInWithOAuth({
//       provider: 'github',
//       options: {
//         redirectTo: 'http://localhost:3000/login',
//       },
//     })
//   }

//   return session ? (
//     <Button onClick={handleSignOut} variant={'ghost'}>
//       Sign out
//     </Button>
//   ) : (
//     <Button onClick={handleSignIn} variant={'ghost'}>
//       Log in
//     </Button>
//   )
// }
