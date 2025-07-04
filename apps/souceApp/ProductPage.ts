import { Page } from "@playwright/test";

export class ProductPage {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  click() {
    console.log("clicked...");
  }

  dbclick() {
    console.log("dbclicked...");
  }
}
