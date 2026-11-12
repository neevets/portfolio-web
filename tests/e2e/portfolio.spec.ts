import { expect, test } from "@playwright/test";

test("homepage loads and mounts the React application", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Neevets/i);
  await expect(page.locator("#root > *").first()).toBeVisible();
});

test("unknown routes render the not-found page", async ({ page }) => {
  await page.goto("/this-route-should-not-exist");
  await expect(page.locator("#root")).not.toBeEmpty();
  await expect(page).toHaveTitle(/Neevets/i);
});
