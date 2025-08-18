import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly cookie: Locator;
    readonly contactButton: Locator;
    readonly usernameInput: Locator;
    readonly emailaddressInput: Locator;
    readonly submitButton: Locator;
    readonly lastnameInput: Locator;
    readonly phoneInput: Locator;
    readonly companyInput: Locator;
    readonly text: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cookie = page.getByRole('button', { name: 'Accept all' });
        this.contactButton = page.getByRole('link', { name: 'Contact us', exact: true })
        this.usernameInput = page.getByRole('textbox', { name: 'First Name *' });
        this.emailaddressInput = page.getByRole('textbox', { name: 'Email Address *' })
        this.submitButton = page.getByText('By submitting this form, you');
        this.lastnameInput = page.getByRole('textbox', { name: 'Last Name *' });
        this.phoneInput = page.getByRole('textbox', { name: 'Phone Number *' });
        this.companyInput = page.getByRole('textbox', { name: 'Company Name *' });
        this.text = page.getByText('Look to understand your');
    }

    async goto() {
        await this.page.goto('https://unitedfintech.com/');
    }

    async enterUsername(username: string) {
        await this.page.fill('input[name="username"]', username);
    }

    async enterPassword(password: string) {
        await this.page.fill('input[name="password"]', password);
    }

    async submit() {
        await this.page.click('button[type="submit"]');
    }

    async login(username: string, password: string) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.submit();
    }
}