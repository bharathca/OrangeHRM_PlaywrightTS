import { Page } from '@playwright/test'

export class MenuComponents {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async selectMenuItem(menuItemName: string) {
        await this.page.getByRole('listitem').filter({ hasText: menuItemName }).click();
    }
    getCurrentTopMenuItem(topMenuItem: string) {
        return this.page.getByRole('listitem').filter({ hasText: topMenuItem })
    }
}