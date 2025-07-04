import { test, expect, request, Page } from "@playwright/test";
import { RegistrationPage } from "../condulitApp/pages/RegisterPage";
import { HomePage } from "../condulitApp/pages/HomePage";
import { BasePage } from "../condulitApp/pages/BasePage";

test("test", async ({ page }) => {
  const registerPage = new RegistrationPage(page);
  const homePage = new HomePage(page);
  const basePage = new BasePage(page);

  await registerPage.header.clickOnHome();
  await registerPage.footer.clickOnLogo();

  await registerPage.reload();
});
