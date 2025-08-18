import { test, expect } from '@playwright/test';
import type { Page, Locator } from '@playwright/test';

export class NewsPage {
    readonly page: Page;
    readonly cookie: Locator;
    readonly newsSection: Locator;
    readonly newsItems: Locator;
    readonly products: Locator;
    readonly trends: Locator;
    readonly insideUF: Locator;
    readonly text: Locator;
    readonly label1: Locator;
    readonly label2: Locator;
    readonly label3: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cookie = page.getByRole('button', { name: 'Accept all' });
        this.newsSection = page.locator('//h2[@class="mtt-articles__title"]');
        this.products =page.locator('#panel-6-2-0-0').getByText('Products');
        this.trends = page.getByText('Trends');
        this.insideUF = page.getByText('Inside United Fintech');
        this.text = page.locator('//h3[@class="article-card__title"]').first();
        this.label1 = page.getByLabel('2 / 10').getByRole('link').filter({ hasText: /^$/ });
        this.label2 = page.getByLabel('2 / 10').getByRole('link').filter({ hasText: /^$/ });
        this.label3 = page.getByLabel('3 / 10').getByRole('link').filter({ hasText: /^$/ });
    }

    public async goto() {
        await this.page.goto('https://unitedfintech.com/');
    }
}
