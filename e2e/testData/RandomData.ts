import { EmployeeDetailsInterface } from "./EmployeeDetailsInterface";
import { faker } from '@faker-js/faker'

export function getRandomEmployeeDetails(): EmployeeDetailsInterface {
    return {
        firstName: faker.person.firstName(),
        middleName: faker.person.middleName(),
        lastName: faker.person.lastName(),
        employeeId: faker.number.int(10000).toString()
    }
}