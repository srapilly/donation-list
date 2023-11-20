import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/donation");

  await expect(page).toHaveTitle(/Donation - Zeffy/);
});

// TODO check with different locale and timezone
test("has donations", async ({ page }) => {
  await page.goto("/donation");

  await expect(page.getByRole("heading", { name: "Donations" })).toBeVisible();

  await expect(page.getByRole("row")).toHaveCount(11);
  await expect(
    page.getByRole("row").filter({ hasText: "22 May, 16:47" + "G F" + "$30" }),
  ).toBeVisible();
});

test("has pagination", async ({ page }) => {
  await page.goto("/donation");

  await expect(page.getByRole("link", { name: "Next" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Previous" })).not.toBeVisible();

  await page.getByRole("link", { name: "Next" }).click();

  await expect(
    page.getByRole("row").filter({ hasText: "22 May, 01:03" + "R M" + "$20" }),
  ).toBeVisible();

  await expect(page.getByRole("link", { name: "Next" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Previous" })).toBeVisible();
});
