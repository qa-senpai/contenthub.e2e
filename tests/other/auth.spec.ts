import { test, expect, request, Page } from "@playwright/test";

// const data = {
//   testId: 1,
//   testName: 'asfas',
//   userName: "asfaf",
//   email: '@afsaf',
//   password: 'asfasfa',
//   expect: async (page: Page) => await expect(loginPage.email).toBeVisible(),
// };

test("API login to automation testing store", async ({ page }) => {
  const context = await request.newContext({
    baseURL: "https://teststore.automationtesting.co.uk",
    extraHTTPHeaders: {
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-language": "en-US,en;q=0.9,uk;q=0.8",
      "cache-control": "max-age=0",
      "content-type": "application/x-www-form-urlencoded",
      origin: "https://teststore.automationtesting.co.uk",
      referer:
        "https://teststore.automationtesting.co.uk/index.php?controller=authentication&back=https%3A%2F%2Fteststore.automationtesting.co.uk%2Findex.php",
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
      "upgrade-insecure-requests": "1",
    },
    // storageState: "storage-state.json",
  });

  let response = await context.post(
    "/index.php?controller=authentication&back=https%3A%2F%2Fteststore.automationtesting.co.uk%2Findex.php",
    {
      form: {
        email: "test@gm.com",
        password: "test123",
        submitLogin: "1",
        back: "https://teststore.automationtesting.co.uk/index.php",
      },
    }
  );

  expect(response.status()).toBe(200); // or 302 if it redirects
  // const body = await response.text();
  // const headers = response.headers();
  // const headersArr = response.headersArray();

  // await context.storageState({ path: "storage-state.json" });

  await page.goto("https://teststore.automationtesting.co.uk/index.php");

  response = await context.post("/index.php?controller=cart", {
    form: {
      // token: "c524e38b0ff6123de306d952587dc217",
      id_product: "1",
      id_customization: "0",
      "group[1]": "1",
      "group[2]": "8",
      qty: "1",
      add: "1",
      action: "update",
    },
  });

  await context.post(
    "/index.php?fc=module&module=ps_shoppingcart&controller=ajax",
    {
      form: {
        id_customization: "0",
        id_product_attribute: "1",
        id_product: "1",
        action: "add-to-cart",
      },
    }
  );

  // Verify response
  // expect(cartResponse.status()).toBe(200);

  // Verify the response
  expect(response.status()).toBe(200);
});

test.use({ storageState: "storage-state.json" });

test(`check that user logged`, async ({ page }) => {
  await page.goto("/");

  await expect
    .poll(async () => {
      const count = await page
        .locator("products-category-grid-media-carousel-item")
        .count();

      return count;
    })
    .toBeGreaterThan(60);

  const count = await page
    .locator("products-category-grid-media-carousel-item")
    .count();
  await expect(
    page.locator("products-category-grid-media-carousel-item").last()
  ).toBeVisible();

  await page.goto("https://teststore.automationtesting.co.uk/index.php");

  // await data.expect(page);
  console.log("body");
});
