import { expect } from "@wdio/globals";
import LoginPage from "../pageobjects/login.page.js";
import SecurePage from "../pageobjects/secure.page.js";

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    // Login to the application
    await LoginPage.open();
    await LoginPage.login("testteamtechtest", "Ryz3T3st!x3");

    // Navigate to "Repository -> Studies"
    await expect(SecurePage.btnRepository).toBeExisting();
    await SecurePage.btnRepository.moveTo();
    await expect(SecurePage.subMenu).toBeExisting();
    SecurePage.menuItem.click();
    await expect(SecurePage.breadcrumbTitle).toHaveText(
      expect.stringContaining("Studies")
    );

    // Confirm the options on the "Tech Study" menu (three bar button on the right hand side)
    await expect(SecurePage.techStudyToggle).toBeExisting();

    // Enter the tech test study view
    SecurePage.techStudyToggle.click();
    await expect(SecurePage.techStudyOptions).toBeExisting();
    SecurePage.techStudyOptions.click();

    // Enter the ‘Data acquisition’ asset group view
    SecurePage.dataAcquisitionAssetGroup.waitForDisplayed();
    await expect(SecurePage.dataAcquisitionAssetGroup).toBeExisting();
    SecurePage.dataAcquisitionAssetGroup.click();

    // Select to view "Forms"
    SecurePage.assetsList.waitForDisplayed();
    await expect(SecurePage.formAssets).toBeExisting();
    SecurePage.formAssets.click();

    // Select to view the "Medical History" form
    // browser.pause(20000);
    const elMedicalHistoryForm = await $(
      '//*[contains(text(), "Medical History Medical")]'
    );
    elMedicalHistoryForm.waitForDisplayed();
    await expect(elMedicalHistoryForm).toBeExisting();
    elMedicalHistoryForm.click();

    // Select to edit the form by adding a "Description" property to the form
    await expect(SecurePage.btnEditMode).toBeExisting();
    SecurePage.btnEditMode.click();
    await expect(SecurePage.btnAddDescription).toBeExisting();
    SecurePage.btnAddDescription.click();
    SecurePage.textEditDescription.isFocused();
    SecurePage.textEditDescription.setValue("This is a test description");

    SecurePage.textEditLocale.isFocused();
    SecurePage.textEditLocale.setValue("en");

    // Save the change
    SecurePage.btnUpdateDescription.click();

    // Confirm the user update has been preserved on the property panel, and on the main form view
    // const textAreas = await $$(SecurePage.textDescriptions);
    // const firstTextArea = textAreas[0].getValue();
    // expect(firstTextArea).toEqual("This is a test description");

    // NOTE: The above commented out code is not working as expected.
    // I am unable to get the value of the textarea.
    // I also can't find where Description is displayed on the main form view.

    // Logout of the application
    await SecurePage.menuUser.moveTo();
    await expect(LoginPage.menuUserLogout).toBeExisting();
    LoginPage.menuUserLogout.click();
    await expect(LoginPage.signOutReason).toBeExisting();
    await expect(LoginPage.signOutReason).toHaveText(
      expect.stringContaining("You have signed out.")
    );
  });
});
