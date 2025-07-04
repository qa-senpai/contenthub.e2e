import { test as base, Page } from "@playwright/test";
import { PageManager } from "../../apps/souceApp/PageManager";

type Pages = {
  pageManage: PageManager;
};

// lazy fixture

export const test = base.extend<Pages>({
  page: async ({ page }, use) => {
    console.log("page");

    await page.goto("https://www.saucedemo.com/");

    await use(page);
  },

  pageManage: async ({ page }, use) => {
    const pageManage = new PageManager(page);

    await use(pageManage);
  },
});
