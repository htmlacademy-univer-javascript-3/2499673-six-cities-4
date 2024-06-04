import { test, expect } from '@playwright/test';
// Работоспособность фильтрации с городами (карточки должны перерисовываться)
test('should change city and update offers list with different offers', async ({ page }) => {

  await page.goto('http://localhost:5173');
  await page.waitForSelector('.locations__list');

  const initialCity = 'Cologne';
  await page.click(`.locations__item-link:has-text("${initialCity}")`);
  await expect(page.locator('.places__found')).toContainText(initialCity);

  const firstCityCards: string[] = [];
  for (const cardElement of await page.locator('.cities__card').all()) {
    const cardTextContent = await cardElement.textContent();
    if (cardTextContent !== null) {
      firstCityCards.push(cardTextContent);
    }
  }
  expect(firstCityCards.length).toBe(20);

  const otherCity = 'Amsterdam';
  await page.click(`.locations__item-link:has-text("${otherCity}")`);
  await expect(page.locator('.places__found')).toContainText(otherCity);

  const secondCityCards: string[] = [];
  const secondCityCardElements = await page.locator('.cities__card').all();
  for (const cardElement of secondCityCardElements) {
    const cardTextContent = await cardElement.textContent();
    if (cardTextContent !== null) {
      secondCityCards.push(cardTextContent);
    }
  }
  expect(secondCityCards.length).toBe(20);

  for (const cardTextContent of firstCityCards) {
    expect(secondCityCards.includes(cardTextContent)).toBe(false);
  }
});
