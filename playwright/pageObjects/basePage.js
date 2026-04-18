export class BasePage {
    constructor(page) {
        this.page = page;
    }


    locationButton(buttonName) {
        return this.page.getByRole('button', { name: buttonName });
    }

    async clickOnButton(buttonName) {
        await this.locationButton(buttonName).click();
    }
}