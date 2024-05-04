import { Database as DB } from '@/types/db'

declare global {
  type Database = DB
}

export interface Post {
  content: string
  created_at: string
  id: string
  user_id: string
}

// export interface User {
//   created_at: string | null
//   email: string | null | undefined
//   email_verified: string | null
//   id: string
//   image: string | null
//   name: string | null
//   stripe_current_period_end: string | null
//   stripe_customer_id: string | null
//   stripe_price_id: string | null
//   stripe_subscription_id: string | null
//   updated_at: string | null
// }
