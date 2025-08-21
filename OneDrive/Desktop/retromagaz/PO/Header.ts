import { expect, type Locator, type Page } from '@playwright/test';

export class HeaderPage {
  readonly page: Page;
  readonly logoCheck: Locator;
  readonly searchInput: Locator;
  readonly telegramBtn: Locator;
  readonly instagramBtn: Locator;
  readonly tikTokBtn: Locator;
  readonly numberCheck: Locator;
  readonly text: Locator;
  readonly userLink: Locator;
  readonly likeBtn: Locator;
  readonly otherBtn: Locator;
  readonly playstationBtn: Locator;
  readonly xboxBtn: Locator;
  readonly nintendoBtn: Locator;
  readonly steamdeckBtn: Locator;
  readonly toysBtn: Locator;
  readonly gadgetsBtn: Locator;
  readonly snacksBtn: Locator;
  readonly booksBtn: Locator;
  readonly gamingBtn: Locator;
  readonly othersBtn: Locator;
  readonly stocksBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoCheck = page.locator('//img[@src="/uploads/base_block_medias/47/fb/fsaj8ur36_a6bc850a.png"]')
    this.searchInput = page.locator('//input[@data-ajax="https://retromagaz.com/suggest"]')
    this.telegramBtn = page.locator('.header-socials > a').first();
    this.instagramBtn = page.locator('a:nth-child(2)').first();
    this.tikTokBtn = page.locator('a:nth-child(3)').first();
    this.numberCheck = page.getByRole('banner').getByRole('link', { name: '800 33 41 45' });
    this.text = page.getByText('дзвони безкоштовно');
    this.userLink = page.locator('.user-link > svg').first();
    this.likeBtn = page.locator('.fav-link > svg');
    this.otherBtn = page.locator('a:nth-child(6)').first();
    this.playstationBtn = page.locator('//a[@href="https://retromagaz.com/playstation"]').first();
    this.xboxBtn = page.locator('//a[@href="https://retromagaz.com/xbox"]').first();
    this.nintendoBtn = page.locator('//a[@href="https://retromagaz.com/xbox"]').first();
    this.steamdeckBtn = page.locator('//a[@href="https://retromagaz.com/steam-deck"]').first();
    this.toysBtn = page.locator('//a[@href="https://retromagaz.com/toys"]').first();
    this.gadgetsBtn = page.locator('//a[@href="https://retromagaz.com/toys"]').first();
    this.snacksBtn = page.locator('//a[@href="https://retromagaz.com/smakoliki"]').first();
    this.booksBtn = page.locator('//a[@href="https://retromagaz.com/knigi"]').first();
    this.gamingBtn = page.locator('//a[@href="https://retromagaz.com/pk-geiming"]').first();
    this.othersBtn = page.locator('//a[@href="https://retromagaz.com/inshe"]').first();
    this.stocksBtn = page.locator('//a[@href="https://retromagaz.com/stocks"]').first();
    
  }

  async goto() {
    await this.page.goto('https://retromagaz.com/');
  }
}