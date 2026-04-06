export class BasePage {
    constructor(page) {
        this.page = new page();
    }


    locationButton(buttonName) {
        return this.page.getByRole('button', { name: buttonName });
    }

    async clickOnButton(buttonName) {
        await this.locationButton(buttonName).click();
    }
}