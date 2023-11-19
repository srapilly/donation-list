import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/donation");

  await expect(page).toHaveTitle(/Donation - Zeffy/);
});

test("has donations", async ({ page }) => {
  await page.goto("/donation");

  await expect(page.getByRole("heading", { name: "Donations" })).toBeVisible();

  await expect(page.getByRole("row")).toHaveCount(101);
  await expect(
    page.getByRole("row").filter({ hasText: "1684766860371" + "G F" + "3000" }),
  ).toBeVisible();
});
