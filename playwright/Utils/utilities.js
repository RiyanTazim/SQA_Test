import {faker} from "@faker-js/faker"

export class Utilities{
    getRandomNum(min, max){
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
    }
    userData() {
        // const getRandomNum = this.getRandomNum(5000, 9999999);
        // const randomEmail = faker.internet.email();
        // return randomEmail;

        const user = {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            fullname: faker.person.fullName(),
        };
        return user;
    }
}