import {
  defineConfig,
  presetUno,
  presetWebFonts,
} from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  content: {
    filesystem: [
      'layouts/*.html',
      'layouts/**/*.html',
    ],
  },
  presets: [
    presetUno,
    presetWebFonts({
      provider: 'google',
      fonts: {
        kiteone: [
          {
            name: 'Kite One',
            weights: ['400'],
          },
          {
            name: 'sans-serif',
            provider: 'none',
          },
        ],
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
  ],
})
