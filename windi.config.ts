import { defineConfig } from 'windicss/helpers'
import typography from 'windicss/plugin/typography';

export default defineConfig({
	darkMode: 'class',
	plugins: [typography],
  theme: {
    extend: {
      fontFamily: {
        // chewy: ['Chewy', 'serif'], // Custom fonts
      },
    }
  },
})