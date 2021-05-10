
import WindiCSS from 'vite-plugin-windicss'
import { minifyHtml, injectHtml } from 'vite-plugin-html';

export default {
  plugins: [
    WindiCSS(),
    minifyHtml(),
    injectHtml({
      injectData: {
        title: 'Starter Template',
        description: 'Starter Template',
      },
    }),
  ],
};