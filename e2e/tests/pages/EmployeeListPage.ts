import { Locator, Page } from '@playwright/test'
export class EmployeeListPage {
    page: Page;
    firstNameInputField: Locator;
    middleNameInputField: Locator;
    lastNameInputField: Locator;
    employeeIdInputField: Locator;
    constructor(page: Page) {
        this.page = page;
        this.firstNameInputField = this.page.locator('[name="firstName"]');
        this.middleNameInputField = this.page.locator('[name="middleName"]');
        this.lastNameInputField = this.page.locator('[name="lastName"]');
        this.employeeIdInputField = this.page.locator('.oxd-input-group').filter({ hasText: 'Employee Id' }).locator('input');
    }

    get getFirstName() {
        return this.firstNameInputField;
    }
    get getMiddleName() {
        return this.middleNameInputField;
    }
    get getLastName() {
        return this.lastNameInputField;
    }
    get getEmployeeId() {
        return this.employeeIdInputField;
    }
}