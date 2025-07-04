import test from "@playwright/test";

// CRUD Create Read Update Delete

test("get cookies", async ({ page, context }) => {
  await page.goto("https://www.zara.com/ua/", { waitUntil: "commit" });

  const cookies = await context.cookies();

  console.log(cookies);
});

test("add cookies", async ({ page, context }) => {
  await page.goto("https://www.zara.com/ua/", { waitUntil: "commit" });

  await context.addCookies([
    {
      name: "psp-cookies",
      value: "qa dojo cookie",
      domain: ".zara.com",
      path: "/",
      expires: 1750875736.620219,
      httpOnly: false,
      secure: false,
      sameSite: "Lax",
    },
  ]);

  const cookies = await context.cookies();
  console.log(cookies);
});

test("clear cookies", async ({ page, context }) => {
  await page.goto("https://www.zara.com/ua/", { waitUntil: "commit" });

  await context.addCookies([
    {
      name: "psp-cookies",
      value: "qa dojo cookie",
      domain: ".zara.com",
      path: "/",
      expires: 1750875736.620219,
      httpOnly: false,
      secure: false,
      sameSite: "Lax",
    },
  ]);

  let cookies = await context.cookies();
  console.log(cookies);

  await context.clearCookies({ name: "psp-cookies" });

  cookies = await context.cookies();
  console.log(cookies);
});

test("edit cookies", async ({ page, context }) => {
  await page.goto("https://www.zara.com/ua/", { waitUntil: "commit" });
  await context.addCookies([
    {
      name: "psp-cookies",
      value: "qa dojo cookie",
      domain: ".zara.com",
      path: "/",
      expires: 1750875736.620219,
      httpOnly: false,
      secure: false,
      sameSite: "Lax",
    },
  ]);

  let cookies = await context.cookies();

  const cookie = cookies.find((value) => value.name === "psp-cookies");

  cookie!.value = "edited qa dojo cookie";
  await context.clearCookies({ name: "psp-cookies" });

  await context.addCookies([cookie!]);
  cookies = await context.cookies();
  console.log(cookies);
});
