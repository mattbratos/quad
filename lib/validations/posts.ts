import * as z from 'zod'

export const postSchema = z.object({
  text: z.string().min(3).max(128),
})
