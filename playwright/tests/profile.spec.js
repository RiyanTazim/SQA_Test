import {expect, test} from "@playwright/test";
import { Profile } from "../pageObjects/profile";
let user = "";

// const profile = new Profile();
test.describe('Demo Evershop Site Authentication Tests', () => {
    test.skip('Register with valid information', async ({ page }) => {
        const profile = new Profile(page);
        await page.goto('/');
        await profile.clickOnProfileButton();
        await profile.clickOnCreateAccountLink();
        await page.waitForLoadState('networkidle');
        await profile.fillFullName("Tazim Tazvi");
        await profile.fillEmail("tazim@me.com");
        await profile.fillPassword("tazim@123");
        // await profile.clickOnSignUpButton();
        await profile.clickOnButton("Sign Up");
    });

    test('Login with invalid credentials', async ({ page }) => {
        const profile = new Profile(page);
        await page.goto('/');
        await profile.clickOnProfileButton();
        await page.waitForLoadState('networkidle');
        await profile.fillEmail("tazim@me.com");
        await profile.fillPassword("tazim@123");
        // await profile.clickOnSignInButton();
        await profile.clickOnButton("Sign In");
        await expect(profile.invalidLoginAlert).toBeVisible({ timeout: 10000 });
    });
});