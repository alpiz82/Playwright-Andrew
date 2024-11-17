import{expect, type Locator, type Page}from "@playwright/test";

export class ScrollBarsPage {
    readonly page: Page;
    readonly hidingButton: Locator;
    readonly scrollBar: Locator;

    constructor (page: Page) {
        this.page = page;
        this.hidingButton = page.locator("button#hidingButton.btn.btn-primary");
        
    };

    public async clickHidingButton () {
        await this.page.getByRole('button').click();
    };

    















}