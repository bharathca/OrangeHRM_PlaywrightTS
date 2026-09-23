import { test as base } from '@playwright/test'
import { MenuComponents } from '../tests/pages/components/MenuComponents'
import { EmployeeListPage } from '../tests/pages/EmployeeListPage'
import { AddEmployeePage } from '../tests/pages/AddEmployeePage'
import { LoginPage } from '../tests/pages/LoginPage'

type pages = {
    loginPage: LoginPage,
    menuComponents: MenuComponents,
    employeeListPage: EmployeeListPage,
    addEmployeePage: AddEmployeePage
}

export const customTest = base.extend<pages>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    }, 
    menuComponents: async ({ page }, use) => {
        await use(new MenuComponents(page));
    },
    employeeListPage: async ({ page }, use) => {
        await use(new EmployeeListPage(page));
    },
    addEmployeePage: async ({ page }, use) => {
        await use(new AddEmployeePage(page));
    }
})