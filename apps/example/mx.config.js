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
      '@': resolvePath('./src')
    },
  },

  setOutput: (config) => {
    config.filename = 'js/[chunkhash:8].index.js';
  },
};
