import { Page } from '@playwright/test'

export class CommonComponentsPage {

    page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async traverseTo(pageText: string) {
        await this.page.getByRole('link', { name: pageText }).click();
    }

    async traverseFromMainNavigation(pageText: string) {
        await this.page.getByRole('listbox').filter({ hasText: pageText }).click();
    }

}