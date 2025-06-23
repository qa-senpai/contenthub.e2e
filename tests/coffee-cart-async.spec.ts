import test, { Route } from "@playwright/test";
import fs from "fs";

test("test", async ({ page }) => {
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await page.locator('[data-test="Cappuccino"]').click();

  //   fs.copyFileSync(
  //     "condulitApp/pages/BankAccount.ts",
  //     "condulitApp/pages/BankAccount.copy.ts"
  //   );

  //   page.locator('[data-test="checkout"]').click();

  //   await page.getByRole("textbox", { name: "Name" }).fill("PSP");
  //   await page.getByRole("textbox", { name: "Name" }).press("Tab");
  //   await page.getByRole("textbox", { name: "Email" }).fill("TSAFA@MAIL.COM");
});

test("Get network data", async ({ page }) => {
  async function getUserToken() {
    await page.locator("button").click();
    const response = await page.waitForResponse(
      "https://conduit-api.learnwebdriverio.com/api/users"
    );

    return response.json();
  }

  await page.goto("https://demo.learnwebdriverio.com/register");

  page.route("**", async (route: Route) => {
    const response = await route.fetch();
    let json = await response.json();

    await route.fulfill({ response, json });
  });

  await page
    .getByPlaceholder("Username")
    .fill("test" + Math.floor(Math.random() * 10));
  await page.getByPlaceholder("Email").fill(Math.random() + "@gm.c");
  await page.getByPlaceholder("Password").fill(Math.random().toString());

  //   await page.route("**", async (route: Route) => {
  //     const response = await route.fetch();
  //     let json = await response.json();
  //     json = {
  //       message: "Hey hey",
  //     };
  //     await route.fulfill({ response, json });
  //   });

  //   const promise = page.waitForResponse(
  //     "https://conduit-api.learnwebdriverio.com/api/users"
  //   );

  const token = await getUserToken();
  console.log(token);
});

test("Api request ", async ({ request }) => {
  //   const response = await Promise.all([
  //     request.post("https://jsonplaceholder.typicode.com/posts", {
  //       data: {
  //         title: "foo",
  //         body: "bar",
  //         userId: 1,
  //       },
  //     }),
  //     request.post("https://jsonplaceholder.typicode.com/posts", {
  //       data: {
  //         title: "foo1",
  //         body: "bar2",
  //         userId: 2,
  //       },
  //     }),
  //     request.post("https://jsonplaceholder.typicode.com/posts", {
  //       data: {
  //         title: "foo3",
  //         body: "bar3",
  //         userId: 3,
  //       },
  //     }),
  //   ]);

  /*
pending - початковий
fullfiled - успішно виконаний
rejected - виконання з помилкою
  */

  const resultSettaled = await Promise.allSettled([
    Promise.resolve("Успіх"),
    Promise.reject("Невдача"),
    Promise.resolve("Успіх"),
  ]);

  const promiseAll = await Promise.all([
    Promise.resolve("Успіх"),
    Promise.reject("Невдача"),
    Promise.resolve("Успіх"),
  ]);

  const promiseRace = await Promise.race([
    Promise.resolve(setTimeout(() => "done", 1000)),
    Promise.resolve(setTimeout(() => "done3", 3000)),
    Promise.resolve(setTimeout(() => "done2", 2000)),
  ]);

  console.log(1);

  //   console.log("1");
  //   console.log(response[0]);
  //   console.log(response[1]);
  //   console.log(response[2]);

  //   await request.get("https://jsonplaceholder.typicode.com/posts");
  //   console.log(1);

  //   await request.get("https://jsonplaceholder.typicode.com/posts");
  //   console.log(2);

  //   await request.get("https://jsonplaceholder.typicode.com/posts");
  //   console.log(3);

  //   await request.get("https://jsonplaceholder.typicode.com/posts");
  //   console.log(4);

  //   await request.get("https://jsonplaceholder.typicode.com/posts");
  //   console.log(5);
});
