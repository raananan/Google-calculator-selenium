const { Builder, By, Key, utill, ChromiumWebDriver } = require("selenium-webdriver");
const by = require("selenium-webdriver/lib/by");
var driver = new Builder().forBrowser('chrome').build();

class Action {

    constructor() {
        global.driver = driver;
    }

    async Displayed(CssName) {
        let element_display;
        try {
            element_display = driver.findElement(By.id(CssName)).isDisplayed();
        } catch (err) {
            element_display = false;
        }
    }

    async OpenBrowser(url) {
        driver.op
        await driver.get(url);
    }

    async ActionMethod(CssName) {
        driver.findElement(By.xpath(CssName)).click();
    }
    async CheckResult(CssName) {
        let sum = await driver.findElement(By.id(CssName)).getText();

        if (sum != 15) {
            console.log("Wrong result, the result " + sum + " Should be 15");
        }
        console.log("The result is " + sum);

    }
    async CheckButonsWithNumbers(CssName) {
        let count = 0
        let sum_of_numbers = 0
        let count_of_numbers = 0;


        const numbers_of_buttons = await (await driver.findElements(By.xpath(CssName)));
        for (const element of numbers_of_buttons) {
            const text = await element.getText()
            if (!isNaN(text)) {
                count_of_numbers++;
            }

        }
        console.log("The number of buttons which contain numbers is " + count_of_numbers);
    }
    async CheckTotalButtons(CssName) {
        const numbers_of_buttons = await (await driver.findElements(By.xpath(CssName)));
        console.log("The number of all buttons is " + numbers_of_buttons.length);
    }

    async CloseBrowser() {
        driver.quit();
    }
}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

module.exports = Action;