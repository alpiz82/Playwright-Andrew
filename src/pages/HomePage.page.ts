import {expect, type Locator, type Page} from "@playwright/test";
import { NavBarPage } from "../pages/NavBar.page";
let navBarPage: NavBarPage

export class HomePage {
    readonly page: Page;
    readonly mainTitle: Locator;
    readonly dynamicTableLink: Locator;
    readonly textInputLink: Locator;
    readonly classAttributeLink: Locator;
    readonly hiddenLayerLink: Locator;
    readonly loadDelayLink: Locator;
    readonly ajaxDataLink: Locator;
    readonly sampleAppLink: Locator;
    readonly clientSideDelayLink: Locator;
    readonly verifyTextLink: Locator;
    readonly mouseOverLink: Locator;
    readonly visiBilityLink: Locator;
    readonly scrollBarLink: Locator;
    readonly alertsLink: Locator;
    readonly disableInputLink: Locator;
    readonly animatedButtonLink: Locator;
    readonly overlappedElementLink: Locator;
    readonly shadowDomLink: Locator;
    readonly noneBreackingSpacesLink: Locator;
    readonly progressBarLink: Locator;
    readonly fileUploadLink: Locator;
    


    constructor(page: Page) {
        this.page = page;
        this.mainTitle = page.locator("#title");
        this.dynamicTableLink = page.locator("#overview .container .row:nth-child(3) .col-sm:nth-child(2) a");
        this.textInputLink = page.locator("#overview .container .row:nth-child(2) .col-sm:nth-child(4) a");
        this.classAttributeLink = page.locator("#overview .container .row:nth-child(1) .col-sm:nth-child(2) a");
        this.hiddenLayerLink = page.locator("#overview .container .row:nth-child(1) .col-sm:nth-child(3) a");
        this.loadDelayLink = page.locator("#overview .container .row:nth-child(1) .col-sm:nth-child(4) a");
        this.ajaxDataLink = page.locator("#overview .container .row:nth-child(2) .col-sm:nth-child(1) a");
        this.sampleAppLink = page.locator("#overview .container .row:nth-child(4) .col-sm:nth-child(2) a");
        this.clientSideDelayLink = page.locator("#overview .container .row:nth-child(2) .col-sm:nth-child(2) a");
        this.verifyTextLink = page.locator("#overview .container .row:nth-child(3) .col-sm:nth-child(3) a");
        this.mouseOverLink = page.locator("#overview .container .row:nth-child(4) .col-sm:nth-child(3) a");
        this.visiBilityLink = page.locator("#overview .container .row:nth-child(4) .col-sm:nth-child(1) a");
        this.scrollBarLink = page.locator("#overview .container .row:nth-child(3) .col-sm:nth-child(1) a");
        this.alertsLink = page.locator("#overview .container .row:nth-child(5) .col-sm:nth-child(3) a");
        this.disableInputLink = page.locator("#overview .container .row:nth-child(6) .col-sm:nth-child(2) a");
        this.animatedButtonLink = page.locator("#overview .container .row:nth-child(6) .col-sm:nth-child(1) a");
        this.overlappedElementLink = page.locator("#overview .container .row:nth-child(5) .col-sm:nth-child(1) a");
        this.shadowDomLink = page.locator("#overview .container .row:nth-child(5) .col-sm:nth-child(2) a");
        this.noneBreackingSpacesLink = page.locator("#overview .container .row:nth-child(4) .col-sm:nth-child(4) a");
        this.progressBarLink = page.locator("#overview .container .row:nth-child(3) .col-sm:nth-child(4) a");
        this.fileUploadLink = page.locator("#overview .container .row:nth-child(5) .col-sm:nth-child(4) a");



    }

    public async checkMainTitle() {
        await expect(this.mainTitle).toBeVisible();
        await expect(this.mainTitle).toHaveText('UI Test AutomationPlayground');
    }
    public async clickDynamicTableLink() {
        await this.dynamicTableLink.click();
    }

    public async clickTextInputLink() {
        await this.textInputLink.click();
    }

    public async clickClassAttributeLink() {
        await this.classAttributeLink.click();
    }

    public async clickHiddenLayerLink() {
        await this.hiddenLayerLink.click();
    }

    public async clickLoadDelayLink() {
        await this.loadDelayLink.waitFor({timeout:5000});
        await this.loadDelayLink.click();
    }

    public async clickAjaxDataLink() {
        await this.ajaxDataLink.click();
    }

    public async clickSampleAppLink() {
        await this.sampleAppLink.click();
    }

    public async clickClientSideDelayLink() {
        await this.clientSideDelayLink.click();
    }

    public async clickVerifyTextLink() {
        await this.verifyTextLink.click();
    }

    public async clickMouseOverLink() {
        await this.mouseOverLink.click();
    }

    public async clickVisiBilityLink() {
        await this.visiBilityLink.click();
    }

    public async clickScrollBarLink() {
        await this.scrollBarLink.click();
    }

    public async clickAlertsLink() {
        await this.alertsLink.click();
    }

    public async clickDisableInputLink() {
        await this.disableInputLink.click();
    }

    public async clickAnimatedButtonLink() {
        await this.animatedButtonLink.click();
    }

    public async clickOverlappedElementLink() {
        await this.overlappedElementLink.click();
    }

    public async clickShadowDomLink() {
        await this.shadowDomLink.click();
    }

    public async clickNoneBreackingSpacesLink() {
        await this.noneBreackingSpacesLink.click();
    }

    public async clickProgressBarLink() {
        await this.progressBarLink.click();
    }

    public async clickFileUploadLink() {
        await this.fileUploadLink.click();
    }
















}