import { $ } from "@wdio/globals";
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
  /**
   * define selectors using getter methods
   */

  get btnRepository() {
    return $("p.fdx-repository");
  }

  get subMenu() {
    return $("#fdxSubNav");
  }

  get menuItem() {
    return $("#menuMdbStudies");
  }

  get breadcrumbTitle() {
    return $("span.breadcrumb-title");
  }

  get techStudyToggle() {
    return $("#fdxMdbContainerTableItem0MenuToggle");
  }

  get techStudyOptions() {
    return $("#fdxMdbContainerTableItem0View");
  }

  get dataAcquisitionAssetGroup() {
    return $("#dataAcquisitionType");
  }

  get assetsList() {
    return $("#fdxMdbAssetTypeList");
  }

  get formAssets() {
    return $("#FORMTypeView");
  }

  get medicalHistoryForm() {
    // return $("#uuid-c08baa81-1d96-4ce9-bcc1-1a34e05040db2");
    // return $("#opt-2cdb6ff9-726d-4607-8fe4-6b8f24bc5a6a");
    return $(
      "div.renderer div.assetBrowseListItem > div.fdx-form > span.itemTitle > div.fdx-ellipsis > span"
    );
  }

  get btnEditMode() {
    return $("#switchEditMode");
  }

  get btnAddDescription() {
    return $("#editPropsAddEntrydescription");
  }

  get textEditDescription() {
    return $("#assetLocaleEditTextTextareadescription");
  }

  get textEditLocale() {
    return $("#localeInputdescription");
  }

  get btnUpdateDescription() {
    return $("#saveAsset");
  }

  get textDescriptions() {
    return $(".description-assetLocaleEdit textarea");
  }

  get menuUser() {
    return $("#menuUser");
  }

  //   get menuUserLogout() {
  //     return $("#menuUserLogout");
  //   }

  //   get signOutReason() {
  //     return $("div.signOut-reason.ng-scope");
  //   }
}

export default new SecurePage();
