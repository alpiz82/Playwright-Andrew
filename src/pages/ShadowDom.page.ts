import{expect, type Locator, type Page}from '@playwright/test';

export class ShadowDomPage {
    readonly page: Page;
    readonly buttonGenerate: Locator;
    readonly buttonCopy: Locator;

    constructor(page: Page) {
        this.page = page;
        this.buttonGenerate = page.locator("i.fa.fa-cog");
        this.buttonCopy = page.locator("");
        
    }

    public async clickAndCopy () {
        //await this.page.getByRole('button', { name: "buttonGenerate"}).click();
       //this.page.getByRole('button').locator().click({position: {x: 9.44, y: 11}});
       // await this.page.locator('button:buttonGenerate').click();
        //await this.page.locator('button').locator('nth=0').click({position: {x: 9.44, y: 11}});
        await this.page.locator('#guid-generator').b
         //("#GUID Generator #buttonGenerate").click();

    }
     


  //  Error: locator.click: Error: strict mode violation: getByRole('button') resolved to 2 elements:
   // 1) <button id="buttonGenerate" class="button-generate">…</button> aka getByRole('button', { name: '' })
   // 2) <button id="buttonCopy" class="button-copy">…</button> aka getByRole('button', { name: '' })




}