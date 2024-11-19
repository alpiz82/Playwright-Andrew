import{expect, type Locator, type Page}from "@playwright/test";

export class AnimatedButtonPage {
    readonly page: Page;
    readonly startAnimationBtn: Locator;
    readonly animatedButton: Locator;


    constructor (page: Page) {
        this.page = page;
        this.startAnimationBtn = page.locator("//*[@id='animationButton']");
        this.animatedButton = page.locator("//*[@id='movingTarget']");


    }

    public async startAnimatedBtns() {
        await this.startAnimationBtn.click();
        await this.animatedButton.waitFor({timeout:5000});
        await this.animatedButton.click();
    }



























}