import { test, expect } from "@playwright/test";
import { LoginPage } from "./pages/LoginPage";
test("User Login test", async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.visit();
    await loginPage.performLogin("Admin", "admin123");
    await expect(loginPage.getDashboardText).toHaveText("Dashboard");
    await page.getByRole("link", { name: 'PIM' }).click();
    await page.getByRole("listitem").filter({ hasText: 'Add Employee' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).fill("Bharath");
    await page.getByRole('textbox', { name: 'Last Name' }).fill("C A");
    await page.locator(".oxd-input-group").filter({ hasText: 'Employee Id' }).locator("input").fill("123123");
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByText("Successfully Saved")).toBeVisible();
}) 