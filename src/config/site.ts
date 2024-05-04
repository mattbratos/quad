export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'Quad',
  description:
    'Full Stack Twitter clone with Supabase, NextJS app router, Shadcn ',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Feed',
      href: '/feed',
    },
    {
      title: 'Author',
      href: '/author',
    },
  ],
  links: {
    twitter: 'https://twitter.com/mattbratos',
    github: 'https://github.com/mattbratos',
    docs: 'https://mattbratos.com',
  },
}
