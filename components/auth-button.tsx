// 'use client'

// import Link from 'next/link'
// import { useRouter } from 'next/navigation'
// import {
//   createClientComponentClient,
//   Session,
// } from '@supabase/auth-helpers-nextjs'

// import { cn } from '@/lib/utils'
// import { Button, buttonVariants } from '@/components/ui/button'

// // export function AuthButton() {
// //   const supabase = createClientComponentClient()
// //   const router = useRouter()

// //   const handleSignOut = async () => {
// //     await supabase.auth.signOut()
// //     router.refresh()
// //   }

// //   const [session, setSession] = useState()

// //   useEffect(() => {
// //     const getSession = async () => {
// //       const { data } = await supabase.auth.getSession()
// //       setSession(data.session
// //     } getSession()
// //     }

// export default function AuthButton({ session }: { session: Session | null }) {
//   const supabase = createClientComponentClient()
//   const router = useRouter()

//   const handleSignOut = async () => {
//     await supabase.auth.signOut()
//     router.refresh()
//   }

//   const handleSignIn = async () => {
//     await supabase.auth.signInWithOAuth({
//       provider: 'github',
//       options: {
//         redirectTo: 'http://localhost:3000/auth/callback',
//       },
//     })
//   }

//   return session ? (
//     <Button
//       onClick={handleSignIn}
//       className={cn(buttonVariants({ size: 'lg', variant: 'ghost' }))}
//     >
//       Log in
//     </Button>
//   ) : (
//     <Button
//       onClick={handleSignIn}
//       className={cn(buttonVariants({ size: 'lg', variant: 'ghost' }))}
//     >
//       Sign out
//     </Button>
//   )
// }
