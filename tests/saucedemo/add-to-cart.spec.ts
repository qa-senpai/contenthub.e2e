import { expect } from "@playwright/test";
import { LoginPage } from "../../apps/souceApp/LoginPage";
import { USERS } from "../../utils/users";
import { test } from "../saucedemo/fixture";

test.use({ userToLogin: { password: "", username: "" } });

test.describe("all operation as visual user", () => {
  test("1 test login as error user", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    const loginPage = new LoginPage(page);

    await loginPage.login(USERS.product_viewer);
    await productPage.navigate();
    expect(page.locator("")).toBeDisabled();
  });

  for (const user of ["product_admin", "pv"]) {
    test(`Check page as ${user}`, async ({ page }) => {
      await page.goto("https://www.saucedemo.com/");
      const loginPage = new LoginPage(page);

      await loginPage.login(USERS.product_admin);

      if (user === "product_admin") {
        expect();
        expect();
        expect();
        expect();
        expect();
        expect();
      }

      if (user === "pv") {
        expect();
        expect();
        expect();
        expect();
        expect();
        expect();
      }
    });
  }

  test("2 test login as error user", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
  });

  test("3 test login as error user", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
  });

  test("4 test login as error user", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
  });

  test("5 test login as error user", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
  });
});
