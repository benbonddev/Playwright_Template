import { test, expect } from '@playwright/test';

test('homepage has expected title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('custom config is available', ({}, testInfo) => {
  const custom = (testInfo.config as any).custom;
  expect(custom.envName).toBeDefined();
});
