import { expect, type Locator, type Page } from "@playwright/test";

export class LoadDelayPage {
    readonly page: Page;
    readonly btnAfterDelay: Locator;

    constructor(page: Page) {
        this.page = page;
        this.btnAfterDelay = page.locator("button.btn.btn-primary")
    }

    public async checkBtnAfterDelay() {
        await expect(this.btnAfterDelay).toBeVisible();
    }

















}