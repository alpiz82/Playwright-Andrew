import{expect, type Locator, type Page}from "@playwright/test";

export class ClientSideDelayPage {
    readonly page: Page;
    readonly ajaxButton: Locator;
    readonly sucCessText: Locator;

    constructor (page: Page) {
        this.page = page;
        this.ajaxButton = page.locator("#ajaxButton");
        this.sucCessText = page.locator("#content .bg-success");
    }

    public async hitAjaxButton () {
        await this.ajaxButton.click();
    
    }

    public async validateSuccessText() {
        await this.sucCessText.waitFor({timeout:150000});
        await expect(this.sucCessText).toBeVisible();
        await expect(this.sucCessText).toHaveText("Data calculated on the client side.");
    }














}