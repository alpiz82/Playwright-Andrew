import{expect, type Locator, type Page}from "@playwright/test"

export class NoneBreackingSpacesPage {
    readonly page: Page;
    readonly myButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.myButton = page.locator('body > section > div > button');
    }

    public async clickMyButton() {
        await expect(this.myButton).toBeVisible();
        await this.myButton.click();
    }








}