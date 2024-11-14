import {expect, type Locator, type Page} from "@playwright/test";

export class SampleAppPage {
    readonly page: Page
    readonly userName: Locator;
    readonly passWord: Locator;
    readonly logInBtn: Locator;
    readonly sucCess: Locator;

    constructor (page: Page) {
        this.page = page;
        this.userName = page.locator('73c767e9-a240-ea59-fec1-e3ae1b158723');
        this.passWord = page.locator('935aea61-eaae-a8e2-c9e7-b47f67a9db2c');
        this.logInBtn = page.locator(".col-sm-4 .btn")
        this.sucCess = page.locator(".col-sm-4 .text-success")
    }


    public async fillTheForm() {
        await this.page.getByPlaceholder("User Name").fill("Alonso");
        await this.page.getByPlaceholder("********").fill("pwd");
        await this.logInBtn.click();
    }

    public async validateSuccess() {
        await expect(this.sucCess).toHaveText("Welcome, Alonso!");
    }



















}