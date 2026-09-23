import { expect } from "@playwright/test";
import { customTest } from "../fixtures/CustomFixtures";

customTest("User Login test", async ({ loginPage }) => {
    await loginPage.visit();
    await loginPage.performLogin();
    await expect(loginPage.getDashboardText).toHaveText("Dashboard");
});