import { LoginPage } from "../../apps/souceApp/LoginPage";
import { USERS } from "../../utils/users";
import { test } from "../saucedemo/fixture";

test.use({ userToLogin: USERS.STANDARD_USER });

test("test login", async ({ page, users }) => {
  // const loginPage = new LoginPage(page);

  await page.goto("https://www.saucedemo.com/");
});

test.use({ userToLogin: USERS.visual_user });

test("test login as error user", async ({ page, users }) => {
  // const loginPage = new LoginPage(page);

  await page.goto("https://www.saucedemo.com/");
});
