import { test, expect } from "@playwright/test";

test("register user - should be registered", async ({ page, request }) => {
  await page.goto("https://demo.learnwebdriverio.com/register");

  await page.getByRole("textbox", { name: "Username" }).click();
  await page.getByRole("textbox", { name: "Username" }).fill("psp1234");
  await page.getByRole("textbox", { name: "Email" }).fill("psp1234@gm.com");
  await page.getByRole("textbox", { name: "Password" }).fill("1234");
  await page.getByRole("button", { name: "Sign up" }).click();

  await page.getByRole("button", { name: "Sign up" }).click();
  await page.getByRole("button", { name: "Sign up" }).click();

  await page.getByTestId("layout-header-user-logon").click();

  await expect(page.getByRole("link", { name: "psp123" })).toBeVisible();

  await request.storageState();
});
