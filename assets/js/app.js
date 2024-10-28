import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import {setupLayouts} from 'virtual:generated-layouts'
import pages from '~pages'
import App from './App.vue'
import { Quasar, Notify } from 'quasar'
import quasarLang from 'quasar/lang/fr'

// Import icon libraries
import quasarIconSet from 'quasar/icon-set/svg-material-icons'
import { useMiddleware } from './composables/use-middleware'

const routes = setupLayouts(pages)

const router = createRouter({
    history: createWebHistory(),
    routes
})
useMiddleware(router)
createApp(App).use(
	router
).use(Quasar, {
	plugins: {
		Notify
	},
	config: {notify:{}},
	lang: quasarLang,
	iconSet: quasarIconSet
  }
).use(createPinia()).mount('#app')