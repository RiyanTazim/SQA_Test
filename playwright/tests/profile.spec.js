import test from "node:test";
import { Profile } from "../pageObjects/profile";

const profile = new Profile();
test.describe('Demo Evershop Site Authentication Tests', () => {
    test('Register with valid information', async ({ page }) => {
        const profile = new Profile(page);
        await profile.clickOnProfileButton();
        await profile.clickOnCreateAccountLink();
        await profile.fillFullName("Tazim Tazvi");
        await profile.fillEmail("tazim@me.com");
        await profile.fillPassword("tazim@123");
        // await profile.clickOnSignUpButton();
        await profile.clickOnButton("Sign Up");
    });

    test('Login with valid credentials', async ({ page }) => {
        const profile = new Profile(page);
        await profile.clickOnProfileButton();
        await profile.fillEmail("tazim@me.com");
        await profile.fillPassword("tazim@123");
        // await profile.clickOnSignInButton();
        await profile.clickOnButton("Sign In");
    });
});