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
import { VerifyTextPage } from "../pages/VerifyText.page";
import { MouseOverPage } from "../pages/MouseOver.page"; 
import { VisibilityPage } from "../pages/Visibility.page";
import { ScrollBarsPage } from "../pages/ScrollBars.page";
import { AlertsPage } from "../pages/Alerts.page";
import { DisabledInputPage } from "../pages/DisabledInput.page";
import { AnimatedButtonPage } from "../pages/AnimatedButton.page";


let homePage : HomePage;
let dynamicTablePage : DynamicTablePage;
let textInputPage : TextInputPage;
let classAttributePage ; ClassAttributePage;
let hiddenLayersPage : HiddenLayersPage;
let loadDelayPage : LoadDelayPage;
let ajaxDataPage : AjaxDataPage;
let sampleAppPage : SampleAppPage;
let clientSideDelayPage : ClientSideDelayPage;
let verifyTextPage : VerifyTextPage;
let mouseOverPage : MouseOverPage;
let visibilityPage : VisibilityPage;
let scrollBarsPage : ScrollBarsPage;
let alertsPage : AlertsPage;
let disableInputPage : DisabledInputPage;
let animatedButtonPage : AnimatedButtonPage;

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
  });

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
    });
  });

  test("Verify Text", async ({page}) => {
    homePage = new HomePage(page);
    await test.step("It should click on Verify Text", async () => {
      await homePage.clickVerifyTextLink();
    });
    verifyTextPage = new VerifyTextPage(page);
    await test.step("It should verify text", async () => {
      await verifyTextPage.verifyText();
    });
  });

  test("Visibility", async ({page}) => {
    homePage = new HomePage(page);
    await test.step("It should click on Visibility Link", async () => {
      await homePage.clickVisiBilityLink();
    });
    visibilityPage = new VisibilityPage(page);
    await test.step("Validate buttons are visible", async ()=> {
      await visibilityPage.verifyBtnsVisibility();
    });
    await test.step("click on Hide Button", async () => {
      await visibilityPage.clickHideButton();
    });
  });

  test("ScrollBars", async ({page})=> {
    homePage = new HomePage(page);
    await test.step("It should click on Scroll Bars Link", async () => {
      await homePage.clickScrollBarLink();
    });
    scrollBarsPage = new ScrollBarsPage(page);
    await test.step("It should clikc on hide button", async () => {
      await scrollBarsPage.clickHidingButton();
    });
  });

  test("Alerts", async ({page}) => {
    homePage = new HomePage(page);
    await test.step("It should cick on Alert Link", async () => {
      await homePage.clickAlertsLink();
    });
    alertsPage = new AlertsPage(page);
    await test.step("It shoudl click alert and execute the popup window", async () => {
      await alertsPage.handleAlertButton();
    });
    await test.step("It should click confirm and execute the popup windows", async () => {
      await alertsPage.handleConfirmButton();
    });
    await test.step("It should click prompt and execute the popup window", async () => {
      await alertsPage.handlePromptButton();
    });
  });

  test("Disable Input", async ({page}) => {
    homePage = new HomePage(page);
    await test.step("It should click on Disable Input Link", async () => {
      await homePage.clickDisableInputLink();
    });
    disableInputPage = new DisabledInputPage(page);
    await test.step("It should click enable input and wait to input text", async () => {
      await disableInputPage.enableFielText();
    });
  });

  test("Animated Button", async ({page}) => {
    homePage = new HomePage(page);
    await test.step("It should click on Animated Button", async () => {
      await homePage.clickAnimatedButtonLink();
    });
    animatedButtonPage = new AnimatedButtonPage(page);
    await test.step("It should click on Start Animation button and wait to click on animated button", async () => {
      await animatedButtonPage.startAnimatedBtns();
    });
  });

  test("Mouse Over", async ({page}) => {
    homePage = new HomePage(page);
    await test.step("It should click on Mouse Over Link", async () => {
      await homePage.clickMouseOverLink();
    });
    mouseOverPage = new MouseOverPage(page);
    await test.step("It should over and then click on the Link", async () => {
      await mouseOverPage.overClickMe();
    });
    await test.step("It should over and then click on Link button", async () => {
      await mouseOverPage.linkButtonOverClick();

    })
  });

  







    

});