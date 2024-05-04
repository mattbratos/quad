// import { redirect } from 'next/navigation'

// export default async function Yo() {
//   const supabase = createClient()

//   const {
//     data: { user },
//   } = await supabase.auth.getUser()

//   if (!user) {
//     return redirect('/login')
//   }

//   const { data: posts } = await supabase.from('posts').select('*, profiles(*)')
//   return (
//     <section className="container grid items-center ">
//       <NewPost2 />
//     </section>
//   )
// }
