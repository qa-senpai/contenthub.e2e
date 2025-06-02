import { test, expect, Page, Locator } from "@playwright/test";

const espressoLocator = (page: Page) => page.locator('[data-test="Espresso"]'); // приклад використання arrow function для отримання локатора

const getCoffeeIngidient = async (page: Page, coffeeTitle: string) =>
  await page.locator(`[data-test="${coffeeTitle}"]`).textContent(); // arrow function повертає результат виконання якщо не використовуються {}
async function getCoffeeIngidientFunc(page: Page, coffeeTitle: string) {
  return await page.locator(`[data-test="${coffeeTitle}"]`).textContent(); // те саме, але з function declaration
}

async function clickOnEspresso(page: Page, orderCount: number | string) {
  for (let i = 1; i <= Number(orderCount); i++) {
    await page.locator('[data-test="Espresso"]').click();
  }
}

async function clickOnCoffeeCup(page: Page, title: "Espresso" | "Mocha") {
  await page.locator(`[data-test="${title}"]`).click();
}

async function clickOnCheckout(page: Page) {
  await page.locator('[data-test="checkout"]').click();
}

async function submitOrder(
  page: Page,
  name: string,
  email: string,
  check = false
) {
  await fillRegistrationData(page);
  await page.getByRole("textbox", { name: "Name" }).fill(name);
  await page.getByRole("textbox", { name: "Email" }).fill(email);
  if (check) {
    await page.getByRole("checkbox", { name: "Promotion checkbox" }).check();
  }
  await page.getByRole("button", { name: "Submit" }).click();
}

async function fillRegistrationData(page, username?, email?, pass?) {
  await page.fill('[placeholder="Username"]', "sss");
  await page.fill('[placeholder="Email"]', "ss");
  await page.fill('[placeholder="Password"]', "sssss");
  await page.click("button");
}

test("test", async ({ page }) => {
  await page.goto("https://coffee-cart.app/");

  await clickOnEspresso(page, 1);
  await clickOnCoffeeCup(page, "Mocha");
  await clickOnCheckout(page);
  await submitOrder(page, "senpai", "senpai@gm.com", false);
});

test("LS-002 order every coffee drink", async ({ page }) => {
  // DRY - не повторюй себе
  await page.goto("https://coffee-cart.app/");

  await page.addLocatorHandler(page.locator(".close"), async (locator) => {
    await locator.click();
  });

  page.on("popup", async (page) => {
    await page.locator(".close").click();
  });

  let i = 99;

  while (await page.locator(".close").isVisible()) {
    await page.reload();
  }

  for (let i = 0; i <= 8; i++) {
    if (await page.locator(".close").isVisible()) {
      await page.locator(".close").click();
    }

    if (i === 2 || i === 5) {
      await page.locator(".close").click();
    }

    await page.locator(".cup-body:not(.disabled-hover)").nth(i).click();
  }
});

// function declaration

// function declaration
async function goTo(page: Page) {
  await page.goto("https://coffee-cart.app/");
}

// function expression
const goToHomepage = async function (page: Page) {
  await page.goto("https://coffee-cart.app/");
};

// arrow function
// можна скіпати фігурні дужки
const goToHome = async (page: Page, func) => {
  await page.goto("https://coffee-cart.app/");
  func();
};

// callback function (зворотній виклик)

// ключове слово this
console.log(this);

async function newArticleCreation(page) {
  await page.locator('[href="/editor"]').click();
  await page.locator('[data-qa-id="editor-title"]').fill("Test Article");
  await page
    .locator('[data-qa-id="editor-description"]')
    .fill("something interesting");
  await page
    .locator('[placeholder="Write your article (in markdown)"]')
    .fill("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
  await page.locator('[data-qa-id="editor-tags"]');
}

async function newArticleCreation1(page: Page) {
  await page.locator('[href="/editor"]').click();
  await page.locator('[data-qa-id="editor-title"]').fill("Test Article");
  await page
    .locator('[data-qa-id="editor-description"]')
    .fill("something interesting");
  await page
    .locator('[placeholder="Write your article (in markdown)"]')
    .fill("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
  await page.locator('[data-qa-id="editor-tags"]');
}
