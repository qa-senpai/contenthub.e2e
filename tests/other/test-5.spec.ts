import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  // Recording...
  await page.goto("https://demo.learnwebdriverio.com/login");
  await page.getByRole("textbox", { name: "Email" }).fill("pspa@gg.com");
  await page.getByRole("textbox", { name: "Password" }).fill("1234");
  await page.getByRole("button", { name: "Sign in" }).click();
});
