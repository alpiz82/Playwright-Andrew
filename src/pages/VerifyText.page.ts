import{expect, type Locator, type Page}from "@playwright/test";

export class VerifyTextPage {
    readonly page: Page;
    readonly welcomeUser: Locator;
 
    constructor(page: Page) {
        this.page = page;
        this.welcomeUser = page.locator("div.bg-primary span.badge-secondary");
    }

    public async verifyText() {
        await expect(this.welcomeUser).toBeVisible
        await expect(this.welcomeUser).toHaveText("Welcome UserName!")

    }





















}