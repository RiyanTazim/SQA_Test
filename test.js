import {Browser, Builder } from "selenium-webdriver";

const driver = new Builder().forBrowser(Browser.CHROME).build();

async function testRun() {
    await driver.get('https://demo.evershop.io/');
    await driver.manage().window().maximize();
    await driver.sleep(2000);
    // await driver.findElement({id: 'email'}).sendKeys('cJt5Q@example.com');
    // await driver.findElement({id: 'password'}).sendKeys('password');
    // await driver.findElement({css: 'button[type="submit"]'}).click();
    await driver.findElement(By.className("search_icon")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys("Stainless Steel Tharmos");
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys(Key.ENTER);
    await driver.sleep(2000);
    await driver.quit();
}

testRun();
