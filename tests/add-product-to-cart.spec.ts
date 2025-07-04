import { expect, chromium, Page } from "@playwright/test";
import { test } from "./CMP/fixtures/baseFixture-1";

test.describe("", () => {
  /**
   * РЕКОМЕНДАЦІЇ ПО ВИКОРИСТАННЮ test.step():
   *
   * 1. СТРУКТУРУВАННЯ ТЕСТУ:
   *    - Кожен test.step() повинен представляти логічний крок тестового сценарію
   *    - Назви кроків мають бути зрозумілими та описувати конкретну дію
   *    - Використовуйте дієслова в назвах кроків для кращої читабельності
   *
   * 2. ПЕРЕВАГИ test.step():
   *    - Покращує читабельність звітів (кожен крок відображається окремо)
   *    - Полегшує дебагінг (можна побачити на якому кроці тест упав)
   *    - Створює логічну структуру тесту
   *
   * 3. РЕКОМЕНДАЦІЇ:
   *    - Для даних, що передаються між кроками, використовуйте return
   *    - Групуйте пов'язані дії в один крок
   *    - Не робіть кроки занадто дрібними або занадто великими
   *    - Використовуйте описові назви замість технічних деталей
   */
  test(
    "MQA-123515 Add product to cart, price should be valid",
    { tag: ["@cart", "@price", "@product_list"] },
    async ({ page, pageManage }) => {
      await test.step("precondition", async () => {
        //
      });

      await test.step("login as standard_user", async () => {
        await pageManage.loginPage.login();
      });

      const locat = `//*[text() = 'Sauce Labs Backpack']/ancestor::div[@data-test='inventory-item']//*[@data-test="inventory-item-price"]`;

      const price =
        await test.step("get backpack price from the list", async () => {
          return page.locator(locat).textContent();
        });

      await test.step("add backpack to cart list", async () => {
        await page
          .locator('[data-test="add-to-cart-sauce-labs-backpack"]')
          .click();
      });

      await test.step("click on shopping cart link", async () => {
        await page.locator('[data-test="shopping-cart-link"]').click();
      });

      await test.step("check that backpack price are same as in product list", async () => {
        await expect(
          page.locator('[data-test="inventory-item-price"]')
        ).toContainText(price!);
      });
    }
  );
});

/*
DOD
- used pom pattern for reusability
- used test.step for visibility 
- preconditions utilize API layer 
- 
*/

test(
  "asfafgsafs",
  { tag: ["@cart", "@price", "@product_list"] },
  async ({ page, pageManage }) => {
    await test.step("precondition", async () => {
      //
    });

    await test.step("login as standard_user", async () => {});

    const price =
      await test.step("get backpack price from the list", async () => {});

    await test.step("add backpack to cart list", async () => {});

    await test.step("click on shopping cart link", async () => {});

    await test.step("check that backpack price are same as in product list", async () => {});
  }
);

test.afterEach(async ({ page }) => {
  await test.step("post condition", () => {});
});
