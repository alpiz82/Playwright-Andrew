import{expect, type Locator, type Page}from "@playwright/test";

export class VisibilityPage {
    readonly page: Page;
    readonly visibilityButtons: Locator;
    readonly btnsTable: Locator;
    readonly hideBtn: Locator;


    constructor (page: Page) {
        this.page = page;
        this.visibilityButtons = page.locator("td button");
        this.btnsTable = page.locator("tbody");
        this.hideBtn = page.locator("button#hideButton.btn.btn-primary");
        

    }

    public async verifyBtnsVisibility() {
        await this.btnsTable.waitFor({ timeout: 5000 });
        const visibilityButtonsLength = await this.visibilityButtons.count();
        console.log(visibilityButtonsLength);
        for (let i = 0; i < visibilityButtonsLength; i++) {
            await this.visibilityButtons.nth(i).isVisible;
       }
    }
    public async clickHideButton() {
        await this.hideBtn.click();
        await this.hideBtn.isHidden();
       
    }












}