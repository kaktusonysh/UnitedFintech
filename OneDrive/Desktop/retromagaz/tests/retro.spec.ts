import { test, expect } from '@playwright/test';
import { HeaderPage } from '../PO/Header';
import { log } from 'console';

test('HeaderCheck', async ({ page }) => {
  const headerPage = new HeaderPage(page);
  await headerPage.goto();
  
  const popup = page.locator('//div[@class="cl-dialog-close-icon"]');
  if (await popup.isVisible()) {
  await popup.click();
  }
  
  await expect(headerPage.logoCheck).toBeVisible();
  await expect(headerPage.searchInput).toBeVisible();
  await expect(headerPage.telegramBtn).toBeVisible();
  await expect(headerPage.instagramBtn).toBeVisible();
  await expect(headerPage.instagramBtn).toBeVisible();
  await expect(headerPage.numberCheck).toBeVisible();
  await expect(headerPage.text).toBeVisible();
  await expect(headerPage.userLink).toBeVisible();
  await expect(headerPage.likeBtn).toBeVisible();
  await expect(headerPage.otherBtn).toBeVisible();
  await expect(headerPage.playstationBtn).toBeVisible();
  await expect(headerPage.xboxBtn).toBeVisible();
  await expect(headerPage.nintendoBtn).toBeVisible();
  await expect(headerPage.steamdeckBtn).toBeVisible();
  await expect(headerPage.toysBtn).toBeVisible();
  await expect(headerPage.gadgetsBtn).toBeVisible();
  await expect(headerPage.snacksBtn).toBeVisible();
  await expect(headerPage.booksBtn).toBeVisible();
  await expect(headerPage.gamingBtn).toBeVisible();
  await expect(headerPage.othersBtn).toBeVisible();
  await expect(headerPage.stocksBtn).toBeVisible();

});


