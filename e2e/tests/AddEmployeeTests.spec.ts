import { expect } from '@playwright/test'
import { getRandomEmployeeDetails } from '../testData/RandomData'
import { customTest } from '../fixtures/CustomFixtures';
customTest("Add Employee Tests", async ({ loginPage, menuComponents, addEmployeePage, employeeListPage }) => {
    const firstName = getRandomEmployeeDetails().firstName;
    const middleName = getRandomEmployeeDetails().middleName;
    const lastName = getRandomEmployeeDetails().lastName;
    const employeeId = getRandomEmployeeDetails().employeeId;

    await loginPage.visit();
    await loginPage.performLogin();
    await expect(loginPage.getDashboardText).toHaveText("Dashboard");

    await menuComponents.selectMenuItem("PIM");

    await menuComponents.selectMenuItem("Add Employee");

    addEmployeePage.addEmployeeDetails(firstName, middleName, lastName, employeeId);
    await expect(addEmployeePage.getToastMessage).toHaveText("Successfully Saved");

    await expect(menuComponents.getCurrentTopMenuItem("Employee List")).toHaveClass(/--visited/);

    await expect(employeeListPage.getFirstName).toHaveValue(firstName);
    await expect(employeeListPage.getMiddleName).toHaveValue(middleName);
    await expect(employeeListPage.getLastName).toHaveValue(lastName);
    await expect(employeeListPage.getEmployeeId).toHaveValue(employeeId);
}) 
