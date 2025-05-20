import { defineConfig, devices } from '@playwright/test';
import allure from 'allure-playwright';

export default defineConfig({
  testDir: './tests',
  retries: 0,
  reporter: [ ['list'], [allure, { outputFolder: 'allure-results' }] ],
  use: {
    trace: 'on-first-retry',
  },
});
