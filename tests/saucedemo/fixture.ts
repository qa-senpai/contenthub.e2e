import { test as base, chromium, expect } from "@playwright/test";
import fs from "fs";
import { createRandomUserData } from "../../globalSetup";
import { USERS } from "../../utils/users";
import { LoginPage } from "../../apps/souceApp/LoginPage";

type MyFixtures = {
  userToLogin: { username: string; password: string };

  users: {
    STANDARD_USER: string;
    locked_out_user: string;
    problem_user: string;
    performance_glitch_user: string;
    error_user: string;
    visual_user: string;
  };
};

export const test = base.extend<MyFixtures>({
  userToLogin: undefined,
  users: USERS,
  storageState: async ({ browser, userToLogin }, use) => {
    if (userToLogin) {
      const storageStatePath = `.auth/${userToLogin}.json`;

      const isExist = fs.existsSync(storageStatePath);

      if (!isExist) {
        const page = await browser.newPage();
        const loginPage = new LoginPage(page);

        await page.goto("https://www.saucedemo.com/");
        await loginPage.login(userToLogin.username!);
        await expect(
          page.locator('[data-test="shopping-cart-link"]')
        ).toBeVisible();

        await page.context().storageState({ path: storageStatePath as string });

        await page.close();
      }

      await use(storageStatePath);
    } else use(undefined);
  },
});
