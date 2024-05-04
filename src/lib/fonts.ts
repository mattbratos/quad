import {
  JetBrains_Mono as FontMono,
  Roboto_Mono as FontSans,
} from 'next/font/google'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
})

// sometype_mono
// Martian_Mono
