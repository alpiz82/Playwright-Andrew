import { expect, type Locator, type Page } from "@playwright/test";

export class OverlappedElementPage {
    readonly page: Page;
    readonly inputId: Locator;
    readonly inputName: Locator;
    readonly inputSubject: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inputId = page.locator("//*[@id='id']");
        this.inputName = page.locator('//*[@id="name"]');
        this.inputSubject = page.locator('//*[@id="subject"]');
    }

    public async fillOverlappedForm() {
        await expect(this.inputId).toBeVisible();
        await this.page.getByPlaceholder('id').fill("15");
        await expect(this.inputName).toBeVisible();
        await this.page.getByPlaceholder('Name').fill("Alonso");
        await expect(this.inputSubject).toBeVisible;
        await this.page.getByPlaceholder('Subject').fill('Que traes chato');

        await expect(
            this.page.getByPlaceholder('id').filter({ hasText: "15" }),
        ).toBeTruthy();

        await expect(
            this.page.getByPlaceholder('Name').filter({ hasText: "Alonso" }),
        ).toBeTruthy();

        await expect(
            this.page.getByPlaceholder('Subject').filter({ hasText: "Que traes chato" }),
        ).toBeTruthy();

    }

    













}