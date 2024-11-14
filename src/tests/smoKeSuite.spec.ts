import {test} from "@playwright/test";
import {HomePage} from "../pages/HomePage.page";
import {DynamicTablePage} from "../pages/DynamicTables.page";
import { TextInputPage } from "../pages/TextInput.page";
import { ClassAttributePage } from "../pages/ClassAttribute.page";
import { HiddenLayersPage } from "../pages/HiddenLayers.page";
import { LoadDelayPage } from "../pages/LoadDelay.page";
import { AjaxDataPage } from "../pages/AjaxData.page";
import { SampleAppPage } from "../pages/SampleApp.page";
import { ClientSideDelayPage } from "../pages/ClientSideDelay.page";

let homePage : HomePage;
let dynamicTablePage : DynamicTablePage;
let textInputPage : TextInputPage;
let classAttributePage ; ClassAttributePage;
let hiddenLayersPage : HiddenLayersPage;
let loadDelayPage : LoadDelayPage;
let ajaxDataPage : AjaxDataPage;
let sampleAppPage : SampleAppPage;
let clientSideDelayPage : ClientSideDelayPage;


test.describe("Smoke Suite", () => {
  test.beforeEach(async ({page}) => {
    await page.goto('/');
  });

  test("Home Validations", async ({page}) => {
    homePage = new HomePage(page);
    await test.step("it should verify main tittle is visible", async () => {
      await homePage.checkMainTitle();
    });
  });

  test("Dynamic Tables Validation", async ({page}) => {
    homePage = new HomePage(page);
    await test.step("It shouldclick Dynamic Table Option", async () => {
      await homePage.clickDynamicTableLink();
    });
    dynamicTablePage = new DynamicTablePage(page)
    await test.step("It should verify Dynamic table Title is visible", async () => {
      await dynamicTablePage.chechMainTitle();
    });
  })

  test("Text Input Validation", async ({page}) => {
    homePage = new HomePage(page);
    await test.step("It should click Text Input Option", async () => {
      await homePage.clickTextInputLink();
    });
    textInputPage = new TextInputPage(page)
    await test.step("It should verify button is vissible", async () => {
      await textInputPage.checkButtonTittle();
    });
    await test.step("It should input text", async () => {
      await textInputPage.fillMyButtonInputAndCheckBlueButtonValue();
    });
  });

  test("Class Attribute Validation", async ({page}) => {
    homePage = new HomePage(page);
    await test.step("It should click Class Attribute Option", async () => {
      await homePage.clickClassAttributeLink();
    });
    classAttributePage = new ClassAttributePage(page)
    await test.step("It should verify button is visible", async () => {
      await classAttributePage.checkVisibleBtns();
    });
  });

  test("Hidden Layers", async ({page}) => {
    homePage = new HomePage(page);
    await test.step("It should click Hidden Layers", async () => {
      await homePage.clickHiddenLayerLink();
    });
    hiddenLayersPage = new HiddenLayersPage(page)
    await test.step("It should verify button is visible", async () => {
      await hiddenLayersPage.checkBlueButton();
    });
  });

  test("Load Delay", async ({page}) => {
    homePage = new HomePage(page);
    await test.step("It should click and wait", async () => {
      await homePage.clickLoadDelayLink();
    });
    loadDelayPage = new LoadDelayPage(page);
    await test.step("It should verify the button is visible", async () => {
      await loadDelayPage.checkBtnAfterDelay();
    });
  });

  test("Ajax Data", async ({page}) => {
    homePage = new HomePage(page);
    await test.step("It should click on Ajax Data", async () => {
      await homePage.clickAjaxDataLink();
    });
    ajaxDataPage = new AjaxDataPage(page);
    await test.step("It should click the Ajax Button and wait", async () => {
      await ajaxDataPage.clickAjaxButton();
    });
    await test.step("It should validate dataLoaded", async () => {
      await ajaxDataPage.validateDataLoadedText();
  
    });

  });

  test("Sample App", async ({page}) => {
    homePage = new HomePage(page);
    await test.step("It should click on Sample App", async () => {
      await homePage.clickSampleAppLink();
    });
    sampleAppPage = new SampleAppPage(page);
    await test.step("It should fill the form and click on LogIn", async () => {
      await sampleAppPage.fillTheForm();
    });
    await test.step("Validate Welcome text", async () => {
      await sampleAppPage.validateSuccess();
    })
  })

  test("Client Side Delay", async ({page}) => {
    homePage = new HomePage(page);
    await test.step("It should click on Client Side Delay", async () => {
      await homePage.clickClientSideDelayLink();
    });
    clientSideDelayPage = new ClientSideDelayPage(page);
    await test.step("It should click on Ajax Button", async () => {
      await clientSideDelayPage.hitAjaxButton();
    });
    await test.step("It should validate success text", async () => {
      await clientSideDelayPage.validateSuccessText();
    })
  })
    


});