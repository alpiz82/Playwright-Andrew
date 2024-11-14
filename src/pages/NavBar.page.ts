import {expect, type Locator, type Page} from "@playwright/test";

export class NavBarPage {
    readonly page: Page;
    readonly homeBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homeBtn = page.locator('[href="/home"/')
    }

    public async clickHomeBtn() {
        await expect(this.homeBtn).toBeVisible();
        await this.homeBtn.click();
    }
}