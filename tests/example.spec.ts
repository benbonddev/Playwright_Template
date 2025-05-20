import { test, expect } from '@playwright/test';

test('homepage has expected title', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveTitle(/Playwright/);
});
