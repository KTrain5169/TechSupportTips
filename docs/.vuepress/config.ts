import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {
      resolve: {
        alias: {
          vue: 'vue/dist/vue.esm-bundler.js'
        }
      }
    }
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
})
