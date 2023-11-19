import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/donation");

  await expect(page).toHaveTitle(/Donation - Zeffy/);
});

// TODO check with different locale and timezone
test("has donations FR", async ({ page }) => {
  await page.goto("/donation");

  await expect(page.getByRole("heading", { name: "Donations" })).toBeVisible();

  await expect(page.getByRole("row")).toHaveCount(101);
  await expect(
    page.getByRole("row").filter({ hasText: "22 May, 16:47" + "G F" + "3000" }),
  ).toBeVisible();
});
