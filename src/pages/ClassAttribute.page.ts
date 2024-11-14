import  {expect, type Locator, type Page} from "@playwright/test"

export class ClassAttributePage {
    readonly page: Page;
    readonly btnBlue: Locator;
    readonly btnGreen: Locator;
    readonly btnYellow: Locator;

    constructor(page: Page) {
        this.page = page;
        this.btnBlue = page.locator('.btn-primary');
        this.btnGreen = page.locator('.btn-success');
        this.btnYellow = page.locator('.btn-warning');
    }

    public async checkVisibleBtns() {
        await expect(this.btnBlue).toBeVisible();
        await expect(this.btnGreen).toBeVisible();
        await expect(this.btnYellow).toBeVisible();
    }









}