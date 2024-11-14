import {expect, type Locator, type Page}from "@playwright/test"

export class AjaxDataPage {
    readonly page: Page;
    readonly ajaxButton: Locator;
    readonly dataLoaded: Locator;

    constructor(page: Page) {
        this.page = page;
        this.ajaxButton = page.locator('.btn.btn-primary');
        this.dataLoaded = page.locator('p.bg-success')
        
    }

    public async clickAjaxButton() {
        await this.ajaxButton.click();
        
    }

    public async validateDataLoadedText() {
        await this.dataLoaded.waitFor({timeout:150000})
        await expect(this.dataLoaded).toBeVisible();
        await expect(this.dataLoaded).toHaveText('Data loaded with AJAX get request.');

    }

}