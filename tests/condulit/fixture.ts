import { test as base, chromium, expect } from "@playwright/test";
import fs from "fs";
import { createRandomUserData } from "../../globalSetup";
import { USERS } from "../../utils/users";
import { RegistrationPage } from "../../apps/condulitApp/ui/pages/RegisterPage";

type MyFixtures = {
  userToLogin: string | undefined;
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
  storageState: async ({ browser }, use) => {
    const storageStatePath = ".auth/storage-state.json";

    const isExist = fs.existsSync(storageStatePath);

    if (!isExist) {
      const page = await browser.newPage();
      const userData = createRandomUserData();
      const registerPage = new RegistrationPage(page);
      await page.goto("https://demo.learnwebdriverio.com/register");
      await registerPage.registerUser(userData);
      await expect(page.locator('[data-qa-id="site-nav"]')).toContainText(
        userData.username
      );

      await page.context().storageState({ path: storageStatePath as string });

      await page.close();
    }

    await use(storageStatePath);
  },
});
