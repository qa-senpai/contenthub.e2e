/**
  BASE FIXTURE - Центральний файл для налаштування тестових фікстур
 
  ПРИЗНАЧЕННЯ ФІКСТУР:
  Фікстури в Playwright дозволяють створювати переисподкористовувані компоненти
  для тестів, які автоматично ініціалізуються та очищуються між тестами.
 
  ПЕРЕВАГИ ФІКСТУР:
  Автоматичне керування життєвим циклом об'єктів
  Повторне використання коду між тестами
  Ленива ініціалізація (lazy loading) - створюються тільки при використанні
  Автоматичне очищення ресурсів після тесту
  Можливість налаштування залежностей між фікстурами
 */

import { test as base, Page } from "@playwright/test";
import { ProductPage } from "../../apps/souceApp/ProductPage";
import { ProductDetailsPage } from "../../apps/souceApp/ProductDetailsPage";
import { CartPage } from "../../apps/souceApp/CartPage";
import { LoginPage } from "../../apps/souceApp/LoginPage";

type Pages = {
  productPage: ProductPage;
  productDetailsPage: ProductDetailsPage;
  cartPage: CartPage;
  loginAsStandartUser: Page;
  loginPage: LoginPage;
  mockServer: Page;
};

export const test = base.extend<Pages>({
  page: async ({ page }, use) => {
    console.log("this is test start");

    await page.goto("https://www.saucedemo.com/");

    await use(page);

    console.log("this is test end ");
  },

  mockServer: async ({ page }, use) => {
    page.route("*/api/products", (route) => {
      // route.fulfill({ json: mockProductsData });
    });

    await use(page);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await use(loginPage);
  },
  productPage: async ({ page }, use) => {
    const productPage = new ProductPage(page);

    console.log("this is triggered inside productPage fixture");

    await use(productPage);
  },
  productDetailsPage: async ({ page }, use) => {
    const productDetailsPage = new ProductDetailsPage(page);

    console.log("this is triggered inside productDetailsPage fixture");

    await use(productDetailsPage);
  },
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);

    console.log("this is triggered inside cartPage fixture");

    await use(cartPage);
  },
});

/*
=== ЗАГАЛЬНІ РЕКОМЕНДАЦІЇ ПО ВИКОРИСТАННЮ ФІКСТУР ===

1. НАЙКРАЩІ ПРАКТИКИ:
   Використовуйте описові назви фікстур
   Типізуйте всі фікстури
   Групуйте пов'язані фікстури
   Документуйте складні фікстури

2. АНТИ-ПАТЕРНИ:
   Не створюйте занадто багато фікстур в одному файлі
   Не робіть фікстури занадто складними
   Не забувайте про cleanup логіку
   Не хардкодьте значення (винесіть в конфіг)
*/
