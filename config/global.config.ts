import { defineConfig, devices, PlaywrightTestConfig } from '@playwright/test';

export interface CustomConfig {
  envName: string;
  apiUrl: string;
  userId: string;
}

const config = defineConfig({
  testDir: 'tests',
  timeout: 30000,
  expect: { timeout: 5000 },
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: [['html', { open: 'never' }], ['junit', { outputFile: 'results.xml' }]],
  use: {
    trace: 'on-first-retry',
    baseURL: 'https://playwright.dev',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
}) as PlaywrightTestConfig & { custom: CustomConfig };

(config as any).custom = {
  envName: 'global',
  apiUrl: 'https://api.example.com',
  userId: 'global-user',
};

export default config;
