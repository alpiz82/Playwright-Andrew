import {expect, type Locator, type Page} from "@playwright/test";

export class DynamicTablePage {
    readonly page: Page;
    readonly mainTitle: Locator;


    constructor(page: Page) {
        this.page = page;
        this.mainTitle = page.locator(".container h3");
    }

    public async chechMainTitle() {
        await expect(this.mainTitle).toBeVisible();
        await expect(this.mainTitle).toHaveText('Dynamic Table');
    }
    
}