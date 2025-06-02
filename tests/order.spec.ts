import { test, expect } from "@playwright/test";

// PascalCase
// camelCase
// UPPER_CASE
// kebab-case
// snake_case_is_awesome

// test, check, verify, validate
// use prefixes MQA-1215

// фікстури fixture

test(
  "MQA-1215 order should be created",
  { tag: ["@smoke", "@regression"] },
  async ({ page }) => {
    await page.goto("https://coffee-cart.app/");

    await page.on("popup", async (page) => {
      await page.locator("").click();
    });

    await page.waitForTimeout(45_000);

    await page.locator('[data-test="Espresso"]').click();
    await page.locator('[data-test="Espresso"]').click();
    await page.locator('[data-test="Espresso"]').click();

    await page.locator('[data-test="Cappuccino"]').click();
    await page.locator('[data-test="Espresso"]').click();
    await page.locator('[data-test="Americano"]').click();
    await page.locator("li:nth-child(7) > div > .cup > .cup-handler").click();
    await page.locator('[data-test="Americano"]').click();
    await page.locator('[data-test="checkout"]').click();
    await page.getByRole("textbox", { name: "Name" }).fill("test@gm.com");
    await page.getByRole("textbox", { name: "Name" }).press("Tab");
    await page.getByRole("textbox", { name: "Email" }).fill("12141@cm.gm");
    await page.getByLabel("Promotion message").click();
    await page.getByRole("button", { name: "Submit" }).click();

    // await page.locator("").waitFor({ state: "visible" });
  }
);
