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
      '@mx-design/theme': resolvePath('./node_modules/@mx-design/theme/esm')
    },
  },

  setOutput: (config) => {
    config.filename = 'js/[chunkhash:8].index.js';
  },
  setRules: (rules) => {
    rules[1].exclude = undefined;
    rules[3].exclude = undefined;
  },
};
