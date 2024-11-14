import {expect, type Locator, type Page} from "@playwright/test";

export class HiddenLayersPage {
    readonly page: Page;
    readonly blueButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.blueButton = page.locator("button#greenButton.btn.btn-success")
    } 

    public async checkBlueButton() {
        await expect(this.blueButton).toBeVisible();
    }




}