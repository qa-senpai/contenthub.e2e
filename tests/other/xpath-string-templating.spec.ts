import { test, expect, Locator } from "@playwright/test";

const someGlobalConst = "QA-Senpai";

test(`CC-$1 order фаі`, async ({ page }) => {
  // функціональн область видимості
  const coffeeToOrder = "Espresso";
  const secondCoffeeToOrder = "Cappuccino";
  console.log(someGlobalConst);

  function anyFunc() {
    const asfa = "asfasf";
    const second2 = "asfasf";

    someGlobalConst;
    console.log(someGlobalConst21);
  }

  anyFunc();

  console.log(someGlobalConst21);
});

const someGlobalConst21 = "QA-Senpai";

test(`CC-$2 order фаі`, async ({ page }) => {
  const coffeeToOrder = "Espresso";
  const secondCoffeeToOrder = "Cappuccino";
  console.log(someGlobalConst);
});

for (const data of [
  { id: "1", coffee: "Espresso" },
  { id: "2", coffee: "Cappuccino" },
]) {
  test(`CC-${data.id} order ${data.coffee}`, async ({ page }) => {
    const coffeeToOrder = "Espresso";
    const secondCoffeeToOrder = "Cappuccino";

    const espressoCupLocator = page.locator(`[data-test="Cappuccino"]`);
    const espressoCup: Locator = page.locator(`[data-test='Espresso']`);

    await page.goto("https://coffee-cart.app/");
    await espressoCupLocator.click();
    await page.locator(`[data-test="${coffeeToOrder}"]`).dblclick();
    await page.locator(`[data-test="${secondCoffeeToOrder}"]`).dblclick();

    const text = await page.locator("").textContent();

    /*
    === - порівнюємо з урахуванням типу даних

    12314 === '12314'
    */

    if (text === "expected text") {
      console.log("Test passed");
    } else {
      console.log("Test failed");
    }

    // await page.getByRole("button", { name: "Nah, I'll skip." }).click();
    await page.getByRole("link", { name: "Cart page" }).click();
    // await page.getByRole("button", { name: "Add one Espresso" }).click();

    await page
      .locator(
        `//*[text() = '${coffeeToOrder}']/parent::li//button[text() = '+']`
      )
      .click();

    await page
      .locator(
        `//*[text() = '${secondCoffeeToOrder}']/parent::li//button[text() = '-']`
      )
      .dblclick();

    await page
      .locator(
        `//*[text() = '${coffeeToOrder}']/parent::li//button[text() = '+']`
      )
      .click();

    // await page
    //   .locator("button[aria-label *= 'Espresso'] >> visible=true", {
    //     hasText: "+",
    //   })
    //   // .filter({ visible: true })
    //   .dblclick();

    // await page.getByRole("button", { name: "Remove one Espresso" }).dblclick();
  });
}
