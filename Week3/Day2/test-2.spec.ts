import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://www.leafground.com/select.xhtml');
  await page.getByRole('combobox').first().selectOption('Playwright');
  await page.locator('[id="j_idt87:country_label"]').click();
  await page.getByRole('option', { name: 'Germany' }).click();
  await page.locator('[id="j_idt87:city_label"]').click();
  await page.getByRole('option', { name: 'Berlin' }).scrollIntoViewIfNeeded()
await expect(page.getByRole('combobox').first()).toBeVisible();
await expect(page.getByRole('combobox').first()).toHaveValue('Playwright');
await expect(page.locator('[id="menuform:j_idt41"]')).toMatchAriaSnapshot(`
    - link "":
      - /url: "#"
    `);
await page.getByRole('link').filter({ hasText: 'Misc' }).click();
});