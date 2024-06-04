import { test, expect } from '@playwright/test';
// Работоспособность формы логина.
test('check login form functionality', async ({ page }) => {

  await page.goto('http://localhost:5173/login');

  await page.fill('input[name="email"]', 'test@test.com');
  await page.fill('input[name="password"]', 'qwerty123');

  await page.click('button[type="submit"]');

  await page.waitForTimeout(2000);

  expect(page.url()).toBe('http://localhost:5173/');

  expect(await page.isVisible('.header__nav-link--profile')).toBe(true);
  expect(await page.isVisible('.header__favorite-count')).toBe(true);

  await page.click('.header__signout');
  expect(page.url()).toBe('http://localhost:5173/login');

  await page.fill('input[name="email"]', 'fail@mail.ru');
  await page.fill('input[name="password"]', 'qwerty');

  await page.click('button[type="submit"]');

  await page.waitForTimeout(2000);

  await expect(page).toHaveURL('http://localhost:5173/login');
});
