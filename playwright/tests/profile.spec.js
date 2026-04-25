import {expect, test} from "@playwright/test";
import { Profile } from "../pageObjects/profile";
import { Utilities } from "../Utils/utilities";
const utilities = new Utilities();
let user = "";

const fullname = utilities.userData().fullname;
const userEmail = `${utilities.userData().fullName}@yopmail.com`;

// const profile = new Profile();
test.describe.serial('Demo Evershop Site Authentication Tests', () => {

    let profile;
    test.beforeEach(async ({ page }) => {
        profile = new Profile(page);
        await page.goto("https://demo.evershop.io/")
    })

    test('Register with valid information', async ({ page }) => {
        const profile = new Profile(page);
        await page.goto('/');
        await profile.clickOnProfileButton();
        await profile.clickOnCreateAccountLink();
        await page.waitForLoadState('networkidle');
        await profile.fillFullName(fullname);
        // user = Utilities.prototype.randomEmail();
        await profile.fillEmail(userEmail);
        await profile.fillPassword("tazim@123");
        // await profile.clickOnSignUpButton();
        await profile.clickOnButton("Sign Up");
    });

    test('Login with invalid credentials', async ({ page }) => {
        const profile = new Profile(page);
        await page.goto('/');
        await profile.clickOnProfileButton();
        await page.waitForLoadState('networkidle');
        await profile.fillEmail(userEmail);
        await profile.fillPassword("tazim@123");
        // await profile.clickOnSignInButton();
        await profile.clickOnButton("Sign In");
        await expect(profile.invalidLoginAlert).toBeVisible({ timeout: 10000 });
    });
});