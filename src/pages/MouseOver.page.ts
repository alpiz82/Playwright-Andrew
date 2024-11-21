import{expect, type Locator, type Page}from "@playwright/test";

export class MouseOverPage {
    readonly page: Page;
    readonly clickMeOver: Locator;
    readonly clickOn: Locator;


    constructor (page: Page) {
        this.page = page;
        this.clickMeOver = page.locator("a.text-primary");
        this.clickOn = page.locator("");

    }

    public async overClickMe() {
        await this.clickMeOver.getByText('Click me').hover();
        await this.clickOn.getByTitle('Active Link').click();//fail 
        
    }

    


}