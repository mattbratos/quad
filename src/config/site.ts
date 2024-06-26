export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'Quad',
  description:
    'Full Stack Twitter clone with NextJS 14 app router, Shadcn UI, NextAuth, Prisma and Neon ',
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
    {
      title: 'Yo',
      href: '/yo',
    },
  ],
  links: {
    twitter: 'https://twitter.com/mattbratos',
    github: 'https://github.com/mattbratos',
    docs: 'https://mattbratos.com',
  },
}
