import {expect, type Locator, type Page}from "@playwright/test";

export class AlertsPage {
    readonly page: Page;
    readonly alertButton: Locator;
    readonly confirmButton: Locator;
    readonly promptButton: Locator;

    constructor (page: Page) {
        this.page = page;
        this.alertButton = page.locator("//*[@id='alertButton']");
        this.confirmButton = page.locator("//*[@id='confirmButton']");
        this.promptButton = page.locator("//*[@id='promptButton']")

    }

    public async handleAlertButton () {
      
        this.page.on('dialog', async (dialog) => {
            expect(dialog.type()).toContain("alert");
            expect(dialog.message()).toContain("Today is a working day.\nOr less likely a holiday.");

            await dialog.dismiss();

        });

        await this.alertButton.click();
        
    }























}