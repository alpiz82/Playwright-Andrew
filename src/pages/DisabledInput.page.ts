import { expect, type Locator, type Page } from "@playwright/test";

export class DisabledInputPage {
    readonly page: Page;
    readonly enableField: Locator;
    readonly inputField: Locator;


    constructor(page: Page) {
        this.page = page;
        this.enableField = page.locator("button#enableButton.btn.btn-primary");
        this.inputField = page.locator("input#inputField.form-control");
    }

    public async enableFielText() {
        const inputValue = "Alonso"
        await this.enableField.click();
        await this.inputField.waitFor({ timeout: 5000 });
        await this.inputField.fill(inputValue);
        await expect(this.inputField).toBeEditable();


    }











}