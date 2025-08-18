import { Page, Locator } from '@playwright/test';

export class FooterPage {
    readonly page: Page;
    readonly cookie: Locator;   
    readonly cookiePolicy: Locator;
    readonly privacyPolicy: Locator;
    readonly address: Locator;
    readonly linBtn: Locator;
    readonly logoButton: Locator;
    readonly textUF: Locator;
  
    constructor(page: Page) {
        this.page = page;
         this.cookie = page.getByRole('button', { name: 'Accept all' });
        this.cookiePolicy = page.locator('//a[@href="https://unitedfintech.com/cookie-policy/"]');
        this.privacyPolicy = page.locator('//a[@href="https://unitedfintech.com/privacy-policy/"]');
        this.address = page.locator('//div[@class="mtt-footer__bottom-info"]');
        this.linBtn = page.locator('//div[@class="mtt-footer__main-social-media"]');
        this.logoButton = page.getByRole('button', { name: 'Your cookie settings' });
        this.textUF = page.getByText('United Fintech Limited - 73');
    }   

      async goto() {
      await this.page.goto('https://unitedfintech.com/');
    }
}