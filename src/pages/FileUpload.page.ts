import {expect, type Locator, type Page} from "@playwright/test";



export class FileUploadPage {
    readonly page: Page;
    readonly browseButton: Locator;



    constructor (page: Page) {
        this.page = page;
        this.browseButton = page.locator('.browse-btn');


    }

    public async clickBrowseButton() {
        
        //await this.browseButton.click();
        //await this.browseButton.waitFor({timeout:5000});
       // await this.page.setInputFiles('input[type="file"]', [
       //     'Download/morty.jpeg',

        //])
        //await expect(this.page.locator('p.name').nth(0)).toHaveText('morty.jpeg')
        //await this.page.locator('document-uploader upload-box').setInputFiles("/Users/alonsopizarro/Downloads/morty.jpeg");

        //const fileChooserPromise = this.page.click('//*[@id="root"]/div/section/div/label');
        //await this.page.getByLabel('browse'), ({ name: 'Browse files' })
        //const fileChooser = await fileChooserPromise;
        //await fileChooser.setInputFiles('./Users/alonsopizarro/Downloads/morty.jpeg');

        await this.page.locator("input[button='Choose Files']").setInputFiles("/Users/alonsopizarro/Desktop/TEST.pdf");

        await this.page.waitForTimeout(5000);

    }






}