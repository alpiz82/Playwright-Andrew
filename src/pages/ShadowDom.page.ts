import{expect, type Locator, type Page}from '@playwright/test';

export class ShadowDomPage {
    readonly page: Page;
    readonly buttonGenerate: Locator;
    readonly buttonCopy: Locator;

    constructor(page: Page) {
        this.page = page;
        this.buttonGenerate = page.locator(".button-generate");
        this.buttonCopy = page.locator("");
        
    }

    public async clickAndCopy () {

        await this.page.locator('.button-generate').waitFor({timeout:5000});
        await this.page.locator('.button-generate').click();

        await this.page.locator('.edit-field').textContent();
        //await this.page.locator('button-copy').waitFor({timeout:5000});
        await this.page.locator('.button-copy').click();

    
        //ncaught TypeError: Cannot read properties of undefined (reading 'writeText')
       //at GuidGenerator.buttonCopy.onclick (shadowdom:53:33)
    
         

    }
     






}