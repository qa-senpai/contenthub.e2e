import { tr } from "@faker-js/faker";
import { Page, test } from "@playwright/test";
import { USERS } from "../../utils/users";

export class LoginPage {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async login(username: string) {
    await this.page.locator('[data-test="username"]').fill(username);
    await this.page
      .locator('[data-test="password"]')
      .fill(process.env.PASSWORD as string);
    await this.page.locator('[data-test="login-button"]').click();
  }

  async fillForm(formData: {
    username?: string;
    password?: string;
    abc?: string;
    nub?: number;
    isActive?: boolean;
    email?: string;
    age?: number | null;
  }) {
    await this.page.locator('[data-test="username"]').fill("");
    await this.page.locator('[data-test="password"]').fill("");
    await this.page.locator('[data-test="password"]').fill("");
    await this.page.locator('[data-test="password"]').fill("");
    await this.page.locator('[data-test="password"]').fill("");
    await this.page.locator('[data-test="password"]').fill("");
    await this.page.locator('[data-test="password"]').fill("");
    await this.page.locator('[data-test="password"]').fill("");
    await this.page.locator('[data-test="login-button"]').click();
  }
}
