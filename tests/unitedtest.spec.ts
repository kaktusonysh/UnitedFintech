import { test, expect } from '@playwright/test';
import { TopMenu } from '../PO/TopMenu';
// Ensure TopMenu class exists in ../PO/TopMenu and has methods: goto(), cookie, logo, menuItems, contactButton, aboutButton

test('Top level menu', async ({ page }) => {
  const  topmenu = new TopMenu (page);
  await topmenu.goto();
  await topmenu.cookie.click();
  await topmenu.logo.click();
  await topmenu.menuItems.first().click();
  await topmenu.contactButton.click();
  await topmenu.aboutButton.click();
  await topmenu.sellBusinessButton.click();

});
import { FooterPage } from '../PO/Footer';
// Ensure FooterPage class exists in ../PO/Footer and has methods: page, cookie, cookiePolicy, privacyPolicy, address, linBtn

test('Footer links', async ({ page }) => {
  const footer = new FooterPage(page);
  await footer.page.goto('https://unitedfintech.com/');
  await footer.cookie.click();
  await footer.cookiePolicy.click();
  await footer.privacyPolicy.click();
  await footer.address.click();
  await footer.linBtn.click();
  await expect(footer.logoButton).toBeVisible();
  await expect(footer.textUF).toBeVisible();  
});

// Ensure NewsPage class exists in ../PO/News and has methods: goto(), cookie, getNewsTitles(), clickNewsItemByIndex()

import { NewsPage } from '../PO/News';    

test('News page functionality', async ({ page }) => {
  const newsPage = new NewsPage(page);
  await newsPage.goto();
  await newsPage.cookie.click();
  await expect(newsPage.newsSection).toBeVisible();
  await expect(newsPage.products).toBeVisible();
  await expect(newsPage.trends).toBeVisible();
  await expect(newsPage.insideUF).toBeVisible();
  await expect(newsPage.text).toBeVisible();
  await expect(newsPage.label1).toBeVisible();
  await expect(newsPage.label2).toBeVisible();
  await expect(newsPage.label3).toBeVisible();
});

import { LoginPage } from '../PO/Login';
// Ensure LoginPage class exists in ../PO/Login and has methods: goto(), enterUsername(), 
test('Login functionality', async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.cookie.click();
  await loginPage.contactButton.click();
  await loginPage.usernameInput.fill('testuser');
  await loginPage.emailaddressInput.fill('testpassword');
  await loginPage.submitButton.click();
  await loginPage.lastnameInput.fill('testlastname');
  await loginPage.phoneInput.fill('1234567890');
  await loginPage.companyInput.fill('Test Company');
  await expect(loginPage.text).toBeVisible();
});

import {Page,Locator } from '@playwright/test';
import { CheckAddressPage } from '../PO/CheckAddress';
// Ensure TopMenu class exists in ../PO/TopMenu and has methods: goto(), click
test("Check Address", async ({ page }) => {
const checkAddressPage = new CheckAddressPage(page);
await checkAddressPage.goto('https://unitedfintech.com/');
await checkAddressPage.cookie.click();
await checkAddressPage.London.click();
await checkAddressPage.NewYork.click();   
await checkAddressPage.Copenhagen.click();
await checkAddressPage.Singapore.click();
await checkAddressPage.otherLocations.click();
await expect(checkAddressPage.logo).toBeVisible();
});
