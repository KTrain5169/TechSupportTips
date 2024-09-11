import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
import { fileURLToPath, URL } from 'url'

export default defineUserConfig({
  base: '/TechSupportTips/', 
  bundler: viteBundler({
    viteOptions: {
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./', import.meta.url)),
        },
      },
    },
  }),
  lang: 'en-US',
  title: 'Your Site Title',
  description: 'Your site description',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
    ],
    sidebar: 'auto',
  }),
  // Remove any custom head links for CSS, as the default theme CSS 
  // should be automatically included
  // head: [
  //   ['link', { rel: 'stylesheet', href: '/styles/index.css' }]
  // ],
})
