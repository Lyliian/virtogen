import { defineConfig } from "vite"
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

const twigRefreshPlugin = {
  name: 'twig-refresh',
  configureServer ({watcher, ws}) {
    watcher.add(resolve('templates/**/*.twig'))
    watcher.on('change', function (path) {
      if (path.endsWith('.twig')) {
        ws.send({
          type: 'full-reload'
        })
      }
    })
  }
}

export default defineConfig({
    plugins: [
        vue({
			template: { transformAssetUrls }
		}),
		quasar({
			sassVariables: './assets/scss/quasar-variables.scss'
		}),
        Pages({
            dirs: [
				{ dir: 'js/pages', baseRoute: '/'}
			]
        }),
        Layouts({
            layoutsDirs: 'js/layouts',
            defaultLayout: 'default'
        }),
        Components({
            dirs: ['js/components']
        }),
        AutoImport({
          imports: [
            'vue',
            'vue-router',
            '@vueuse/head'
          ]
        }),
        twigRefreshPlugin
    ],
    server: {
		origin: 'http://localhost:5173',
		watch: {
			disableGlobbing: false
		}
    },
	root: './assets',
	base: '/build/',
	cacheDir: '../../../var/cache',
    build: {
		target: 'esnext',
		manifest: true,
		assetsDir: '',
		outDir: '../public/build/',
		emptyOutDir: true,
        rollupOptions: {
			output: {
				manualChunks: undefined
			},
            input: {
				'js/styles.js': resolve(__dirname, 'assets/js/styles.js'),
                'js/app.js': resolve(__dirname, 'assets/js/app.js')
            },
        },
    },
});
