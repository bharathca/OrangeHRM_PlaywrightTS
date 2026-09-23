import { Page } from '@playwright/test'
import { Env } from './frameworkConfigurations/Env';


export class LoginPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async performLogin() {
        await this.page.getByRole("textbox", { name: 'Username' }).fill(Env.USERNAME);
        await this.page.getByRole("textbox", { name: 'Password' }).fill(Env.PASSWORD);
        await this.page.getByRole("button", { name: 'Login' }).click();
    }
    async visit() {
        await this.page.goto(Env.BASE_URL);
    }
    get getDashboardText() {
        return this.page.getByRole("heading", { name: 'Dashboard' });
    }
}  