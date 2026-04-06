export class Profile {
    constructor(page) {
        this.page = page;

        this.profileButton = this.page.locator("//a[contains(@href,'account')]");
        this.CreateAccountLink = this.page.getByRole('link', { name: 'Create an account' });
        this.fullNameInputF = this.page.getByRole('textbox', { name: 'Full Name' });
        this.fullEmailInputF = this.page.getByRole('textbox', { name: 'Full Email' });
        this.fullPasswordInputF = this.page.getByRole('textbox', { name: 'Full Password' });
        this.signUpButton = this.page.getByRole('button', { name: 'Sign Up' });
        this.signInButton = this.page.getByRole('button', { name: 'Sign In' });
    }

    locateButton(buttonName){
        return this.page.getByRole('button', { name: buttonName });
    }

    async clickOnProfileButton() {
        await this.profileButton.click();
    }

    async clickOnCreateAccountLink() {
        await this.CreateAccountLink.click();
    }

    async fillFullName(fullName) {
        await this.fullNameInputF.fill(fullName);
    }

    async fillEmail(email) {
        await this.fullEmailInputF.fill(email);
    }

    async fillPassword(password) {
        await this.fullPasswordInputF.fill(password);
    }

    async clickOnButton(buttonName) {
        await this.locateButton(buttonName).click();
    }

    async clickOnSignUpButton() {
        await this.signUpButton.click();
    }

    async clickOnSignInButton() {
        await this.signInButton.click();
    }

}