import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://coffee-cart.app/");
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.getByRole("textbox", { name: "Name" }).fill("testt");
  await page.getByRole("textbox", { name: "Email" }).click();
  await page.getByRole("textbox", { name: "Email" }).fill("est@g.com");
  await page.getByRole("checkbox", { name: "Promotion checkbox" }).check();
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByRole("button", { name: "Submit" }).click();
});
