import { Page } from "@playwright/test";
import { CartPage } from "./CartPage";
import { LoginPage } from "./LoginPage";
import { ProductDetailsPage } from "./ProductDetailsPage";
import { ProductPage } from "./ProductPage";

export class PageManager {
  cartPage: CartPage;
  loginPage: LoginPage;
  productDetailsPage: ProductDetailsPage;
  productPage: ProductPage;

  constructor(page: Page) {
    this.cartPage = new CartPage(page);
    this.loginPage = new LoginPage(page);
    this.productDetailsPage = new ProductDetailsPage(page);
    this.productPage = new ProductPage(page);
  }
}
