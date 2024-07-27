import { expect, test } from '@playwright/test';

test('example test', async ({ page }) => {
  console.log('E2E_BASE_URL', process.env.E2E_BASE_URL);
  await page.goto('/'); // Playwright will use the baseURL set in the config
  expect(await page.title()).toBe('Login – Vercel');
});
