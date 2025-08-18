import { Page, Locator } from '@playwright/test';

export class CheckAddressPage {
    readonly page: Page;
    readonly cookie: Locator;
    readonly London: Locator;
    readonly NewYork: Locator;
    readonly Copenhagen: Locator;
    readonly Singapore: Locator;
    readonly otherLocations: Locator;
    readonly logo: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cookie = page.getByRole('button', { name: 'Accept all' });
        this.London = page.getByText('London', { exact: true });
        this.NewYork = page.getByText('New York', { exact: true });
        this.Copenhagen = page.getByText('Copenhagen', { exact: true });
        this.Singapore = page.getByText('Singapore', { exact: true });
        this.otherLocations = page.getByText('Other offices');
        this.logo = page.locator('#main_footer').getByRole('link', { name: 'United Fintech Denmark ApS' });
    }

    async navigate() {
        await this.page.goto('https://unitedfintech.com/');
    }
    async goto(url: string) {
        await this.page.goto(url);
    }
}

  