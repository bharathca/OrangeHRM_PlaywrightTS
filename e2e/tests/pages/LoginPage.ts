import { Page } from '@playwright/test'

export class LoginPage {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async performLogin(username: string, password: string) {
        await this.page.getByRole("textbox", { name: 'Username' }).fill(username);
        await this.page.getByRole("textbox", { name: 'Password' }).fill(password);
        await this.page.getByRole("button", { name: 'Login' }).click();
    }
    async visit() {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }
    get getDashboardText() {
        return this.page.getByRole("heading", { name: 'Dashboard' });
    }
}  