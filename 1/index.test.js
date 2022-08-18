const { test, expect } = require('@playwright/test');

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('/');
});

test.afterAll(async () => {
  await page.close();
});

test.describe('layout tests', () => {
  test('header element should be in index.html', async () => {
    const header = page.locator('h1');
    await expect(header).toBeVisible();
  });

  test('The header element must contain the text «Hello, World!»', async () => {
    const header = page.locator('h1');
    await expect(header).toContainText('Hello, World!');
  });
});
