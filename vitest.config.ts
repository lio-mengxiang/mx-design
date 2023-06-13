/**
 * @zh 单元测试配置文件。暂时没有做单元测试，后续会补上，此文件后续会修改
 * @en Unit test configuration file.There is no unit test for the time being, it will be added later, and this file will be modified later
 */

// import path from 'path';
import { defineConfig } from 'vitest/config';
import type { InlineConfig } from 'vitest';

const testConfig: InlineConfig = {
  /**
   * @zh 匹配包含测试文件的 glob 规则
   * @en Match glob rules containing test files
   */
  include: ['src/**/__tests__/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  /**
   * @zh 默认情况下，vitest 不显式提供全局 API。如果你更倾向于使用类似 jest 中的全局 API，
   * 可以将 --globals 选项传递给 CLI 或在配置中添加 globals: true
   * @en By default, vitest does not provide a global API explicitly. If you prefer to use a global API like in jest,
   * Can pass --globals option to CLI or add globals: true to config
   */
  globals: true,
  /**
   * @zh 在node端模拟dom环境
   * @en Simulate the dom environment on the node side
   */
  environment: 'jsdom',
  testTimeout: 16000,
  transformMode: {
    web: [/\.[jt]sx$/],
  },
  coverage: {
    provider: 'istanbul',
    reporter: ['text', 'json', 'html'],
    reportsDirectory: 'test/coverage',
  },
};

export default defineConfig({
  resolve: {
    // alias: {
    //   'mx-react/es': path.resolve(__dirname, './src/'),
    //   'mx-react': path.resolve(__dirname, './src/'),
    //   '@test/utils': path.resolve(__dirname, './test/utils'),
    // },
  },
  test: testConfig,
});
