import {expect, type Locator, type Page}from "@playwright/test"

export class ProgressBarPage {
    readonly page: Page;
    readonly progressBar: Locator;
    readonly startButton: Locator;
    readonly stopButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.progressBar = page.locator("div#progressBar.progress-bar.bg-info");
        this.startButton = page.locator("button#startButton.btn.btn-primary.btn-test");
        this.stopButton = page.locator("button#stopButton.btn.btn-info.btn-test");
        
    }

    public async clickAndWait() {
        await this.startButton.click();
        //await this.stopButton.waitFor({timeout:40000});
        //await this.stopButton.click();
        //this.progressBar
        //await expect(this.progressBar).toContainText("%75");

        // Get the element handle
        //const elementHandle = this.page.waitForSelector('div#progressBar.progress-bar.bg-info');

        // Assert bounding box for the element
        //const progressBar = await (await elementHandle).getAttribute();
        //expect(progressBar.width).toBe(75);

        // Assert attribute for the element
        //const classNames = await (await elementHandle).getProperty('class="progress"');
        //expect(classNames.getProperty('%75')).toBeTruthy();

        const progressBarLength = await this.progressBar.count();
        console.log(progressBarLength);
        for (let i = 0; i < progressBarLength; i++) {
            await this.progressBar.getByText("%75");
            await this.stopButton.click();
       }


    }













}

