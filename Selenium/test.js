import { Browser, Builder, By, Key } from "selenium-webdriver";

const driver = new Builder().forBrowser(Browser.CHROME).build();
const gender = "Male";
const date = "15";

/* async function testRun() {
    await driver.get("https://demo.evershop.io/");
    await driver.sleep(2000);
    await driver.manage().window().maximize();
    await driver.sleep(2000);
    await driver.findElement(By.className("search__icon")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys("Stainless Steel Thermos", Key.ENTER);
    await driver.sleep(2000);
    await driver.findElement(By.id("APjFqb")).sendKeys(Key.ENTER);
    await driver.sleep(2000);
    await driver.quit();
} */
async function testRun() {
    await driver.get("https://demoqa.com/");
    await driver.sleep(2000);
    await driver.manage().window().maximize();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//h5[text()='Forms']")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//span[text()='Practice Form']")).click();
    await driver.sleep(2000);
    await driver.findElement(By.id("firstName")).sendKeys("John");
    await driver.findElement(By.id("lastName")).sendKeys("Doe");
    await driver.findElement(By.id("userEmail")).sendKeys("johndoe@example.com");
    await driver.findElement(By.xpath(`//input[@id='gender-radio-1' and @value='${gender}']`)).click();
    await driver.findElement(By.id("userNumber")).sendKeys("1234567890");
    await driver.findElement(By.id("dateOfBirthInput")).click();
    await driver.findElement(By.className("react-datepicker__year-select")).click();
    await driver.findElement(By.xpath("//option[@value='2010']")).click();
    await driver.sleep(2000);
    await driver.findElement(By.className(`react-datepicker__day react-datepicker__day--0${date}`)).click();
    await driver.sleep(2000);
    await driver.quit();
}

testRun();
/* Techniques to find xpath locator
//section[@id='home']
//input[@class='form-input common-input'] -> it can have multipe with same class attributes. but this is not a good practice. id newly added one arises with same class, it might break the array index and show error.
//label[text()='Full Name:']
//label[contains(@class,'form-label')]
//label[contains(text(),'Full/Name')] to find partially match
//section[contains(.,'')]
//div[@id='name-section']/input[@class='form-label form-input'] -> to find common element filtering through unique parent id/class/or other unique attribute
//input[@id='full-name']/ancestor::div[@class='form-input common-input'] -> using ancestor to find parent element with unique attribute and then find child element with common attribute
//input[@id='full-name' and @class='form-input common-input'] -> using and operator to find element with multiple attributes
//input[@id='full-name' or @class='form-input common-input'] -> using or operator to find element with either of the attributes
//label[@id='full-name']/following-sibling::input[@class='form-input common-input'] -> find through sibling element
*/