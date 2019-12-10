const {Builder, By, Key, util} = require('selenium-webdriver');

async function example() {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get(" https://demo.1crmcloud.com/login.php");
    const par1 = By.id("login_user");
    await driver.findElement(par1).sendKeys("admin");
    const par2 = By.id("login_pass");
    await driver.findElement(par2).sendKeys("admin",Key.ENTER);
    
    const par3 = By.className('meta-profile');
    await driver.sleep(20000);
    await driver.findElement(par3).click();
}
example();