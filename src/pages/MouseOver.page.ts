import { expect, type Locator, type Page } from "@playwright/test";

export class MouseOverPage {
    readonly page: Page;
    readonly clickMeOver: Locator;
    readonly clickOn: Locator;
    readonly clickCount: Locator;
    readonly linkButton: Locator;
    readonly clickCountLinkBtn: Locator;


    constructor(page: Page) {
        this.page = page;
        this.clickMeOver = page.locator("a.text-primary");
        this.clickCount = page.locator("span#clickCount.badge.badge-light");
        this.linkButton = page.locator("a.text-primary");
        this.clickCountLinkBtn = page.locator("span#clickButtonCount.badge.badge-light")

    }

    public async overClickMe() {
        await this.clickMeOver.getByText('Click me').hover();
        await this.page.locator('text=Click me').click();
        await this.clickCount.waitFor({ timeout: 5000 });
        await expect(this.clickCount).toHaveCount(1);

    }

    public async linkButtonOverClick() {
        await this.linkButton.getByText('Link Button').hover();
        await this.page.locator('text=Link Button').click();
        await this.clickCountLinkBtn.waitFor({ timeout: 5000 });
        await expect(this.clickCountLinkBtn).toHaveCount(1);
    }

    


}