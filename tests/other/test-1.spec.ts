import { test, expect, chromium } from "@playwright/test";

/*
test("test", async ({ page }) => {
  await page.goto("https://coffee-cart.app/");
  await expect(page.locator('[data-test="Espresso"]')).toBeVisible();
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await page.getByRole("button", { name: "×" }).click();
  await page.getByRole("button", { name: "×" }).click();
  await page.locator('[data-test="Cappuccino"]').click();
  await expect(page.locator('[data-test="Espresso_Macchiato"]')).toBeVisible();

  await page.locator('[data-test="checkout"]').click();
  await page.getByRole("textbox", { name: "Name" }).fill("PSP");
  await page.getByRole("textbox", { name: "Name" }).press("Tab");
  await page.getByRole("textbox", { name: "Email" }).fill("TSAFA@MAIL.COM");
  await expect(page.getByRole("textbox", { name: "Name" })).toHaveValue("PSP");
  await expect(page.locator("section")).toMatchAriaSnapshot(`
    - heading "Payment details" [level=1]
    - button "×"
    `);
  await expect(page.locator("#app")).toContainText("Espresso $10.00");
});
*/

/*
1) npx playwright test 
2) fixture
suit 

browser
context
page
*/

/*
- мета? 
- який результат?
- які дані? 



*/

test("test2", { tag: "@fake" }, async ({ page }) => {
  await page.goto("https://codepen.io/your-work");

  const browser = await chromium.launch(); // браузер
  const context = await browser.newContext(); // контекст

  const page0 = await context.newPage(); // відкривається таба з веб сторінкою
  const page1 = await context.newPage(); // відкривається таба з веб сторінкою
  const page2 = await context.newPage(); // відкривається таба з веб сторінкою

  await page0.goto("https://playwright.dev/");
});

// test.describe - test suite
test.describe("set of fake tests", () => {
  test("test1", { tag: "@fake" }, async ({ page }) => {
    await page.locator("//*[@class = 'someclass']").click();
    await page.locator("//*[@class = 'someclass']").dblclick();
    await page.locator("//*[@class = 'someclass']").check();
    await page.locator("//*[@class = 'someclass']").fill("");
    await page.locator("//*[@class = 'someclass']").clear();
    await page
      .locator("//*[@class = 'someclass']")
      .pressSequentially("testawasfa", { delay: 1000 });
    await page
      .locator("//*[@class = 'someclass']")
      .press("Enter", { delay: 100 });
  });

  test("test2", { tag: "@fake" }, async () => {
    const randomNumber = Math.random() * 10;
    expect(randomNumber).toBeGreaterThan(3);
  });

  test("test3", { tag: "@fake" }, async () => {
    const randomNumber = Math.random() * 10;
    expect(randomNumber).toBeGreaterThan(3);
  });
});

test.describe("another fake test set", () => {
  test("test4", { tag: "@fake" }, async () => {
    const randomNumber = Math.random() * 10;
    expect(randomNumber).toBeGreaterThan(3);
  });

  test("it should be a valid response", async () => {});

  test("test5", { tag: "@fake" }, async () => {
    const randomNumber = Math.random() * 10;
    expect(randomNumber).toBeGreaterThan(3);
  });

  test("test6", { tag: "@fake" }, async () => {
    const someString = "test 'цей текст в кавичкаї'";
    const backticks = `"" '' ${someString}`;

    const randomNumber = Math.random() * 10;
    expect(randomNumber).toBeGreaterThan(3);
  });

  test("test7", async () => {
    const randomNumber = Math.random() * 10;
    expect(randomNumber).toBeGreaterThan(3);
  });

  test("test8", async () => {
    const randomNumber = Math.random() * 10;
    expect(randomNumber).toBeGreaterThan(3);
  });

  test("test9", async () => {
    const randomNumber = Math.random() * 10;
    expect(randomNumber).toBeGreaterThan(3);
  });

  test("test10", async () => {
    const randomNumber = Math.random() * 10;
    expect(randomNumber).toBeGreaterThan(3);
  });
});
