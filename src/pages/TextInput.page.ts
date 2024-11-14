import {expect, type Locator, type Page} from "@playwright/test";

export class TextInputPage {
    readonly page: Page;
    readonly textInputLink: Locator;
    readonly ButtonTitle: Locator;
    readonly myButtonInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.ButtonTitle = page.locator("#updatingButton.btn.btn-primary");
        this.myButtonInput = page.locator("#newButtonName");
    }

    public async checkButtonTittle() {
        await expect(this.ButtonTitle).toBeVisible();
        await expect(this.ButtonTitle).toHaveId('updatingButton');
    }

    public async fillMyButtonInputAndCheckBlueButtonValue() {
        const inputValue = "ABC"
        await this.myButtonInput.fill(inputValue);
        await this.ButtonTitle.click();
        await expect(this.ButtonTitle).toHaveText(inputValue);
    }






}