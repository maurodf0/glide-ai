import { repositoryName, apiEndpoint } from './slicemachine.config.json';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },

  devtools: { enabled: true },

  app: {
    head: {
      title: 'Glide AI',
      htmlAttrs: {
        lang: 'it',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    }
  },

  css: ['@/assets/css/main.css'],

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/prismic',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxthub/core',
    'nuxt3-lenis',
  ],

  prismic: {
    endpoint: apiEndpoint || repositoryName,
    preview: '/api/preview',
    clientConfig: {
      routes: [
        {
          type: 'page',
          path: '/:uid',
        },
        {
          type: 'page',
          uid: 'home',
          path: '/',
        },
        {
        type: 'case_studies',
        path: '/case-studies/:uid',
        }
      ]
    }
  },

  compatibilityDate: '2025-01-06',
})