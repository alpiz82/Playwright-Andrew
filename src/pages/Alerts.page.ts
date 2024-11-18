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

    };

    public async handleAlertButton () {
      
        this.page.on('dialog', async (dialogWindows) => {
            console.log(dialogWindows.message());
            //expect(dialogWindows.type()).toContain("alert");
            //expect(dialogWindows.message()).toContain("Today is a working day.\nOr less likely a holiday.");

            await dialogWindows.dismiss();

        });

        await this.alertButton.click();
    };

   // page.on('dialog', async dialog => {
   //     console.log(dialog.message());
   //     await dialog.accept();
   //   });

    public async handleConfirmButton () {

        this.page.on('dialog', async dialog => {
            console.log(dialog.message());
            //expect(dialog.type()).toContain("confirm");
            //expect(dialog.message()).toContain("Today is Friday.\nDo you agree?");

            await dialog.defaultValue();
        });

        await this.confirmButton.waitFor({timeout:5000});

        await this.confirmButton.click();

        
    };

























}