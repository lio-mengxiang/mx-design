/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const resolvePath = (r) => path.resolve(__dirname, r);

export default ({ mode }) =>
  defineConfig({
    base: '/',
    resolve: {
      alias: {
        '@': resolvePath('./src'),
        '@mx-design/web/dist/mx-design.css': resolvePath('../../packages/mx-design-web/src/Style/entry.ts'),
        '@mx-design/web': resolvePath('../../packages/mx-design-web/src'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 15000,
      open: '/',
      https: false,
      fs: {
        strict: false,
      },
    },
    plugins: [react()],
    define: {
      'process.env': process.env,
    },
  });
