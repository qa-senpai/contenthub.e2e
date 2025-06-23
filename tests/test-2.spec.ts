import { test, expect, Page } from "@playwright/test";

type TextControls = {
  text?: string;
  search?: string;
  password?: string;
  email?: string;
  url?: string;
  tel?: string;
};

test("test1", async ({ page }) => {
  const formData = {
    text: "this is my input",
    search: "this is my search",
    password: "asffsaf",
    email: "psp@gm.lame",
    url: "https://testr.com",
    tel: "0982324942",
  };

  const intputElementsPage = new InputElements(page);

  const locator = intputElementsPage.getInputLocator("text");

  await page.goto(
    "https://testpages.eviltester.com/styled/reference/input.html"
  );

  await intputElementsPage.fillTextControls(formData);
});

class InputElements {
  page: Page;

  getInputLocator = (inputLabel: string) =>
    this.page.locator(`//input[@name='${inputLabel}']`);

  constructor(page: Page) {
    this.page = page;
  }

  async fillTextControls(formData: TextControls) {
    for (const key in formData) {
      await this.page.locator(`//input[@name='${key}']`).fill(formData[key]);
    }
  }

  async fillTextCAsArray(formData: TextControls) {
    for (const [key, value] of Object.entries(formData)) {
      await this.page.locator(`//input[@name='${key}']`).fill(value);
    }
  }
}

class HomePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickArticleByTitle(title: string) {
    await this.page
      .locator(`[data-qa-type="preview-title"]`, { hasText: title })
      .click();
  }

  async clickArticleByNumber(number = 0) {
    await this.page
      .locator(`[data-qa-type="article-preview"]`)
      .nth(number)
      .click();
  }

  async clickOnAllArticle() {
    for (let i = 0; i <= 10; i++) {
      await this.clickArticleByNumber(i);
    }
  }

  async fillTextCAsArray(formData: TextControls) {
    for (const [key, value] of Object.entries(formData)) {
      await this.page.locator(`//input[@name='${key}']`).fill(value);
    }
  }
}
