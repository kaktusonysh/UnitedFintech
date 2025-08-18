import { Page, Locator } from '@playwright/test';

export class TopMenu {
    readonly page: Page;
    readonly cookie: Locator;   
    readonly logo: Locator;
    readonly menuItems: Locator;
    readonly contactButton: Locator;
    readonly aboutButton: Locator;
    readonly sellBusinessButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cookie = page.getByRole('button', { name: 'Accept all' });
        this.logo = page.locator('#main_header').getByRole('link', { name: 'United Fintech Denmark ApS' });
        this.menuItems = page.locator('#menu-item-5023 div').nth(2);
        this.contactButton = page.locator('//a[@class="button small white"]');
        this.aboutButton = page.locator('#menu-item-833 div').nth(2);
        this.sellBusinessButton = page.getByRole('link', { name: 'Sell your business' });
    }

    async clickLogo() {
        await this.logo.click();
    }

    async getMenuItemsText(): Promise<string[]> {
        return await this.menuItems.allTextContents();
    }

    async clickMenuItemByText(text: string) {
        await this.page.locator(`nav[aria-label="Main navigation"] ul li a:has-text("${text}")`).click();
    }

    async clickContactButton() {
        await this.contactButton.click();
    }
    async goto() {
    await this.page.goto('https://unitedfintech.com/');
  }
}