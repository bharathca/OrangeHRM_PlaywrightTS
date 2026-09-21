import { Locator, Page } from '@playwright/test'

export class AddEmployeePage {
    page: Page;
    firstNameInputField: Locator;
    lastNameInputField: Locator;
    employeeIdInputField: Locator;
    saveButton: Locator;
    successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInputField = this.page.getByRole('textbox', { name: 'First Name' });
        this.lastNameInputField = this.page.getByRole('textbox', { name: 'Last Name' });
        this.employeeIdInputField = this.page.locator('.oxd-input-group').filter({ hasText: 'Employee Id' }).locator('input');
        this.saveButton = this.page.getByRole('button', { name: 'Save' });
        this.successMessage = this.page.getByText("Successfully Saved");
    }

    async addEmployeeDetails(firstName: string, lastname: string, employeeId: string) {
        await this.firstNameInputField.fill(firstName);
        await this.lastNameInputField.fill(lastname);
        await this.employeeIdInputField.fill(employeeId);
        await this.saveButton.click();
    }

    get getSuccessMessage() {
        return this.successMessage;
    }
}