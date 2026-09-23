import { Locator, Page } from '@playwright/test'

export class AddEmployeePage {
    page: Page;
    firstNameInputField: Locator;
    middleNameInputField: Locator;
    lastNameInputField: Locator;
    employeeIdInputField: Locator;
    saveButton: Locator;
    successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInputField = this.page.getByRole('textbox', { name: 'First Name' });
        this.middleNameInputField = this.page.getByRole('textbox', { name: 'Middle Name' });
        this.lastNameInputField = this.page.getByRole('textbox', { name: 'Last Name' });
        this.employeeIdInputField = this.page.locator('.oxd-input-group').filter({ hasText: 'Employee Id' }).locator('input');
        this.saveButton = this.page.getByRole('button', { name: 'Save' });
        this.successMessage = this.page.getByText("Successfully Saved");
    }

    async addEmployeeDetails(firstName: string, middleName: string, lastname: string, employeeId: string) {
        await this.firstNameInputField.fill(firstName);
        await this.middleNameInputField.fill(middleName);
        await this.lastNameInputField.fill(lastname);
        await this.employeeIdInputField.fill(employeeId);
        await this.saveButton.click();
    }

    get getToastMessage() {
        return this.successMessage;
    }
}