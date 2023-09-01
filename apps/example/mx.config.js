// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const resolvePath = (r) => path.resolve(__dirname, r);

module.exports = {
  entries: {
    index: {
      entry: ['./src/index.tsx'],
      template: './index-webpack.html',
      favicon: './favicon.ico',
    },
  },
  resolve: {
    alias: {
      '@': resolvePath('./src'),
      // '@mx-design/web/dist/mx-design.css': resolvePath('../../packages/mx-design-web/src/Style/entry.less'),
      // '@mx-design/web': resolvePath('../../packages/mx-design-web/src'),
    },
  },

  setOutput: (config) => {
    config.filename = 'js/[chunkhash:8].index.js';
  },
  setConfig: (config) => {
    if (config.mode === 'production') config.output.publicPath = '/mx-design/';
  },
};
